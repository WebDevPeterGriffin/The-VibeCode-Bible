---
description: Run a full code quality review on a file or directory
---

# Code Review Workflow

Perform a structured code quality audit and generate actionable improvement suggestions.

## Inputs
- `TARGET_PATH` — relative path to a file or directory (e.g. `src/components/`)

## Steps

1. **Count lines and complexity**
// turbo
```bash
Get-ChildItem -Recurse -Include *.tsx,*.ts "$TARGET_PATH" | ForEach-Object { "$($_.Name): $((Get-Content $_.FullName).Count) lines" }
```
Flag any files exceeding 200 lines — candidates for splitting.

2. **Check for `any` type usage**
// turbo
```bash
Select-String -Path "$TARGET_PATH\*.tsx","$TARGET_PATH\*.ts" -Pattern ': any' -Recurse
```
Every `any` is a potential bug. Recommend specific types.

3. **Check for console.log leftover**
// turbo
```bash
Select-String -Path "$TARGET_PATH\*.tsx","$TARGET_PATH\*.ts" -Pattern 'console\.(log|warn|error)' -Recurse
```
Remove all `console.log` statements before production. Convert critical ones to a proper logging utility.

4. **Check for hardcoded strings**
// turbo
```bash
Select-String -Path "$TARGET_PATH\*.tsx","$TARGET_PATH\*.ts" -Pattern "http://|https://|localhost" -Recurse
```
Hardcoded URLs should be moved to environment variables or constants.

5. **Verify component naming conventions**
// turbo
```bash
Get-ChildItem -Recurse -Include *.tsx "$TARGET_PATH" | ForEach-Object { $_.BaseName }
```
Verify all component files use PascalCase. Page files should be lowercase `page.tsx`.

6. **Run TypeScript strict check**
// turbo
```bash
npx tsc --noEmit --strict
```

7. **Generate improvement report**
Compile all findings into a structured report with:
- **Critical**: Type safety issues, security risks
- **Warning**: Code smell, complexity, naming issues
- **Suggestion**: Performance optimizations, refactoring opportunities
