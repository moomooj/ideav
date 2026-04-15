export class ValidationEngine {
  async analyze(idea: string): Promise<string> {
    return "초기 시장 분석 데이터입니다.";
  }

  async stressTest(analysis: string): Promise<string> {
    return "초기 리스크 분석 데이터입니다.";
  }

  async modelRevenue(analysis: string, risks: string): Promise<string> {
    return "초기 수익 모델링 데이터입니다.";
  }
}
