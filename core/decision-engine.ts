export class DecisionEngine {
  async make(scores: any): Promise<any> {
    return {
      status: 'GO',
      reason: "시장 잠재력이 충분하며 리스크 대응이 가능합니다."
    };
  }
}
