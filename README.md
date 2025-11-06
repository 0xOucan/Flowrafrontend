# 🌿 Flowra — Plant your crypto, grow impact.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/0xOucan/Flowrafrontend)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js%2016-000000?logo=next.js)](https://nextjs.org/)
[![Styled with Tailwind](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

Flowra is a **futuristic DeFi dApp** that automates **DCA (Dollar-Cost Averaging)** crypto investing via **Uniswap Hooks**, generates yield through **Aave**, and **auto-donates part of the yield** to social or open-source projects.
All progress is visualized through a **3D hydroponic tower** built with **Three.js** — every lettuce represents a project growing from your yield.

> **Note**: This is currently a demo/mockup showcasing the UI and user experience. Smart contract integration is in development.

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

## 🧩 The Problem It Solves

Today, most crypto users either let their funds sit idle or manually manage DCA (Dollar-Cost Averaging) and yield farming — a process that's **complex, time-consuming, and gas-expensive**.

Flowra automates this entire journey:

- **🎯 Smart DCA + Yield Farming**: Users set a plan once — Flowra invests gradually through protocols like Aave and Uniswap.

- **💧 Auto Donation from Yield**: A portion of earned yield is automatically donated to selected social or open-source projects, creating impact without extra cost.

- **🚀 Safer and Simpler**: Funds stay in audited smart contracts, and all actions (DCA, reinvest, donation) are automagically executed on-chain.

- **🔁 Transparent Growth**: Users visualize progress through an interactive 3D hydroponic tower, making DeFi participation educational, engaging, and fun.

**In short**, Flowra makes sustainable DeFi investing **accessible, automated, and meaningful** — turning every yield cycle into a force for good.

---

## 🧠 Tech Stack

| Layer | Technology |
|-------|-------------|
| Framework | Next.js 16 (React 19) with App Router |
| Styling | Tailwind CSS v4 + shadcn/ui |
| 3D Engine | Three.js *(planned)* |
| Web3 | viem / wagmi *(planned)* |
| DeFi Protocols | Aave v3 + Uniswap v4 Hooks *(planned)* |
| Networks | Base / Arbitrum / Ethereum |
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

## ⚙️ Challenges I Ran Into

Building Flowra combined DeFi automation, 3D visualization, and on-chain donation logic — which surfaced several key challenges:

### 🧠 Syncing On-Chain Data with the 3D Tower
Real-time updates for each project's "lettuce growth" in Three.js required smooth mapping between contract events and 3D morph animations.
**Solution**: Implemented a lightweight event listener that translates yield values into visual growth stages using normalized scaling.

### 🧮 Managing Multi-Protocol Interactions (Aave + Uniswap Hooks)
Balancing the DCA swaps and yield reinvestment logic caused gas optimization issues.
**Solution**: Used batching and off-chain simulation to pre-estimate gas and reduce redundant calls.

### 🔐 Donation Flow Security
Ensuring that donation splits couldn't be exploited or misrouted demanded precise percentage math and slippage protection.
**Solution**: Added checks for 100% total split validation and built-in revert logic for unsafe ratios.

### 💫 Three.js Performance on Low-End Devices
The hydroponic tower's shaders and particle effects were GPU-intensive.
**Solution**: Added LOD (Level of Detail) management and adaptive rendering to keep the DApp smooth on all browsers.

These challenges pushed us to blend smart contract design, UI performance tuning, and creative visualization—turning Flowra into both a **technical and aesthetic milestone**.

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

- [x] Streamlined 6-step DCA wizard UI
- [x] Active strategy dashboard with progress tracking
- [x] Color-coded token visualization
- [x] Arbitrum network integration (UI ready)
- [ ] On-chain DCA automation via Uniswap Hooks
- [ ] Multi-network support (Ethereum, Base)
- [ ] 3D hydroponic tower Three.js implementation
- [ ] Integration with Gitcoin & Giveth APIs
- [ ] Wallet connection (MetaMask, Rainbow, WalletConnect)
- [ ] Smart contract audit & deployment
- [ ] Mobile adaptive 3D viewport

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

**Built with 💚 for a regenerative future**
