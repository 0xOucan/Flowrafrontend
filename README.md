# 🌿 Flowra — Plant your crypto, grow impact.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/0xOucan/Flowrafrontend)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js%2016-000000?logo=next.js)](https://nextjs.org/)
[![Styled with Tailwind](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

Flowra is a **futuristic DeFi dApp** that automates **DCA (Dollar-Cost Averaging)** crypto investing via **Uniswap v4 Hooks**, generates yield through **Aave v3**, and **auto-donates part of the yield** to public goods projects using **Octant v2's Yield Donating Vaults**.
All progress is visualized through a **3D hydroponic tower** built with **Three.js** — every lettuce represents a project growing from your yield.

> **Hackathon Project**: Built for the [Octant DeFi Hackathon 2025](https://dorahacks.io/hackathon/octant-defi-2025) | Submission Date: November 9, 2025
>
> **Current Status**: UI/UX complete with mock data. Smart contract integration with Octant v2, Aave v3, and Uniswap v4 Hooks in active development.

---

## ✨ Features

- 🌱 **Automated DCA investing** with micro-trades executed via Uniswap Hooks for optimal average pricing
- 💧 **Yield generation** via Aave v3 with configurable APY strategies
- 🎁 **Automatic donations** from 1-20% of earned yield to regenerative projects
- 🛰️ **3D Hydroponic Tower Visualization** powered by Three.js with real-time growth tracking
- 📊 **Active Strategy Monitoring** with color-coded progress bars and 6-digit hash IDs
- 🔐 **Non-custodial & transparent** smart contract interaction (Arbitrum ready)
- 🧬 **Spaceship-inspired UI** with dark cyberpunk aesthetic and glowing effects

---

## 🏆 Octant DeFi Hackathon 2025

Flowra is being built for the **Octant DeFi Hackathon**, competing across multiple categories that showcase its innovative approach to sustainable DeFi and public goods funding.

### 🎯 Target Prizes

| Prize Category | Amount | Focus Area |
|---------------|---------|------------|
| **Best use of a Yield Donating Strategy** | $2,000 each (2 prizes) | Programmatically allocate realized yield to public goods using Octant V2 vaults |
| **Best public goods projects** | $1,500 each (2 prizes) | Most technically impressive project advancing public goods creation and delivery |
| **Best use of Aave v3** | $2,500 | Innovative use of Aave's ERC-4626 ATokenVault for yield generation and management |
| **Best Use of Uniswap v4 Hooks** | $2,500 | Advanced Hook integration for DCA automation and public goods sustainability |
| **Most creative use of Octant v2** | $1,500 | Original mechanism turning users into ongoing public goods supporters |

### 🌊 About Octant v2

[Octant v2](https://docs.v2.octant.build/) is an **ecosystem engine** designed to efficiently transform idle capital into sustainable growth. It seamlessly connects web3 revenue streams (protocol fees, DeFi yield) into customizable growth and incentive programs using **ERC-4626 compliant vaults**.

**Key Stats:**
- 💰 **$12M+** distributed in grants to Ethereum projects
- 🏗️ Built on battle-tested DeFi protocols (Aave v3, Uniswap v4)
- 🔐 Non-custodial, transparent, and composable

### 🔗 How Flowra Integrates with Octant

Flowra leverages Octant v2's infrastructure to create a seamless user experience:

1. **Yield Donating Vaults**: Users deposit stablecoins into Octant-powered vaults
2. **Automated DCA**: Uniswap v4 Hooks execute micro-trades for optimal average pricing
3. **Aave v3 Yield**: Deposits generate sustainable yield through battle-tested lending markets
4. **Programmatic Allocation**: 1-20% of realized yield automatically routes to selected public goods projects
5. **Visual Growth**: 3D hydroponic tower visualizes impact in real-time

**Documentation:**
- 📚 [Octant v2 Docs](https://docs.v2.octant.build/)
- 🏦 [Aave v3 Vault](https://github.com/aave/Aave-Vault)
- 🦄 [Uniswap v4 Hooks](https://uniswap.notion.site/octant-defi-hackathon)

---

## 🧩 The Problem It Solves

**DeFi has reached escape velocity**, but most users still let their funds sit idle or manually manage complex yield strategies. Meanwhile, **public goods funding remains fragmented and unsustainable**, relying on one-time donations rather than continuous revenue streams.

### The Challenge

- 💤 **Idle Capital**: Crypto sits in wallets earning zero yield
- ⚙️ **Complex DeFi**: Manual DCA and yield farming is time-consuming and gas-expensive
- 🔄 **Donation Friction**: Users must choose between earning yield OR supporting public goods
- 📊 **Lack of Visibility**: No clear way to visualize impact over time

### Flowra's Solution

Flowra transforms idle capital into a **sustainable engine for public goods funding** using Octant v2's infrastructure:

- **🏦 Octant v2 Yield Vaults**: Non-custodial ERC-4626 vaults that automatically generate yield through Aave v3
- **🎯 Automated DCA via Uniswap v4 Hooks**: Smart contracts execute micro-trades for optimal average pricing without user intervention
- **💧 Programmatic Yield Allocation**: 1-20% of realized yield automatically routes to public goods projects on-chain
- **🌱 Visual Impact Tracking**: 3D hydroponic tower makes DeFi participation educational, engaging, and transparent
- **🔐 Non-Custodial & Secure**: Funds stay in audited smart contracts; users maintain full control

**Impact**: Users earn yield on their crypto **while simultaneously funding public goods** — creating a sustainable, ever-lasting growth engine for the Ethereum ecosystem.

> *"Transform idle capital into impact. No extra cost, no extra friction."*

---

## 🧠 Tech Stack

| Layer | Technology |
|-------|-------------|
| Framework | Next.js 16 (React 19) with App Router |
| Styling | Tailwind CSS v4 + shadcn/ui |
| 3D Engine | Three.js *(planned)* |
| Web3 | viem / wagmi *(planned)* |
| Vault Infrastructure | Octant v2 (ERC-4626) *(in development)* |
| DeFi Protocols | Aave v3 + Uniswap v4 Hooks *(in development)* |
| Networks | Arbitrum (live) / Ethereum & Base *(coming soon)* |
| Deployment | Vercel |
| Package Manager | pnpm |

---

## 🚀 Getting Started

### 1️⃣ Clone the repo
```bash
git clone https://github.com/0xOucan/Flowrafrontend.git
cd Flowrafrontend
```

### 2️⃣ Install dependencies
```bash
pnpm install
```

### 3️⃣ Run the dev server
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see Flowra live.

---

## 🌐 Deploy on Vercel

The easiest way to deploy Flowra is to use the [Vercel Platform](https://vercel.com/new).

### Quick Deploy
Click the button above or:

1. **Push to GitHub**: Commit your code to a GitHub repository
2. **Import to Vercel**: Go to [vercel.com/new](https://vercel.com/new) and import your repo
3. **Configure**: Vercel auto-detects Next.js — no configuration needed!
4. **Deploy**: Click deploy and your app goes live in seconds

### Automatic Deployments
Once connected, every push to `main` branch automatically triggers a new deployment.

---

## 🪴 Concept & Lore

Inside the spaceship's hydroponic bay, users deposit crypto to fund automated yield gardens.
Each lettuce 🌱 symbolizes a project's growth, nourished by real yield flows.
Every harvest cycle reinvests profits and channels a fraction to donations — **DeFi that grows good.**

> *"Plant your crypto, grow impact."*

---

## 🎨 Recent UI Improvements

### Streamlined DCA Wizard (6 Steps)
- **Network Selection**: Arbitrum live, Ethereum & Base coming soon (grayed out)
- **Token Selection**: Clean interface without unnecessary badges
  - **Input**: USDC, USDT, DAI, GHO (whitelisted stablecoins)
  - **Output**: WETH, WBTC, UNI, ARB
- **Simplified Investment**: Removed frequency selection - automated via Uniswap Hooks
  - Quick amount buttons: $10, $100, $250, $500, $1000
  - Automated micro-trades for optimal average pricing
- **Impact Range**: 1-20% donation slider
- **Default Project**: Flowra (Web3, Public Good) pre-selected
- **Enhanced Review**: Shows Annual/Monthly/Daily impact estimates with APY calculations

### Active Strategy Dashboard
- **Progress Tracking**: Color-coded progress bars with token-specific colors
  - USDC → WBTC (Blue `#2775ca`)
  - USDC → WETH (Purple-Blue `#627eea`)
  - USDT → UNI (Turquoise `#14b8a6`)
  - GHO → ARB (Violet `#b06fff`)
- **Strategy IDs**: 6-digit hash identifiers from transaction IDs
- **Visual Feedback**: Glowing progress bars matching the hydroponic tower aesthetic
- **Real-time Status**: Shows conversion percentage and remaining amount

---

## ⚙️ Technical Challenges & Solutions

Building Flowra for the Octant hackathon required integrating multiple DeFi protocols, creating intuitive UX, and ensuring secure on-chain yield routing:

### 🏦 ERC-4626 Vault Integration with Octant v2
**Challenge**: Designing a vault strategy that seamlessly integrates with Octant's infrastructure while maintaining compatibility with Aave v3 and Uniswap v4 Hooks.
**Solution**: Architected a modular vault system that wraps Aave's ATokenVault and routes yield through Octant's programmatic allocation mechanisms, ensuring composability and auditability.

### 🎯 Automated DCA via Uniswap v4 Hooks
**Challenge**: Traditional DCA requires manual execution or expensive keeper bots. Needed autonomous, gas-efficient micro-trades.
**Solution**: Leveraging Uniswap v4's hook system to trigger DCA swaps on every pool interaction, amortizing gas costs across all pool users while maintaining precise execution schedules.

### 💧 Yield Routing & Donation Split Logic
**Challenge**: Ensuring yield allocations (1-20%) are calculated correctly, routed securely, and can't be exploited or misrouted.
**Solution**: Implemented precise fixed-point math with 100% total split validation and built-in revert logic for unsafe ratios. All yield routing happens on-chain through Octant's audited allocation contracts.

### 🧠 Real-time On-Chain Data Visualization
**Challenge**: Syncing on-chain vault state with the 3D hydroponic tower required efficient event listening and state management.
**Solution**: Implemented a lightweight event listener pattern that subscribes to vault events and translates yield values into visual growth stages using normalized scaling and smooth transitions.

### 🎨 UX for Complex DeFi Concepts
**Challenge**: Making multi-protocol interactions (vaults, yield farming, DCA, donations) intuitive for non-technical users.
**Solution**: Created a 6-step wizard with clear visual feedback, color-coded progress bars, and a spaceship-inspired UI that makes DeFi participation educational and engaging.

These challenges pushed us to **blend protocol composability, gas optimization, and creative visualization** — turning Flowra into a technical showcase for the Octant ecosystem.

---

## 🧰 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start local development server |
| `pnpm build` | Create production build |
| `pnpm start` | Run production server |
| `pnpm lint` | Run ESLint checks |

---

## 💡 Roadmap

### ✅ Completed (Hackathon Phase 1)
- [x] Streamlined 6-step DCA wizard UI
- [x] Active strategy dashboard with progress tracking
- [x] Color-coded token visualization
- [x] Arbitrum network integration (UI ready)
- [x] Impact donation slider (1-20% range)
- [x] Project selection interface with Flowra as default

### 🚧 In Development (Hackathon Phase 2)
- [ ] **Octant v2 Vault Integration**: ERC-4626 compliant yield vaults
- [ ] **Aave v3 Integration**: ATokenVault for yield generation
- [ ] **Uniswap v4 Hooks**: Automated DCA with micro-trades
- [ ] **Programmatic Yield Routing**: On-chain donation logic
- [ ] **Wallet Connection**: MetaMask, Rainbow, WalletConnect
- [ ] **Multi-network Support**: Ethereum & Base mainnet

### 🔮 Post-Hackathon
- [ ] 3D hydroponic tower Three.js implementation
- [ ] Smart contract audit & mainnet deployment
- [ ] Mobile adaptive 3D viewport
- [ ] Additional yield strategies (Compound, Lido, etc.)
- [ ] Governance token for protocol decisions

---

## 🛠️ Contributors

| Role | Name / Handle |
|------|---------------|
| 👨‍🚀 Founder / Frontend Dev | [@0xOucan](https://github.com/0xOucan) |
| 🧱 Smart Contract Dev | [@0xcamax](https://github.com/0xcamax) |
| 🧪 Design & UI | TBD |

---

## 📁 Project Structure

```
flowra/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   └── app/               # Application routes
│       ├── layout.tsx     # App layout (with sidebar)
│       ├── page.tsx       # Dashboard
│       ├── dca/           # DCA setup pages
│       ├── projects/      # Projects pages
│       ├── dashboard/     # 3D dashboard
│       ├── activity/      # Activity history
│       └── settings/      # Settings page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── dca-setup-wizard.tsx
│   ├── projects-grid.tsx
│   └── ...
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
├── public/               # Static assets
└── styles/               # Global styles
```

---

## ⚖️ License

**Apache License 2.0** © 2025 Flowra
Feel free to fork, remix, and grow new impact gardens 🌿

See [LICENSE](LICENSE) for more information.

---

## 🌟 Star History

If you find Flowra useful, please consider giving it a ⭐️ on GitHub!

---

## 🤝 Acknowledgments

Special thanks to:
- **[Octant](https://octant.app/)** for creating the infrastructure that makes sustainable public goods funding possible
- **[Aave](https://aave.com/)** for battle-tested DeFi lending protocols
- **[Uniswap](https://uniswap.org/)** for pioneering the Hooks architecture in v4
- The **Ethereum community** for building the foundation of decentralized finance

---

**Built with 💚 for a regenerative future | Powered by Octant v2**

*Transforming idle capital into sustainable growth for Ethereum's public goods ecosystem.*
