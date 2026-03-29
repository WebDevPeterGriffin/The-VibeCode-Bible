---
description: Identify performance bottlenecks across the frontend, backend, and database
---

# Performance Audit Workflow

Perform a structured performance review and generate a prioritized optimization plan.

## Inputs
- `TARGET_PATH` — relative path to a file or directory (e.g. `src/`)

## Steps

1. **Check bundle size**
// turbo
```bash
npx next build 2>&1 | Select-String -Pattern "First Load JS|Route"
```
Flag any route with First Load JS over 150kb. These need code splitting or lazy loading.

2. **Find large components that should be lazy loaded**
// turbo
```bash
Get-ChildItem -Recurse -Include *.tsx "$TARGET_PATH\components" | Where-Object { (Get-Content $_.FullName).Count -gt 150 } | ForEach-Object { "$($_.Name): $((Get-Content $_.FullName).Count) lines" }
```
Components over 150 lines that are not used on initial render should use `dynamic()` with `ssr: false`.

3. **Check for missing Suspense boundaries**
// turbo
```bash
Select-String -Path "$TARGET_PATH\*.tsx" -Pattern "await |fetch\(" -Recurse -l
```
Every async server component and data fetch should have a Suspense boundary with a loading fallback to prevent blocking the whole page.

4. **Check for unnecessary use client directives**
// turbo
```bash
Select-String -Path "$TARGET_PATH\*.tsx" -Pattern '"use client"' -Recurse
```
List all client components. For each one verify it actually needs client side behavior — interactivity, browser APIs, or hooks. Components that only render static content should be server components.

5. **Check for missing image optimization**
// turbo
```bash
Select-String -Path "$TARGET_PATH\*.tsx" -Pattern "<img " -Recurse
```
Every `<img>` tag should be replaced with Next.js `<Image>` component for automatic optimization, lazy loading, and correct sizing.

6. **Check for N+1 query patterns**
// turbo
```bash
Select-String -Path "$TARGET_PATH\*.tsx","$TARGET_PATH\*.ts" -Pattern "\.from\(" -Recurse
```
Look for Supabase queries inside loops or map functions. These cause N+1 query problems — one database call per item instead of one call for all items.

7. **Check for missing database indexes**
// turbo
```bash
Select-String -Path "$TARGET_PATH\*.tsx","$TARGET_PATH\*.ts" -Pattern "\.eq\(|\.filter\(|\.order\(" -Recurse
```
List every column used in `.eq()`, `.filter()`, and `.order()` calls. Verify each column has a database index in Supabase.

8. **Check for expensive re-renders**
// turbo
```bash
Select-String -Path "$TARGET_PATH\*.tsx" -Pattern "useState|useEffect" -Recurse
```
Flag components with more than 3 useState hooks — candidates for useReducer or moving state up. Flag useEffect with no dependency array — these run on every render.

9. **Check for missing memoization on expensive operations**
// turbo
```bash
Select-String -Path "$TARGET_PATH\*.tsx","$TARGET_PATH\*.ts" -Pattern "\.map\(|\.filter\(|\.reduce\(" -Recurse
```
Array operations inside render functions that operate on large datasets should be wrapped in useMemo.

10. **Generate performance report**
Compile all findings into a prioritized optimization plan with:
- **Critical**: Bundle over 300kb, N+1 queries, blocking data fetches with no Suspense
- **High**: Missing image optimization, unnecessary client components, missing indexes
- **Medium**: Large components without lazy loading, expensive unmemoized operations
- **Low**: Minor re-render optimizations, small bundle improvements