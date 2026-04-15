import fs from 'fs/promises';
import path from 'path';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

// 환경 변수 로드
dotenv.config();

export class BaseAgent {
  protected genAI: GoogleGenerativeAI;
  protected persona: string = '';
  protected personaPath: string;

  constructor(personaFileName: string) {
    const apiKey = process.env.GEMINI_API_KEY || '';
    this.genAI = new GoogleGenerativeAI(apiKey);
    this.personaPath = path.join(process.cwd(), 'personas', personaFileName);
  }

  async initialize() {
    try {
      this.persona = await fs.readFile(this.personaPath, 'utf-8');
    } catch (error) {
      console.error(`[BaseAgent] ❌ 페르소나 파일을 읽는 중 오류 발생: ${this.personaPath}`, error);
      this.persona = 'You are a professional AI assistant.';
    }
  }

  async ask(prompt: string): Promise<string> {
    if (!this.persona) await this.initialize();

    // 쿼터 문제가 없는 gemma 모델을 사용합니다.
    const model = this.genAI.getGenerativeModel({
      model: 'gemma-3-27b-it',
    } as any);

    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      if (!text) throw new Error('응답 내용이 비어있습니다.');
      return text;
    } catch (error: any) {
      console.error(`[BaseAgent] ❌ Gemini 요청 중 오류 발생:`, error.message || error);
      return `에러가 발생했습니다: ${error.message || '알 수 없는 오류'}`;
    }
  }
}
