---
description: Structured approach to finding and fixing a bug
---

# Debug Session Workflow

A systematic debugging process that eliminates guesswork and finds the root cause fast.

## Inputs
- `BUG_DESCRIPTION` — what is happening vs what should happen
- `ERROR_OUTPUT` — full error message and stack trace if available
- `AFFECTED_FILES` — files you suspect are involved

## Steps

1. **Reproduce the bug consistently**
Before touching any code, verify you can reproduce the bug reliably.
- What exact steps trigger it?
- Does it happen every time or intermittently?
- Does it happen in development only, production only, or both?
- Does it happen for all users or specific ones?

Intermittent bugs are almost always race conditions or state timing issues.
Environment-specific bugs are almost always environment variable or build configuration issues.
User-specific bugs are almost always data or permission issues.

2. **Read the full stack trace**
// turbo
```bash
Select-String -Path "$AFFECTED_FILES" -Pattern "at " -Context 0,5
```
Never read just the error message. Read the full stack trace top to bottom. The top line is the symptom. The bottom lines show the cause chain. The file and line number in your code — not in node_modules — is where to start.

3. **Check what changed right before the bug appeared**
// turbo
```bash
git log --oneline -10
git diff HEAD~1 HEAD -- $AFFECTED_FILES
```
Bugs almost always appear immediately after a change. The diff between the last working commit and the current state is almost always where the bug lives.

4. **Add trace logging to the execution path**
// turbo
```bash
Select-String -Path "$AFFECTED_FILES" -Pattern "return|throw|await" -Recurse
```
Add console.logs at every step of the execution path to find exactly where the data diverges from what you expect. Log the input, log after each transformation, log before the return. Find the exact line where it goes wrong.

5. **Check for null and undefined**
// turbo
```bash
Select-String -Path "$AFFECTED_FILES" -Pattern "\?\.|!\.|undefined|null" -Recurse
```
The majority of runtime bugs are null or undefined errors. Check every place the data could be undefined — API responses, database queries, optional chaining, array access.

6. **Verify the data shape**
// turbo
```bash
Select-String -Path "$AFFECTED_FILES" -Pattern "interface |type " -Recurse
```
Compare the TypeScript type definition against the actual data shape at runtime. The most common cause of unexpected behavior is a mismatch between what the type says the data looks like and what it actually looks like.

7. **Check the network request**
Open browser DevTools → Network tab. Find the failing request.
- What is the request payload?
- What is the response status?
- What is the full response body including error details?
- Is the request being made at all?

The network tab shows you exactly what your code sent and exactly what the server returned. This eliminates half the possible causes immediately.

8. **Isolate the bug**
// turbo
```bash
git stash
```
If the bug is complex, create the simplest possible reproduction — a minimal component or function that demonstrates the problem with no surrounding code. A bug that is easy to reproduce in isolation is easy to fix. A bug buried in a complex component is hard to fix.

9. **Write the fix with a test**
Once the root cause is identified:
- Write a test that would have caught this bug
- Write the fix
- Verify the test passes
- Verify the original reproduction steps no longer trigger the bug
- Check that the fix does not break anything adjacent

10. **Generate debug report**
Document the bug session:
- **Root cause**: What was actually wrong
- **Why it happened**: The underlying reason — missing null check, wrong type, race condition
- **The fix**: What changed and why it works
- **Prevention**: What would have caught this earlier — a test, a type, a validation
- **AGENTS.md update**: If the agent caused this bug, add a rule to prevent it happening again