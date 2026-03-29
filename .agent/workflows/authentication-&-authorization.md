---
description: Verify authentication and authorization are correctly implemented before shipping
---

# Auth Checklist Workflow

A complete security and correctness audit of your authentication and authorization implementation.

## Inputs
- `TARGET_PATH` — relative path to your project (e.g. `src/`)
- `AUTH_PROVIDER` — your auth provider (e.g. `Supabase`)

## Steps

1. **Verify middleware is protecting all private routes**
// turbo
```bash
Get-Content "middleware.ts"
```
Open middleware.ts and verify:
- The matcher config covers all protected routes
- Unauthenticated users are redirected to login, not shown an error
- The middleware checks the session server-side, not client-side
- Public routes are explicitly listed and everything else is protected by default

Flag any route that should be protected but is not in the matcher.

2. **Check for client-side only auth guards**
// turbo
```bash
Select-String -Path "$TARGET_PATH\*.tsx" -Pattern "useSession|useUser|getSession" -Recurse
```
Client-side auth checks are UI only — they can be bypassed by disabling JavaScript. Every protected page must check auth server-side in the page component or middleware. Flag any page that relies solely on a client-side hook for protection.

3. **Verify session is checked in all API routes**
// turbo
```bash
Get-ChildItem -Recurse -Include route.ts "$TARGET_PATH" | ForEach-Object { Select-String -Path $_.FullName -Pattern "getSession|getUser|auth" }
```
Every API route that returns user data or performs mutations must verify the session before processing. Flag any route that reads from or writes to user-specific data without a session check.

4. **Check for user ID trust from client**
// turbo
```bash
Select-String -Path "$TARGET_PATH\*.ts" -Pattern "req\.body\.userId|body\.user_id|params\.userId" -Recurse
```
Never trust a user ID sent from the client. Always derive the user ID from the verified session server-side using `auth.uid()` or equivalent. Flag any API route that accepts a user ID in the request body and uses it directly.

5. **Verify magic link and OAuth redirect URLs**
// turbo
```bash
Select-String -Path "$TARGET_PATH\*.tsx","$TARGET_PATH\*.ts" -Pattern "redirectTo|callbackUrl|redirect_uri" -Recurse
```
Check every redirect URL used in auth flows:
- Must be an absolute URL in production
- Must be added to the allowed redirect URLs in your auth provider dashboard
- Must not accept arbitrary redirect destinations from query parameters — open redirect vulnerability

6. **Check for missing email verification**
// turbo
```bash
Select-String -Path "$TARGET_PATH\*.tsx","$TARGET_PATH\*.ts" -Pattern "signUp|createUser" -Recurse
```
Verify that email verification is enabled in your auth provider. Check that unverified users cannot access protected features. Flag any flow that grants full access before email is confirmed.

7. **Verify password reset flow**
// turbo
```bash
Select-String -Path "$TARGET_PATH\*.tsx","$TARGET_PATH\*.ts" -Pattern "resetPassword|forgotPassword|recovery" -Recurse
```
Check the password reset implementation:
- Reset tokens must expire — verify the expiry is set in your auth provider
- Reset links must be single use — verify they are invalidated after use
- The reset flow must verify the token server-side before allowing the password change
- Users must be logged out of all other sessions after a password reset

8. **Check for session fixation vulnerabilities**
// turbo
```bash
Select-String -Path "$TARGET_PATH\*.tsx","$TARGET_PATH\*.ts" -Pattern "signIn|signOut|signUp" -Recurse
```
Verify that:
- A new session is created after login — the session ID changes on authentication
- Sessions are invalidated on sign out — not just the cookie cleared
- Session tokens are rotated regularly

9. **Check role based access control if applicable**
// turbo
```bash
Select-String -Path "$TARGET_PATH\*.tsx","$TARGET_PATH\*.ts" -Pattern "role|admin|permission" -Recurse
```
If your app has multiple user roles:
- Roles must be stored server-side, never in the JWT payload that the client controls
- Role checks must happen server-side in middleware or API routes
- Admin routes must have explicit role verification, not just auth verification
- Verify that a regular user cannot access admin endpoints by changing a URL

10. **Test the auth flows manually**
Before shipping, manually test every auth scenario:
- Sign up with a new email — verify email arrives and link works
- Sign in with correct credentials — verify redirect is correct
- Sign in with wrong credentials — verify error is shown, not a server error
- Access a protected route while logged out — verify redirect to login
- Access a protected route while logged in as wrong user — verify 403 not 404
- Sign out — verify session is destroyed and protected routes redirect
- Use an expired session token — verify re-authentication is required
- Try to access another user's data by changing an ID in the URL — verify it is blocked

11. **Generate auth audit report**
Compile all findings into a prioritized report:
- **Critical**: Unprotected routes, user ID trusted from client, open redirects, missing server-side session checks
- **High**: Client-side only auth guards, missing email verification, roles stored client-side
- **Medium**: Missing session rotation, weak password reset flow, verbose error messages that expose user existence
- **Low**: Missing rate limiting on login endpoint, no lockout after failed attempts, session expiry too long