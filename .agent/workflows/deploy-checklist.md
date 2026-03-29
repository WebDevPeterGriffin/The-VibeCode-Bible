---
description: Pre-deployment verification checklist before pushing to production
---

# Deploy Checklist Workflow

Run this before every production deployment to catch issues early.

## Steps

1. **Ensure all environment variables are set**
// turbo
```bash
if (Test-Path .env.local) { Get-Content .env.local | Select-String -Pattern '=' } else { Write-Host "WARNING: No .env.local file found" }
```
Verify all required keys have values (no empty strings).

2. **Run the full TypeScript check**
// turbo
```bash
npx tsc --noEmit
```

3. **Run the production build**
```bash
npm run build
```
If this fails, fix all errors before proceeding.

4. **Check bundle size**
// turbo
```bash
Get-ChildItem -Recurse ".next/static" -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum | ForEach-Object { "$([math]::Round($_.Sum / 1MB, 2)) MB total bundle" }
```
Flag if total bundle exceeds 5MB.

5. **Verify no dev dependencies leak into production**
// turbo
```bash
Select-String -Path "package.json" -Pattern '"devDependencies"' -Context 0,20
```
Ensure test frameworks and linters are in `devDependencies`, not `dependencies`.

6. **Check for exposed secrets**
// turbo
```bash
Select-String -Recurse -Path "src" -Include *.ts,*.tsx -Pattern "sk_live|pk_live|SUPABASE_SERVICE_ROLE|password\s*=" -ErrorAction SilentlyContinue
```
If any matches are found, **stop immediately** and move secrets to environment variables.

7. **Verify .gitignore protects sensitive files**
// turbo
```bash
git status --ignored --short | Select-String ".env"
```
Confirm `.env.local` and `.env` files are being ignored.

8. **Final commit and tag**
```bash
git add .
git commit -m "chore: pre-deploy verification passed"
git tag -a v1.0.0 -m "Production release"
git push --follow-tags
```
