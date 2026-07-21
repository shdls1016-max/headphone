# AURALAB Headset Store

프리미엄 헤드셋 브랜드 **AURALAB**의 반응형 쇼핑몰 프로젝트입니다.

## Live site

- https://auralab-headsets-2026.shdls1016.chatgpt.site

## Features

- 100vh 풀스크린 히어로
- HALO X1 블랙·화이트·라이트블루·바이올렛 제품 이미지
- Swiper 기반 제품 슬라이드
- GSAP ScrollTrigger 및 Pin 스크롤 연출
- 데스크톱 드롭다운 GNB와 모바일 전체 메뉴
- 제품 컬러 선택 및 장바구니 추가
- 수량 변경, 삭제, 합계 계산, 브라우저 저장 장바구니
- 제품, 상세, 액세서리, 기술, 브랜드, 저널, 지원, 배송, 보증, 제품 등록 페이지
- 최대 콘텐츠 폭 1500px의 반응형 레이아웃

## Tech stack

- React 19
- Next.js / vinext
- TypeScript
- GSAP
- Swiper
- Tailwind CSS

## Run locally

Node.js 22.13 이상이 필요합니다.

```bash
npm install
npm run dev
```

프로덕션 빌드 확인:

```bash
npm run build
```

## Main source

- `app/storefront.tsx` — 화면, GNB, 상품 선택, 장바구니 동작
- `app/globals.css` — 전체 스타일과 반응형 디자인
- `public/products/` — 헤드셋 상품 이미지
- `app/**/page.tsx` — 각 서브페이지 진입점
