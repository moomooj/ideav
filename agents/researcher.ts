import { BaseAgent } from './base.js';

export class Researcher extends BaseAgent {
  constructor() {
    super('researcher.md');
  }

  async explore(idea: string, analysis: string): Promise<string> {
    console.log(`[Researcher] "${idea}"의 잠재력과 확장 가능성 탐색 중...`);
    const prompt = `다음 아이디어와 분석 데이터를 바탕으로, 이 아이디어가 더 크게 성장할 수 있는 인접 시장이나 피봇(Pivot) 가능성을 제안해줘:\n\nIdea: ${idea}\n\nAnalysis: ${analysis}`;
    return await this.ask(prompt);
  }
}
