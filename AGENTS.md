# Shared working instructions

Read `HANDOFF.md` before continuing work. These conventions apply to Codex,
Claude, and other coding agents working in this repository.

## Preserve the existing implementation

- This is the Bebetter marketing website, built with Next.js App Router,
  React, TypeScript, Tailwind CSS v4, and exported Framer components.
- Follow the style of the file being edited: indentation, quotes, semicolons,
  naming, import paths, and component structure. Do not reformat unrelated code.
- Keep changes focused on the user's request. Do not replace libraries,
  redesign sections, or perform broad refactors without a task requiring it.
- Inspect `git status` and the relevant diff before editing. Existing changes
  may belong to the user or another agent; preserve them and never claim them
  as your own work.

## Code conventions

- Use TypeScript for application code and functional React components.
- Keep routes in `app/`, section components in `components/`, and shared data
  and helpers in `lib/`. Use the existing `@/` import alias where appropriate.
- Keep site copy and configuration in `lib/site.ts`, project records in
  `lib/projects.ts`, and legal records in `lib/legal.ts`.
- Keep server components by default; add `"use client"` when browser APIs,
  hooks, or interactive state require it. Clean up listeners and observers.
- Reuse the design tokens and `.t-*` typography utilities in `app/globals.css`.
  Preserve the existing responsive behavior; Framer's phone cutoff is 809px,
  while Tailwind breakpoints are also used in the layout.
- Reuse exports from `components/framer.ts`. Treat `framer/` as generated code;
  prefer wrapper changes or changes to the source design over manual edits.
  Re-exporting may overwrite generated files, so inspect the resulting diff.
- `Toolkit.tsx` and `Pricing.tsx` contain deliberate DOM patches for Framer
  limitations. Understand these before changing the exported components.
- Keep registry-derived UI components in their current style and document
  local deviations as their existing comments do.
- Regenerate image assets only when requested or necessary for the task.
  Scripts: `npm run logo`, `npm run logos`, and `npm run team`.

## Verification and handoff

- Run checks appropriate to the change. Do not report a check as passing
  unless it actually ran successfully. Distinguish code inspection from
  browser verification, type checking, and production builds.
- Before ending an implementation session, update `HANDOFF.md` with the
  request, exact changes and files, decisions, checks and results, and any
  remaining work. Keep it current rather than accumulating a long transcript.
- Clearly separate pre-existing observations from changes made this session.
- Never put credentials or secrets into handoff files.
