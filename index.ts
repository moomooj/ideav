import { Telegraf } from 'telegraf';
import { Analyst } from './agents/analyst.js';
import { Skeptic } from './agents/skeptic.js';
import { Researcher } from './agents/researcher.js';
import { Strategist } from './agents/strategist.js';
import { Validator } from './agents/validator.js';
import dotenv from 'dotenv';

dotenv.config();

const token = process.env.TELEGRAM_BOT_TOKEN;
if (!token) {
  console.error("❌ 텔레그램 봇 토큰이 .env에 설정되지 않았습니다.");
  process.exit(1);
}

// 타임아웃 설정을 0으로 하여 Telegraf가 기다리지 않게 함
const bot = new Telegraf(token, {
  handlerTimeout: 0 
});

const analyst = new Analyst();
const skeptic = new Skeptic();
const researcher = new Researcher();
const strategist = new Strategist();
const validator = new Validator();

bot.start((ctx) => {
  ctx.reply("🧪 [ideav] 전문가 원탁회의 시스템이 가동되었습니다.\n아이디어를 던져주시면 5명의 전문가가 실시간 토론을 시작합니다.");
});

bot.on('text', async (ctx) => {
  const idea = ctx.message.text;
  if (idea.startsWith('/')) return;

  console.log(`[Bot] 아이디어 수신: ${idea.substring(0, 30)}...`);

  // 1. 즉시 응답을 보내 타임아웃 방지
  ctx.reply("🎯 아이디어를 전문가 팀에게 전달했습니다. 실시간 토론이 곧 시작됩니다.");

  // 2. 분석 로직을 비동기 즉시 실행 함수(IIFE)로 분리하여 백그라운드에서 실행
  (async () => {
    try {
      const chat_id = ctx.chat.id;

      // 분석가
      await bot.telegram.sendMessage(chat_id, "📊 분석가(Analyst)가 시장 데이터를 수집 중입니다...");
      const analysis = await analyst.analyze(idea);
      const analystMsg = await bot.telegram.sendMessage(chat_id, `📊 [Analyst Report]\n\n${analysis}`);

      // 회의론자
      await bot.telegram.sendMessage(chat_id, "🔥 회의론자(Skeptic)가 비판적 검토를 시작합니다...");
      const risks = await skeptic.challenge(analysis);
      const skepticMsg = await bot.telegram.sendMessage(chat_id, `🔥 [Skeptic's Challenge]\n\n${risks}`, {
        reply_to_message_id: analystMsg.message_id
      });

      // 연구원
      await bot.telegram.sendMessage(chat_id, "🔍 연구원(Researcher)이 확장성을 탐색 중입니다...");
      const expansion = await researcher.explore(idea, `${analysis}\n${risks}`);
      const researcherMsg = await bot.telegram.sendMessage(chat_id, `🔍 [Researcher's Insights]\n\n${expansion}`, {
        reply_to_message_id: skepticMsg.message_id
      });

      // 전략가
      await bot.telegram.sendMessage(chat_id, "💰 전략가(Strategist)가 비즈니스 모델을 설계 중입니다...");
      const strategy = await strategist.designModel(idea, analysis, risks);
      const strategistMsg = await bot.telegram.sendMessage(chat_id, `💰 [Strategist's Plan]\n\n${strategy}`, {
        reply_to_message_id: researcherMsg.message_id
      });

      // 최종 판정자
      await bot.telegram.sendMessage(chat_id, "🏆 판정자(Validator)가 결론을 도출하고 있습니다...");
      const allOpinions = `Analyst: ${analysis}\nSkeptic: ${risks}\nResearcher: ${expansion}\nStrategist: ${strategy}`;
      const verdict = await validator.judge(idea, allOpinions);
      await bot.telegram.sendMessage(chat_id, `🏆 [Final Verdict]\n\n${verdict}`, {
        reply_to_message_id: strategistMsg.message_id
      });

      console.log(`[Bot] 회의 종료: ${idea.substring(0, 30)}...`);

    } catch (error: any) {
      console.error("❌ 백그라운드 분석 중 오류 발생:", error.message || error);
      bot.telegram.sendMessage(ctx.chat.id, `❌ 분석 도중 기술적 결함이 발생했습니다: ${error.message}`);
    }
  })(); 
});

console.log("🚀 [ideav] 실시간 토론 봇 가동 중...");
bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
