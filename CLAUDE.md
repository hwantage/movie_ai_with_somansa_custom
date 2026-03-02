# CLAUDE.md

이 파일은 Claude Code (claude.ai/code)가 이 저장소의 코드를 다룰 때 참고하는 가이드입니다.

## 프로젝트 개요

소만사의 AI 기반 위협 탐지 및 데이터 유출 방지(DLP) 기능을 소개하는 애니메이션 영상 프레젠테이션 앱. 13개 씬(인트로 → 10개 기능 데모 → 아웃트로)이 설정된 시간에 따라 자동 전환되는 타임라인 구조로 구성됨.

## 명령어

```bash
npm run dev:client   # Vite 개발 서버 실행 (포트 5000)
npm run build        # 프로덕션 빌드 → dist/public
npm run check        # TypeScript 타입 검사 (tsc --noEmit)
```

## 아키텍처

**씬 기반 타임라인**: `VideoTemplate.tsx`가 전체 오케스트레이터. `SCENE_DURATIONS`(씬별 ms 단위 지속시간)을 정의하고, `useVideoPlayer`에서 반환하는 `currentScene` 인덱스에 따라 조건부 렌더링. Framer Motion의 `AnimatePresence`로 씬 마운트/언마운트 처리.

**주요 모듈:**
- `client/src/components/video/VideoTemplate.tsx` — 씬 시퀀서 및 지속시간 설정
- `client/src/components/video/video_scenes/` — 개별 씬 컴포넌트 (SceneIntro, Scene1–10, SceneOutro)
- `client/src/lib/video/animations.ts` — 재사용 가능한 애니메이션 프리셋: 스프링, 이징, 씬 전환, 요소 애니메이션, 스태거 설정, 키네틱 타이포그래피 변형
- `client/src/lib/video/hooks.ts` — `useVideoPlayer` (씬 전환, 녹화 라이프사이클, 루프) 및 `useSceneTimer` (씬 내 특정 시점에 콜백 예약)

**애니메이션 시스템**: 각 씬은 `animations.ts`의 프리셋을 사용하는 `motion.div`로 구성. 인라인 애니메이션 값을 직접 정의하지 말고 기존 프리셋 라이브러리(springs, sceneTransitions, elementAnimations, stagger 설정)를 활용할 것. 애니메이션 라이브러리는 Framer Motion의 `Variants` 및 `Transition` 타입을 export함.

**녹화 연동**: `useVideoPlayer`가 마운트 시 `window.startRecording()`을 호출하고, 마지막 씬 완료 후 `window.stopRecording()`을 호출.

## 경로 별칭

- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets/*` → `attached_assets/*`

## 기술 스택

- React 19, TypeScript (strict), Vite 7, Tailwind CSS v4
- Framer Motion — 모든 애니메이션 및 씬 전환 담당
- GSAP, Three.js / @react-three/fiber, lottie-react — 고급 이펙트용
- Lucide React — 아이콘, shadcn/ui 설정 (new-york 스타일)

## 디자인 토큰

- **배경색**: Black `#000000`, Slate `#0F172A`
- **강조색**: Cyan `#00F0FF`, Emerald `#10B981`, Purple `#A855F7`, Rose `#E11D48`, Indigo `#4F46E5`
- **폰트**: Space Grotesk (디스플레이), JetBrains Mono (본문/모노)

## 새 씬 추가 방법

1. `client/src/components/video/video_scenes/SceneN.tsx`를 `motion.div`로 생성하고, `@/lib/video/animations`의 프리셋으로 initial/animate/exit 속성 설정
2. `client/src/components/video/video_scenes/index.ts`에서 export 추가
3. `VideoTemplate.tsx`의 `SCENE_DURATIONS`에 지속시간 항목 추가
4. `VideoTemplate.tsx`에 조건부 렌더링 추가 (`{currentScene === N && <SceneN key="sceneN" />}`)
