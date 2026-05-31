# Progress Tracker

Update this file after every meaningful implementation
change.

## Current Phase

- In Progress

## Current Goal

- Design system foundation: shadcn/ui + component primitives

## Completed

- **Design System (Feature Spec 01)**
  - Installed and configured `shadcn/ui` (v4, Tailwind v4 compatible)
  - Added shadcn components: Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea
  - Installed `lucide-react` (bundled with shadcn init)
  - Created `lib/utils.ts` with `cn()` helper (clsx + tailwind-merge)
  - Applied dark theme permanently via `dark` class on `<html>` in `app/layout.tsx`
  - `globals.css` includes full shadcn token set for both `:root` and `.dark`
  - `npm run build` passes

## In Progress

- None.

## Next Up

- Feature Spec 02 (next feature unit)

## Open Questions

- None currently.

## Architecture Decisions

- **Dark-only theme**: The `dark` class is hardcoded on `<html>` in `app/layout.tsx`. shadcn's `.dark` CSS block is always active. No light/dark toggle needed.
- **shadcn v4 + Tailwind v4**: Uses `@import "shadcn/tailwind.css"` and `@theme inline` block instead of `tailwind.config.ts`. Components use `@base-ui/react` instead of older radix-ui packages.
- **`components/ui/*` is protected**: Do not modify generated files. Use shadcn CLI to add new components.

## Session Notes

- shadcn CLI installed version 4.8.3
- Next.js 16.2.6 uses Turbopack for builds
- Path alias `@/*` maps to project root (already configured in tsconfig.json)
