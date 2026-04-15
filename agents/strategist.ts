import { BaseAgent } from './base.js';

export class Strategist extends BaseAgent {
  constructor() {
    super('strategist.md');
  }

  async designModel(idea: string, analysis: string, risks: string): Promise<string> {
    console.log(`[Strategist] "${idea}"의 수익 구조와 성장 전략 설계 중...`);
    const prompt = `다음 아이디어와 리스크를 고려하여, 구체적이고 현실적인 수익 모델(Revenue Stream)과 경쟁 우위 확보 전략을 설계해줘:\n\nIdea: ${idea}\n\nAnalysis: ${analysis}\n\nRisks: ${risks}`;
    return await this.ask(prompt);
  }
}
