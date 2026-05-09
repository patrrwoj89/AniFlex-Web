# AniFlex Web

Oficjalna strona projektu **AniFlex** – darmowej aplikacji do oglądania anime na Androida i Android TV.

> Zbudowana w Next.js 16 + React 19 + Tailwind 4, hostowana na Vercel.

## Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS 4**
- **framer-motion** – animacje
- **lucide-react** – ikony
- **axios** – requesty HTTP po stronie klienta
- **react-markdown + remark-gfm** – renderowanie changelogu z GitHub

## Struktura

```
app/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Sources.tsx
│   ├── Features.tsx
│   ├── LiveChangelog.tsx   ← Server Component, ISR 600s
│   ├── ChangelogUI.tsx     ← Client Component
│   ├── FAQ.tsx
│   └── Footer.tsx
├── android/page.tsx        ← auto-download APK
├── windows/page.tsx        ← auto-download MSI/EXE
├── layout.tsx
├── page.tsx
└── globals.css
```

## Konfiguracja przed deployem

1. W `app/components/LiveChangelog.tsx` zmień:
   ```ts
   const GITHUB_OWNER = "TWOJ_NICK";
   const GITHUB_REPO = "TWOJE_REPO_FLUTTER";
   ```

2. W `app/android/page.tsx` i `app/windows/page.tsx` zmień:
   ```ts
   const GITHUB_REPO_OWNER = "TWOJ_NICK";
   const GITHUB_REPO_NAME = "TWOJE_REPO_FLUTTER";
   ```

3. W `app/components/Navbar.tsx` i `Footer.tsx` zaktualizuj linki do GitHub.

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000).

## Deploy na Vercel

1. Wgraj repo na GitHub
2. Połącz z Vercel (Import Project)
3. Vercel automatycznie wykrywa Next.js – zero konfiguracji
4. Gotowe ✓
