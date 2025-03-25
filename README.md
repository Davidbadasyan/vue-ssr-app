# 🚀 Vue 3 + Vite + TypeScript + SSR Starter

This project provides a modern and minimal starter template for building Server-Side Rendered (SSR) applications using **Vue 3**, **Vite**, and **TypeScript**.

It includes:
- ✅ Vue 3 with `<script setup>` SFCs
- ⚡ Vite for ultra-fast development
- 🧠 TypeScript support
- 🔥 SSR with Express.js

---

## 📦 Installation

```bash
pnpm install

pnpm run dev
pnpm run build
pnpm run serve


├─ public/              # Static assets
├─ src/
│  ├─ components/       # Vue components
│  ├─ App.vue           # Root component
│  ├─ entry-client.ts   # Client entry
│  ├─ entry-server.ts   # Server entry
│  └─ main.ts           # Main SSR setup
├─ server/
│  └─ index.ts          # Express SSR server
├─ index.html           # HTML template
├─ vite.config.ts       # Vite configuration
└─ tsconfig.json        # TypeScript config

