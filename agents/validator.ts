import { BaseAgent } from './base.js';

export class Validator extends BaseAgent {
  constructor() {
    super('validator.md');
  }

  async judge(idea: string, allOpinions: string): Promise<string> {
    console.log(`[Validator] 모든 의견을 취합하여 최종 판정 중...`);
    const prompt = `다음 아이디어에 대한 분석가, 비판가, 전략가들의 모든 의견을 종합하여, 이 아이디어의 최종 GO / NO GO 판정을 내려줘. 또한 가장 중요한 다음 실행 단계(Next Action)를 하나만 제시해줘:\n\nIdea: ${idea}\n\nAll Opinions:\n${allOpinions}`;
    return await this.ask(prompt);
  }
}
