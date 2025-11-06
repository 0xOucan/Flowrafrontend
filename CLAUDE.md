# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Flowra is a **DeFi dApp for the Octant DeFi Hackathon 2025** that automates Dollar-Cost Averaging (DCA) investing via Uniswap v4 Hooks, generates yield through Aave v3, and programmatically allocates 1-20% of realized yield to public goods projects using **Octant v2's Yield Donating Vaults**.

**Tagline**: "Plant your crypto, grow impact"

**Hackathon**: [Octant DeFi Hackathon 2025](https://dorahacks.io/hackathon/octant-defi-2025) | Submission: November 9, 2025

**Current Status**: UI/UX complete with mock data. Smart contract integration with Octant v2, Aave v3, and Uniswap v4 Hooks in active development.

**Target Prizes**:
- Best use of Yield Donating Strategy ($2,000 x2)
- Best public goods projects ($1,500 x2)
- Best use of Aave v3 ($2,500)
- Best Use of Uniswap v4 Hooks ($2,500)
- Most creative use of Octant v2 ($1,500)

**Documentation**: See `README.md` for comprehensive hackathon information, prize categories, and technical architecture.

**License**: Apache License 2.0 (see `LICENSE` file)

## Tech Stack

### Frontend
- **Framework**: Next.js 16 with App Router (React 19)
- **Styling**: Tailwind CSS v4 with custom design system
- **UI Components**: shadcn/ui (Radix UI primitives) in "new-york" style
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Fonts**: Space Grotesk (sans) and IBM Plex Mono (mono)
- **Analytics**: Vercel Analytics
- **3D Visualization**: Three.js *(planned)*

### DeFi Integration (In Development)
- **Vault Infrastructure**: Octant v2 (ERC-4626 compliant vaults)
- **Yield Generation**: Aave v3 (ATokenVault)
- **DCA Automation**: Uniswap v4 Hooks
- **Web3**: viem / wagmi
- **Networks**: Arbitrum (live UI), Ethereum & Base (coming soon)

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
Streamlined 6-step form for setting up DCA strategies:

1. **Select Chain**: Arbitrum (live), Ethereum & Base (grayed out, coming soon)
2. **Choose Input Token**: Whitelisted stablecoins (USDC, USDT, DAI, GHO)
3. **Choose Output Token**: WETH, WBTC, UNI, ARB
4. **Investment Plan**:
   - Total investment only (no frequency selection)
   - Quick amount buttons: $10, $100, $250, $500, $1000
   - Automated via Uniswap v4 Hooks (micro-trades for optimal DCA)
5. **Impact & Projects**:
   - Donation slider: 1-20% of yield
   - Flowra (Web3, Public Good) pre-selected as default
   - Support multiple regenerative projects
6. **Review & Confirm**: Shows annual/monthly/daily impact estimates with APY calculations

**Note**: Removed frequency/amount-per-period selection. DCA automation happens via Uniswap Hooks with micro-trades.

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

## DCA Workflow & Octant Integration

### User Flow (6 Steps)
1. **Select Network**: Arbitrum (live), Ethereum & Base (coming soon)
2. **Input Token**: Whitelisted stablecoins (USDC, USDT, DAI, GHO)
3. **Output Token**: WETH, WBTC, UNI, ARB
4. **Total Investment**: $10 to $1000+ (no frequency selection needed)
5. **Impact Allocation**: 1-20% of realized yield to public goods projects
6. **Review & Confirm**: See estimated annual/monthly/daily impact

### Behind the Scenes (Smart Contract Flow)
1. **Deposit**: User deposits stablecoins into Octant v2 Yield Vault (ERC-4626)
2. **Yield Generation**: Vault deposits into Aave v3 (ATokenVault) to earn yield
3. **DCA Automation**: Uniswap v4 Hooks execute micro-trades on every pool interaction
4. **Yield Routing**: Octant's programmatic allocation routes 1-20% to public goods projects
5. **Growth Visualization**: 3D hydroponic tower displays real-time impact

### Key Technical Concepts
- **ERC-4626 Vaults**: Standardized vault interface for composability
- **Uniswap v4 Hooks**: Autonomous DCA execution without keeper bots
- **Programmatic Allocation**: On-chain yield routing to selected projects
- **Non-Custodial**: Users maintain full control; funds stay in audited contracts

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
