# Progress Tracker

Update this file after every meaningful implementation
change.

## Current Phase

- In Progress

## Current Goal

- Feature Spec 03 (next unit)

## Completed

- **Design System (Feature Spec 01)**
  - Installed and configured `shadcn/ui` (v4, Tailwind v4 compatible)
  - Added shadcn components: Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea
  - Installed `lucide-react`
  - Created `lib/utils.ts` with `cn()` helper (clsx + tailwind-merge)
  - Applied dark theme permanently via `dark` class on `<html>` in `app/layout.tsx`
  - `npm run build` passes

- **Editor Chrome (Feature Spec 02)**
  - Created `components/editor/editor-navbar.tsx`
    - Fixed-height (`h-12`) top navbar, `fixed` + `z-40`
    - Left / center / right sections
    - Sidebar toggle with `PanelLeftOpen` / `PanelLeftClose` icons
    - Dark background (`bg-background`) + `border-b border-border`
  - Created `components/editor/project-sidebar.tsx`
    - Floats above canvas (`fixed`, `z-30`, `top-12`), does not push content
    - Slides in from left via `translate-x-0` / `-translate-x-full` transition
    - Accepts `isOpen` + `onClose` props
    - Header: `Projects` title + `X` close button
    - shadcn `Tabs`: My Projects | Shared (both with empty placeholder state)
    - Full-width `New Project` button at bottom with `Plus` icon
  - Dialog pattern: shadcn `Dialog` already installed and ready; no new code needed
  - `npm run build` passes, no TypeScript errors

## In Progress

- None.

## Next Up

- Feature Spec 03

## Open Questions

- None currently.

## Architecture Decisions

- **Dark-only theme**: `dark` class hardcoded on `<html>` in `app/layout.tsx`.
- **shadcn v4 + Tailwind v4**: Uses `@import "shadcn/tailwind.css"` and `@theme inline` block. Components use `@base-ui/react`.
- **`components/ui/*` is protected**: Do not modify generated files.
- **Editor chrome state**: Sidebar open/close state lives in the parent that renders both `EditorNavbar` and `ProjectSidebar`. Navbar receives `isSidebarOpen` + `onSidebarToggle`; sidebar receives `isOpen` + `onClose`.

## Session Notes

- Path alias `@/*` maps to project root
- Navbar height is `h-12` (3rem) — sidebar `top` and `height` are calibrated to this
