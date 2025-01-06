# Full-Stack Front-end

A React dashboard for managing products, categories, and orders with Material-UI.

## Quick Start

1. **Install**
```bash
git clone https://github.com/lui7henrique/full-stack-front-end.git
cd full-stack-front-end
pnpm install
```

2. **Configure**
```env
VITE_API_URL=http://localhost:3333
```

3. **Run**
```bash
pnpm run dev
```
Access at `http://localhost:5173`

## Features

- Dashboard metrics (orders, revenue, average value)
- Products CRUD with image upload
- Categories management
- Orders management
- Dark/Light theme toggle

## Tech Stack

- React + TypeScript + Vite
- Material-UI
- React Query + React Hook Form
- Axios + Orval
- Biome

## Scripts

- `pnpm dev` - Development
- `pnpm build` - Production build
- `pnpm format` - Format code
- `pnpm check` - Lint and fix

## Notes

- Requires backend running at `http://localhost:3333`
- Image upload works only when editing products
- Uses React Query for data management
- Material-UI for consistent UI