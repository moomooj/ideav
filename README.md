# 🔬 ideav: AI Idea Validation Lab

**ideav**는 당신의 비즈니스 아이디어를 5명의 AI 전문가 팀이 다각도로 검증하고 토론하여 최적의 비즈니스 모델과 실행 전략을 도출해주는 AI 에이전트 시스템입니다.

이제 텔레그램을 통해 언제 어디서든 당신의 아이디어를 전문가 그룹에게 던지고, 실시간 원탁회의 결과를 받아보세요.

---

## 🚀 Key Features

- **5-Agent Multi-Perspective Analysis**: 시장 분석가, 회의론자, 연구원, 전략가, 최종 판정자로 구성된 AI 전문가 팀.
- **Real-time Telegram Integration**: 텔레그램 봇을 통해 실시간으로 진행되는 전문가들의 '답장' 기반 토론 시뮬레이션.
- **Deep Validation Reports**: 단순한 답변을 넘어 시장 규모(TAM/SAM/SOM), 유닛 이코노믹스(CAC/LTV), 리스크 평가 등 정교한 분석 리포트 제공.
- **Contextual Feedback Loop**: 에이전트들이 서로의 의견에 반박하고 보완하며 논리를 강화하는 지능형 워크플로우.
- **Automated Report Generation**: 모든 검증 결과를 Markdown 형식의 정밀 리포트로 자동 저장.

---

## 🧠 The Expert Team (Personas)

1. **📊 Analyst (시장 분석가)**: 데이터 중심 사고. TAM/SAM/SOM 측정 및 경쟁사 현황 파악.
2. **🔥 Skeptic (회의론자)**: "이 아이디어는 왜 망할까?"에 집중. 치명적 결함과 리스크 포착.
3. **🔍 Researcher (연구원)**: 확장성 탐색. 인접 시장 발견 및 아이디어 피봇(Pivot) 제안.
4. **💰 Strategist (전략가)**: 수익 모델 설계. 가격 정책 및 지속 가능한 성장 루프 설계.
5. **🏆 Validator (최종 판정자)**: 모든 의견 종합. 최종 GO/NO-GO 판정 및 다음 실행 단계(Next Action) 제시.

---

## 📂 Project Structure

```text
ideav/
├── core/               # 검증 엔진 및 오케스트레이션 로직
├── agents/             # 개별 AI 에이전트 클래스 (BaseAgent 상속)
├── personas/           # 에이전트들의 성격과 지침 (Markdown)
├── memory/             # 아이디어 이력 및 검증 결과 JSON 저장소
├── products/reports/   # 생성된 상세 마크다운 리포트 저장 폴더
├── index.ts            # 텔레그램 봇 진입점 및 서버 로직
└── tsconfig.json       # TypeScript 설정
```

---

## 🛠 Setup & Installation

### 1. Prerequisites
- Node.js (v18+)
- Google AI Studio API Key (Gemini API)
- Telegram Bot Token (@BotFather를 통해 생성)

### 2. Environment Variables
`.env` 파일을 생성하고 아래 정보를 입력합니다.
```env
GEMINI_API_KEY=your_gemini_api_key
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
```

### 3. Install & Run
```bash
npm install
npm start
```

---

## 📱 How to Use (Telegram)

1. 텔레그램 봇에게 말을 겁니다. (`/start`)
2. 검증하고 싶은 아이디어를 한 문장 혹은 구체적인 설명과 함께 던집니다.
3. 전문가들이 실시간으로 답장을 주고받으며 토론하는 과정을 지켜봅니다.
4. 최종 판결과 함께 제공되는 상세 리포트를 확인합니다.

---

## 🛡 Security & Safety
- `.env` 파일은 `.gitignore`를 통해 소스 제어에서 제외됩니다.
- 민감한 개인 건강 정보나 기업 비밀은 입력 시 주의가 필요합니다.

---
*Created by AI Validation Lab. Powered by Google Gemini & Telegraf.*
