# SASE Mobile PWA

Official mobile application for UCF Society of Asian Scientists and Engineers (SASE). Built with Next.js, Tailwind CSS, shadcn/ui, and Supabase.

---

## 📖 Table of Contents
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Getting Started](#-getting-started)
- [PWA Configuration](#-pwa-configuration)
- [Supabase Setup](#-supabase-setup)
- [Shadcn/UI Usage](#-shadcnui-usage)
- [Deployment](#-deployment)

---

## 🛠 Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 15** | React Framework (App Router) |
| **Tailwind CSS 4** | Styling Layer |
| **shadcn/ui** | Accessible UI Components |
| **Supabase** | Backend (Auth, Database, Storage) |
| **TypeScript** | Static Type Checking |
| **Web App Manifest** | PWA Identification |

---

## ✨ Features

- 📱 **PWA Ready**: Pre-configured with a dynamic manifest and service worker.
- 🎨 **shadcn/ui Integrated**: Basic components (Button, Card) already set up for Tailwind 4.
- 🔋 **Supabase Utility**: Ready-to-use client in `@/lib/supabase`.
- 🧭 **Mobile Navigation**: Sticky bottom navigation bar with basic SVG icons.
- 📱 **Install Prompt**: Smart detection for iOS "Add to Home Screen" instructions.
- 🌓 **Dark Mode**: Seamless dark mode support via Tailwind's `@custom-variant`.

---

## 🚀 Getting Started

### 1. Clone & Install
```bash
git clone <your-repo-url>
cd mobilepwa
npm install
```

### 2. Environment Variables
Copy `.env.local.example` to `.env.local` and add your Supabase credentials:
```bash
cp .env.local.example .env.local
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📱 PWA Configuration

### Manifest
The PWA manifest is dynamically generated in `src/app/manifest.ts`. You can customize the name, theme color, and icons there.

### Service Worker
The service worker is located at `public/sw.js`. It includes a basic listener for **Push Notifications**.

### Testing PWA Locally
To test PWA features like service workers and "Add to Home Screen" on your physical phone, you should run Next.js with HTTPS:
```bash
npx next dev --experimental-https
```

---

## 🔗 Supabase Setup

The boilerplate uses `@supabase/supabase-js`. The client is initialized in `src/lib/supabase.ts`.

1. Create a project at [supabase.com](https://supabase.com).
2. Get your `Project URL` and `Anon Key`.
3. Add them to your `.env.local` file.

---

## 🎨 Shadcn/UI Usage

This project uses **shadcn/ui** with **Tailwind CSS 4**. 

To add more components:
```bash
npx shadcn@latest add [component-name]
```

Existing components are located in `src/components/ui`.

---

## 🚢 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Make sure to add your Supabase environment variables in your deployment dashboard.
