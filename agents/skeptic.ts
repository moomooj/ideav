import { BaseAgent } from './base.js';

export class Skeptic extends BaseAgent {
  constructor() {
    super('skeptic.md');
  }

  async challenge(analysis: string): Promise<string> {
    console.log(`[Skeptic] 분석 결과에서 약점과 리스크를 찾는 중...`);
    const prompt = `다음 분석 결과를 보고, 이 아이디어가 실패할 수밖에 없는 이유 3가지를 아주 냉정하게 지적해줘. 비판적으로 접근해야 해:\n\n${analysis}`;
    return await this.ask(prompt);
  }
}
