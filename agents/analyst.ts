import { BaseAgent } from './base.js';

export class Analyst extends BaseAgent {
  constructor() {
    super('analyst.md');
  }

  async analyze(idea: string): Promise<string> {
    console.log(`[Analyst] "${idea}"에 대한 시장 데이터 분석 중...`);
    const prompt = `다음 아이디어에 대해 시장 트렌드, 경쟁자, 그리고 객관적인 수치 위주로 분석해줘:\n\n"${idea}"`;
    return await this.ask(prompt);
  }
}
