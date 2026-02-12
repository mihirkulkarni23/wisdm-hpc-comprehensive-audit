# hpc-landing

High-performance computing (HPC) marketing / landing site built with Next.js 16, React, and Tailwind CSS.

## Tech stack

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4

## Getting started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm, pnpm, or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will start on `http://localhost:3000` by default.

### Production build

```bash
npm run build
npm start
```

## Environment variables

This project uses environment variables for external integrations (for example, Google Sheets).

Create a `.env.local` file in the project root and define the required variables:

- `GOOGLE_SHEETS_PRIVATE_KEY`
- `GOOGLE_SHEETS_CLIENT_EMAIL`
- `GOOGLE_SHEETS_SPREADSHEET_ID`

These files are **ignored by git** via `.gitignore` and should never be committed.

