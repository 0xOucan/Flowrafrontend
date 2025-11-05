# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Flowra is a crypto DeFi application that combines automated Dollar-Cost Averaging (DCA) with yield farming and regenerative project donations. The tagline is "Plant your crypto, grow impact" - users can automate crypto investments, earn yield through Aave, and donate portions to environmental/regenerative projects.

**Current Status**: This is a demo/mockup showcasing the UI/UX. Smart contract integration is planned but not yet implemented.

**Documentation**: See `README.md` for comprehensive project information, deployment instructions, and feature roadmap.

**License**: Apache License 2.0 (see `LICENSE` file)

## Tech Stack

- **Framework**: Next.js 16 with App Router (React 19)
- **Styling**: Tailwind CSS v4 with custom design system
- **UI Components**: shadcn/ui (Radix UI primitives) in "new-york" style
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Fonts**: Space Grotesk (sans) and IBM Plex Mono (mono)
- **Analytics**: Vercel Analytics

## Development Commands

```bash
# Install dependencies
pnpm install

# Development server (runs on http://localhost:3000)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint
```

## Architecture & Route Structure

The application has a **dual-layout structure** with two distinct entry points:

### 1. Landing Page (`/`)
- Root level: `/app/page.tsx` with layout at `/app/layout.tsx`
- Marketing site with hero, how-it-works, tech stack, and security sections
- Uses full-page sections with ambient particle effects and CRT-style vignette
- Components: `hero-section.tsx`, `how-it-works.tsx`, `tech-stack.tsx`, `security-section.tsx`, `footer.tsx`

### 2. Application Pages (`/app/*`)
- Nested under: `/app/app/` with layout at `/app/app/layout.tsx`
- Uses sidebar navigation (`AppSidebar`) and header (`AppHeader`)
- Main routes:
  - `/app` - Dashboard with quick actions and stats overview
  - `/app/dca` - DCA strategy list view
  - `/app/dca/new` - Multi-step DCA setup wizard
  - `/app/projects` - Browse regenerative projects
  - `/app/projects/[id]` - Individual project details
  - `/app/dashboard` - 3D visualization dashboard
  - `/app/activity` - Transaction/activity history
  - `/app/settings` - User settings

## Key Components

### DCA Setup Wizard (`components/dca-setup-wizard.tsx`)
Multi-step form for setting up DCA strategies:
1. Select Chain (Ethereum, Arbitrum, Base)
2. Choose Input Token (stablecoins: USDC, USDT, DAI, GHO)
3. Choose Output Token (WETH, WBTC, or stablecoins)
4. Investment Plan (total amount + frequency: daily/weekly/biweekly/monthly)
5. Impact & Projects (donation allocation to regenerative projects)
6. Configure Yield (Aave staking configuration)
7. Review & Confirm

### Projects Components
- `projects-grid.tsx` - Grid display of regenerative projects
- `projects-filters.tsx` - Filtering interface for projects

## Design System

The app uses a **dark cyberpunk aesthetic** with custom color scheme:

### Colors
- **Primary (Turquoise)**: `#14b8a6` - Main CTAs, highlights
- **Accent (Neon Violet)**: `#b06fff` - Secondary actions, accents
- **Background (Obsidian)**: `#0d1117` - Main background
- **Card (Deep Gray)**: `#111827` - Card backgrounds
- **Foreground (Soft White)**: `#e6e8eb` - Text

### Custom Classes
- `.glass-panel` - Glassmorphic effect for cards
- `.glow-turquoise`, `.glow-violet` - Glowing hover effects
- `.particle-drift` - Animated particle effects

## Path Aliases

Configured in `tsconfig.json` and `components.json`:
- `@/*` - Root directory
- `@/components` - Components directory
- `@/lib` - Utility functions
- `@/hooks` - Custom React hooks
- `@/components/ui` - shadcn/ui components

## Important Configuration Notes

- **TypeScript build errors are ignored** in production (`ignoreBuildErrors: true` in `next.config.mjs`)
- **Image optimization is disabled** (`unoptimized: true`)
- App is locked to **dark mode** (`className="dark"` on `<html>`)
- Uses **pnpm** as package manager

## Adding shadcn/ui Components

Components are configured with "new-york" style. To add new components:
```bash
npx shadcn@latest add [component-name]
```

## State Management

Currently no global state management library. App uses:
- React hooks (`use-toast.ts`, `use-mobile.ts`)
- Component-level state with `useState`
- React Hook Form for form state

## DCA Workflow Concepts

1. User selects blockchain network
2. Chooses input token (what they're spending) - typically stablecoins
3. Chooses output token (what they're buying) - could be ETH, BTC, or stablecoins
4. Sets total investment amount and frequency
5. Allocates percentage of yield to regenerative projects
6. Configures Aave yield farming parameters
7. Reviews and confirms the automated DCA strategy

## Deployment

### Vercel Deployment (Recommended)

This project is configured for seamless Vercel deployment:

1. **Automatic Deployments**: Push to `main` branch triggers automatic deployment
2. **Configuration**: `vercel.json` is configured with pnpm build commands
3. **No Environment Variables Needed**: Since this is a demo/mockup, no env vars are required

To deploy:
```bash
# Option 1: Connect GitHub repo to Vercel dashboard
# Visit https://vercel.com/new and import your repository

# Option 2: Deploy via Vercel CLI
npx vercel

# Deploy to production
npx vercel --prod
```

The project uses Next.js 16 which is natively supported by Vercel with zero configuration needed.
