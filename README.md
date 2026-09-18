# SRT Printing & Sublimation Services

A modern, high-performance, fully responsive front-end web application built with **React 19**, **Vite**, **Tailwind CSS v4**, and **React Router v7**. It features dark/light theme switching, interactive quote request and contact forms, showcase catalogs for products, services, portfolio, industries, and FAQ.

---

## 🚀 Live Local Preview

The Vite dev server is running locally:
- **Local URL:** [http://localhost:5173](http://localhost:5173)
- **Network URL:** Accessible to devices on the same Wi-Fi network

To start the dev server anytime:
```bash
npm install
npm run dev
```

---

## 🌐 Deploy to Vercel (Recommended & Easiest)

This project includes [`vercel.json`](./vercel.json) pre-configured with client-side SPA route rewrites.

### Method 1: Via Vercel Dashboard (Zero Config)
1. Push this project to your GitHub repository.
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New Project"** and import your GitHub repository.
4. Framework Preset will auto-detect as **Vite**.
5. Click **"Deploy"**.
6. That's it! Your site is live with custom URL and SSL.

### Method 2: Via Vercel CLI
```bash
npm i -g vercel
vercel
```
Follow the interactive prompts (defaults work automatically).

---

## 🐙 Deploy to GitHub Pages

This project comes equipped with an automated GitHub Actions deployment workflow: [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) and single-page routing support ([`public/404.html`](./public/404.html) & [`index.html`](./index.html)).

### Method 1: Automatic Deployment with GitHub Actions (Zero Config)
1. Create a repository on GitHub (e.g. `https://github.com/<your-username>/<repo-name>`).
2. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: SRT Printing website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In your GitHub repository, go to **Settings** > **Pages**.
4. Under **"Build and deployment"**, change **Source** from *Deploy from a branch* to **GitHub Actions**.
5. The workflow will automatically build and publish the site to:
   `https://<your-username>.github.io/<repo-name>/`

---

## 🛠️ Project Structure

```
├── .github/workflows/deploy.yml   # Automatic GitHub Pages CI/CD
├── public/
│   ├── 404.html                   # SPA routing fallback for GitHub Pages
│   └── favicon.svg                # Brand SVG favicon
├── src/
│   ├── components/                # Header, Footer, ThemeContext, Breadcrumbs, etc.
│   ├── data/                      # Services, Products, Portfolio, Industries data
│   ├── pages/                     # Home, About, Services, Products, Quote, Contact, etc.
│   ├── App.tsx                    # Routes with dynamic basename support
│   ├── index.css                  # Tailwind CSS v4 & theme variables
│   └── main.tsx                   # React entry point
├── vercel.json                    # Route rewrites for Vercel SPA routing
├── vite.config.ts                 # Vite bundler configuration
└── package.json                   # Dependencies & build scripts
```

---

## 🎨 Features
- **Dark / Light Theme**: Seamless switching with local storage persistence.
- **Client-Side SPA Routing**: Deep linking and page refreshes work on both Vercel and GitHub Pages.
- **Fully Responsive**: Mobile, tablet, and desktop layouts.
- **Self-Contained Forms**: Interactive Quote Request and Contact forms with submission states.
- **Fast Build**: Powered by Vite and Tailwind CSS v4 with sub-2-second build times.
