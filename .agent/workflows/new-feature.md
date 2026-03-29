---
description: Scaffold a new feature with component, route, types, and tests
---

# New Feature Scaffold Workflow

Quickly generate the boilerplate for a new feature so you can focus on logic instead of file creation.

## Inputs
- `FEATURE_NAME` — the name of the feature in kebab-case (e.g. `user-settings`)

## Steps

1. **Create the route directory**
// turbo
```bash
New-Item -ItemType Directory -Force "src/app/$FEATURE_NAME"
```

2. **Generate the page component**
// turbo
```bash
@"
export default function Page() {
    return (
        <div className="w-full max-w-3xl mx-auto py-12 px-6">
            <h1 className="text-3xl font-bold tracking-tight mb-4">$FEATURE_NAME</h1>
            <p className="text-foreground/60">This page is under construction.</p>
        </div>
    );
}
"@ | Set-Content "src/app/$FEATURE_NAME/page.tsx"
```

3. **Create a reusable component file**
// turbo
```bash
New-Item -ItemType Directory -Force "src/components/$FEATURE_NAME"
@"
interface ${FEATURE_NAME}Props {
    // Define props here
}

export function ${FEATURE_NAME}Component({ }: ${FEATURE_NAME}Props) {
    return <div>Component placeholder</div>;
}
"@ | Set-Content "src/components/$FEATURE_NAME/index.tsx"
```

4. **Create a types file**
// turbo
```bash
@"
export interface ${FEATURE_NAME}Data {
    id: string;
    createdAt: Date;
    // Add fields here
}
"@ | Set-Content "src/components/$FEATURE_NAME/types.ts"
```

5. **Verify TypeScript compiles**
// turbo
```bash
npx tsc --noEmit
```

6. **Open the dev server and test**
```bash
npm run dev
```
Navigate to `http://localhost:3000/$FEATURE_NAME` to verify the page loads.
