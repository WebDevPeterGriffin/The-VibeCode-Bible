---
description: Clean up the project before a commit, release, or handoff
---

# Project Cleanup Workflow

Run this workflow to ensure the repository is production-ready, free of junk files, and passes all checks.

## Steps

1. **Delete build artifacts and caches**
// turbo
```bash
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force tsconfig.tsbuildinfo -ErrorAction SilentlyContinue
```

2. **Remove any leftover log files**
// turbo
```bash
Get-ChildItem -Recurse -Include *.log,*.log.tmp -ErrorAction SilentlyContinue | Remove-Item -Force
```

3. **Remove OS-generated junk files**
// turbo
```bash
Get-ChildItem -Recurse -Include .DS_Store,Thumbs.db,desktop.ini -ErrorAction SilentlyContinue | Remove-Item -Force
```

4. **Verify the .gitignore is comprehensive**
// turbo
```bash
cat .gitignore
```
Ensure the following entries exist: `node_modules/`, `.next/`, `*.log`, `.DS_Store`, `Thumbs.db`, `tsconfig.tsbuildinfo`.

5. **Run the TypeScript compiler to catch type errors**
// turbo
```bash
npx tsc --noEmit
```

6. **Run the production build to catch runtime issues**
```bash
npm run build
```

7. **Check for large files that shouldn't be committed**
// turbo
```bash
git ls-files | ForEach-Object { $f = $_; $s = (Get-Item $f -ErrorAction SilentlyContinue).Length; if ($s -gt 500KB) { "$([math]::Round($s/1KB))KB  $f" } }
```
Review any files over 500KB. Images and binary assets in `.agent/skills/` are acceptable.

8. **Final staging and commit**
```bash
git add .
git status
```
Review staged files. Commit with a descriptive message when ready.
