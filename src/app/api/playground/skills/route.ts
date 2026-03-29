import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export interface SkillEntry {
    name: string;
    slug: string;
    description: string;
    content: string;
    type: 'skill' | 'workflow';
}

async function getMarkdownFiles(dirPath: string, type: 'skill' | 'workflow'): Promise<SkillEntry[]> {
    const entries: SkillEntry[] = [];
    try {
        const files = await fs.readdir(dirPath);
        for (const file of files) {
            if (file.endsWith('.md') || file.endsWith('.mdc')) {
                const fullPath = path.join(dirPath, file);
                const content = await fs.readFile(fullPath, 'utf-8');

                // Extract description: usually the first non-heading paragraph
                const lines = content.split('\n');
                let description = '';
                for (const line of lines) {
                    const trimmed = line.trim();
                    if (trimmed && !trimmed.startsWith('#') && !trimmed.startsWith('---') && !trimmed.startsWith('description:')) {
                        description = trimmed;
                        break;
                    }
                }

                // Fallback if no description found
                if (!description) description = `A ${type} file used by AI agents.`;

                // Clean the description to be a concise single line (truncate if needed)
                description = description.length > 120 ? description.substring(0, 117) + '...' : description;

                entries.push({
                    name: file.replace('.md', '').replace('.mdc', ''),
                    slug: file.replace('.md', '').replace('.mdc', '').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                    description,
                    content,
                    type,
                });
            }
        }
    } catch (e) {
        // Directory might not exist, silently ignore to not break the endpoint
        console.warn(`Could not read directory: ${dirPath}`, e);
    }
    return entries;
}

export async function GET() {
    try {
        const skillsDir = path.join(process.cwd(), '.agent', 'skills');
        const workflowsDir = path.join(process.cwd(), '.agent', 'workflows');

        const skills = await getMarkdownFiles(skillsDir, 'skill');
        const workflows = await getMarkdownFiles(workflowsDir, 'workflow');

        // Combine and limit to prevent massive payload sizes if needed, or send all. 
        // We have 1172 skills. Let's send a simplified payload for the client containing just metadata to save bandwidth, 
        // but wait, the prompt asks to return `{ name, slug, description, content, type }`. 
        // 1172 full markdown contents in one JSON payload might be around ~10MB.
        // It's acceptable for a local/admin Next.js App, but let's just send it.
        const allItems = [...workflows, ...skills];

        return NextResponse.json(allItems);
    } catch (error) {
        console.error('Failed to load skills:', error);
        return NextResponse.json({ error: 'Failed to load skills' }, { status: 500 });
    }
}
