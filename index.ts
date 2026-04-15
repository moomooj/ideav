import { Orchestrator } from './core/orchestrator.js';
import dotenv from 'dotenv';

dotenv.config();

async function main() {
  const idea = process.argv[2] || "AI 기반 개인 맞춤형 영양제 구독 서비스 (혈액 검사 데이터 연동)";
  
  const orchestrator = new Orchestrator();
  
  try {
    const result = await orchestrator.validateIdea(idea);
    
    console.log("\n==========================================");
    console.log("✅ 검증 완료!");
    console.log(`📄 리포트 저장 위치: ${result.reportPath}`);
    console.log("==========================================\n");
    
    // 최종 판정만 콘솔에 다시 한번 요약 출력
    console.log("⚖️ [Final Verdict Summary]");
    console.log(result.verdict);
    
  } catch (error) {
    console.error("❌ 시스템 가동 중 오류 발생:", error);
  }
}

main();
