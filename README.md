# Kathmandu Review – Next.js Frontend

This repository contains a modern redesign of **Kathmandu Review**, built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **shadcn/ui** and **Framer Motion**. The goal is to provide a polished, performant and accessible user interface that meets high quality standards (Lighthouse ≥ 95 across performance, accessibility, best practices and SEO).

## Features

- ✨ **Next.js 14** using the app router and React Server Components.
- 🎨 **Tailwind CSS** with design tokens for primary, accent, surface and muted colours.
- 🌓 **Dark/Light themes** with smooth cross–fades via `next-themes`.
- 🎬 **Framer Motion** animations for route transitions, parallax hero and interactive cards.
- 🧩 **shadcn/ui** components installed on demand to avoid boilerplate.
- 🔍 **Command palette** (Cmd/Ctrl K) and search bar with instant filtering.
- 🏷️ Semantic HTML, accessible ARIA attributes and keyboard navigation support.
- 🗂️ File structure ready for expansion with additional pages and API routes.

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   # or
   yarn
   ```

2. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Lint and format**

   ```bash
   npm run lint       # check code style
   npm run lint:fix   # automatically fix lint errors
   npm run format     # format files with Prettier
   ```

4. **Building for production**

   ```bash
   npm run build
   npm run start
   ```

## Adding Real Data

The mock data used in this project lives in `lib/mock.ts`. To hook the UI up to a real API, replace the mock calls with fetchers to your backend. Ensure that date strings conform to ISO 8601 and that slugs are URL‑friendly.

## Project Structure

- `app/` – Contains page components using the new app router. Each folder inside `app/` automatically becomes a route.
- `components/` – Reusable UI components such as navigation, hero, cards, lists and command palette.
- `lib/` – Mock data, constants and utility functions (e.g. the parallax hook).
- `public/` – Static assets such as images and favicons.

## License

This project is provided without a specific license. You are free to adapt and extend it for your own purposes.
