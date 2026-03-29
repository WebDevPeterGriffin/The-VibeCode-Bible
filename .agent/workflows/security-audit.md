---
description: Run a full security audit on the codebase and flag vulnerabilities
---

# Security Audit Workflow

Perform a structured security review and generate a prioritized list of vulnerabilities and fixes.

## Inputs
- `TARGET_PATH` — relative path to a file or directory (e.g. `src/`)

## Steps

1. **Check for exposed secrets and API keys**
// turbo
```bash
Select-String -Path "$TARGET_PATH\*.tsx","$TARGET_PATH\*.ts" -Pattern "sk-|Bearer |PRIVATE|SECRET|PASSWORD|API_KEY" -Recurse
```
Any hardcoded secret is a critical vulnerability. Move to environment variables immediately.

2. **Check for direct environment variable access in client components**
// turbo
```bash
Select-String -Path "$TARGET_PATH\*.tsx","$TARGET_PATH\*.ts" -Pattern "process\.env\." -Recurse
```
Flag any `process.env` access in files inside `src/app/` that are not API routes or server components. Client components must only use `NEXT_PUBLIC_` prefixed variables.

3. **Check for service role key usage in frontend code**
// turbo
```bash
Select-String -Path "$TARGET_PATH\*.tsx","$TARGET_PATH\*.ts" -Pattern "SERVICE_ROLE|supabaseAdmin" -Recurse
```
Service role key must never appear in client side code or be passed to the frontend.

4. **Check for missing input validation on API routes**
// turbo
```bash
Get-ChildItem -Recurse -Include route.ts "$TARGET_PATH" | ForEach-Object { Select-String -Path $_.FullName -Pattern "req\.json\(\)|request\.json\(\)" }
```
Every API route that accepts a request body must validate the input before processing. Flag any route that calls `.json()` without a subsequent validation step.

5. **Check for unverified webhook handlers**
// turbo
```bash
Select-String -Path "$TARGET_PATH\*.ts" -Pattern "webhook" -Recurse -l
```
Open each webhook file and verify it checks a cryptographic signature before processing the payload. Flag any webhook handler that trusts the raw request body.

6. **Check for SQL injection risks**
// turbo
```bash
Select-String -Path "$TARGET_PATH\*.tsx","$TARGET_PATH\*.ts" -Pattern "\.rpc\(|\.from\(.*\$\{" -Recurse
```
Flag any Supabase query that uses string interpolation instead of parameterized queries.

7. **Check for missing RLS on Supabase tables**
// turbo
```bash
Select-String -Path "$TARGET_PATH\*.tsx","$TARGET_PATH\*.ts" -Pattern "\.from\(" -Recurse
```
List every table name queried. Verify each one has RLS enabled in the Supabase dashboard.

8. **Check for missing auth on protected routes**
// turbo
```bash
Get-ChildItem -Recurse -Include page.tsx "$TARGET_PATH\app" | ForEach-Object { Select-String -Path $_.FullName -Pattern "getSession|getUser|auth" }
```
Any page that should require authentication must check the session. Flag pages in protected directories that have no auth check.

9. **Check for console.log with sensitive data**
// turbo
```bash
Select-String -Path "$TARGET_PATH\*.tsx","$TARGET_PATH\*.ts" -Pattern "console\.log.*user|console\.log.*token|console\.log.*key|console\.log.*password" -Recurse
```
Logging sensitive data is a security risk in production. Remove all console.logs that could expose user data or credentials.

10. **Generate security report**
Compile all findings into a prioritized report with:
- **Critical**: Exposed secrets, unverified webhooks, missing auth, service role in frontend
- **High**: Missing input validation, RLS not enabled, SQL injection risks
- **Medium**: Environment variable misuse, sensitive data in logs
- **Low**: Hardcoded URLs, overly permissive CORS, missing rate limiting