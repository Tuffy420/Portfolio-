# 💎 Chris Vashni .V (Tuffy) — Glassy Modern Portfolio

An ultra-modern, dark glassmorphism portfolio dynamically synchronized with **GitHub**. Whenever you push new files, commit changes, or create repositories on GitHub, this portfolio automatically updates in real time without requiring manual rebuilds or code modifications!

---

## ✨ Features & Architecture

### 1. 🌌 Glassy Modern Aesthetic (Glassmorphism)
- Multi-layered translucent glass panels (`backdrop-filter: blur(16px)`).
- Ambient floating neon glow mesh (Indigo `#6366f1`, Cyan `#06b6d4`, Violet `#a855f7`).
- Interactive mouse spotlight glow tracking.
- Sleek modern typography using Google Fonts (**Outfit**, **Inter**, **JetBrains Mono**).
- Polished micro-interactions, floating pill badges, and glassmorphic modal dialogs.

### 2. ⚡ Real-Time Dynamic Git Sync Engine (`js/github-sync.js`)
- **Zero-Build Dynamic Updates**: Fetches directly from GitHub's REST API (`https://api.github.com/users/Tuffy420/repos?sort=pushed`).
- **Live Commit Activity Ticker**: Automatically inspects actively updated repositories and extracts real-time commit messages, hashes, authors, and timestamps.
- **Dynamic Language Breakdown**: Aggregates language distributions across all your GitHub repositories and renders an interactive **Chart.js** doughnut chart.
- **Smart Cache with Instant Invalidation**: Cached in `localStorage` for rapid instant loading, with background re-sync every 5 minutes and an instant `🔄 Sync Git` button.
- **Offline / Rate-Limit Resilient Fallback**: Seamlessly protects against API rate limits or network issues so the portfolio never breaks.
- **Customizable Git Config**: Built-in glass settings modal where you can customize the GitHub handle or attach a Personal Access Token (PAT) for private repos or 5,000 req/hr limits.

### 3. 🧠 In-Depth Codebase & Git Strengths Analysis
Based on deep analysis of your GitHub profile (`Tuffy420`) and your local enterprise projects:
- **Agentic AI & LLMs**: Autonomous multi-agent reasoning systems (`StockAnalyzer` valuation, technical, sentiment, and risk agents with Google Gemini, plus `ai-finance-agent` and `Indian-Constitution-AI-BOT`).
- **High-Performance Scalable Backends**: FastAPI async REST architectures, Pydantic v2 schemas, PostgreSQL with Alembic migrations, Redis caching, Docker containerization, and Pytest suites.
- **Modern Reactive Frontend UI**: React 18, TypeScript, Tailwind CSS, TanStack Query, Recharts, and mobile-responsive architectures.
- **Mission-Critical Industrial Software**: Industrial weighbridge scale system (`WeighPro`) handling automated scale ticketing, gross/tare accounting, customer ledger billing, and offline SPAs.
- **Computer Science & Algorithms**: B.Tech in Computer Engineering from National Engineering College Kovilpatti; strong algorithms, data structures, and competitive coding on HackerRank.

---

## 🚀 How to Run Locally

### Option 1: Instant Browser Launch
Simply open `index.html` directly in any web browser:
- Double click: `portfolio/index.html`

### Option 2: Local HTTP Server (Recommended)
From your terminal in the portfolio directory:
```bash
cd "C:\Users\Chris Vashni .V\OneDrive\Desktop\Tuffy AI Projects\portfolio"
python -m http.server 3000
```
Then visit:
👉 **`http://localhost:3000`**

---

## 🌐 Deploying to GitHub Pages (Free Hosting)

To make your portfolio live on the web at `https://tuffy420.github.io`:

1. Create a repository on your GitHub named `portfolio` (or `tuffy420.github.io`).
2. Push the contents of this `portfolio/` folder:
   ```bash
   cd "C:\Users\Chris Vashni .V\OneDrive\Desktop\Tuffy AI Projects\portfolio"
   git init
   git add .
   git commit -m "feat: launch glassy modern dynamic portfolio"
   git branch -M main
   git remote add origin https://github.com/Tuffy420/portfolio.git
   git push -u origin main
   ```
3. In GitHub repo settings, go to **Settings > Pages**, set Branch to `main` (folder `/root`), and save!
4. Your dynamic glassy portfolio will be live at `https://tuffy420.github.io/portfolio/`!

---

## 📂 File Structure

```text
portfolio/
├── index.html           # Main semantic HTML structure & sections
├── css/
│   └── glassy.css       # Ultra-modern dark glassmorphism styling & animations
├── js/
│   ├── github-sync.js   # Dynamic GitHub REST API sync engine & Chart.js renderer
│   └── app.js           # UI interactions, spotlight glow, settings & contact form
└── README.md            # Documentation & setup guide
```

