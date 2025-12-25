# Next.js Dashboard Clean Architecture

A clean architecture for Next.js dashboard application. using ShadcnUI, Zod, Axios, Tanstack React Query and Clerk for authentication.

```
app/
  ├── (auth)/
  ├── (pages)/
  │     └── pageName/
  │           ├── components/
  │           └── page.tsx
  ├── globals.css
  ├── layout.tsx
  └── page.tsx
modules/
  ├── user/
  │  ├── application/
  │  ├── domain/
  │  ├── infrastructure/
  │  └── presentation/
  │       ├── components/
  │       └── hooks/
  └── otherModule/
shared/
  ├── infrastructure/
  └── presentation/
    ├── components/
    ├── hooks/
    └── lib/
public/
.env
proxy.ts
```

## Installation

To install dependencies:
```sh
bun install
```

To run:
```sh
bun run dev
```

open http://localhost:3000