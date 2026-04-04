import fs from 'fs';
import path from 'path';
import AiAgentsClient from '@/components/handbook/AiAgentsClient';

const COLORS = [
    'text-green-400',
    'text-blue-400',
    'text-yellow-400',
    'text-pink-400',
    'text-orange-400',
    'text-cyan-400',
    'text-red-400',
    'text-violet-400',
    'text-amber-400'
];

export interface WorkflowEntry {
    cmd: string;
    desc: string;
    steps: number;
    color: string;
    whyImportant: string;
    details: string[];
}

let cachedWorkflows: WorkflowEntry[] | null = null;
async function getWorkflows() {
    if (cachedWorkflows) return cachedWorkflows;
    const workflowsDir = path.join(process.cwd(), '.agent/workflows');

    if (!fs.existsSync(workflowsDir)) {
        return [];
    }

    const files = fs.readdirSync(workflowsDir).filter(f => f.endsWith('.md'));

    const workflows = files.map((filename, index) => {
        const filePath = path.join(workflowsDir, filename);
        const content = fs.readFileSync(filePath, 'utf-8');

        // Extract description from frontmatter
        const descMatch = content.match(/description:\s*(.+)/i);
        const desc = descMatch ? descMatch[1].trim() : 'No description provided.';

        // Extract first paragraph for whyImportant
        let whyImportant = "Ensures stability and consistent patterns across your codebase.";
        const firstParaMatch = content.match(/#\s+[^\n]+\s*\n+([^#]+?)\n+##/);
        if (firstParaMatch) {
            whyImportant = firstParaMatch[1].trim().replace(/\n/g, ' ');
        }

        // Extract steps for details
        const details: string[] = [];
        const stepMatches = content.match(/^\d+\.\s+\*\*(.+)\*\*/gm);
        if (stepMatches) {
            for (const match of stepMatches) {
                details.push(match.replace(/^\d+\.\s+\*\*(.+)\*\*/, '$1'));
            }
        }
        const steps = stepMatches ? stepMatches.length : 0;

        // Command is the filename without .md
        const cmd = '/' + filename.replace('.md', '');

        // Cycle through colors
        const color = COLORS[index % COLORS.length];

        return { cmd, desc, steps, color, whyImportant, details };
    });

    // Sort alphabetically by command
    cachedWorkflows = workflows.sort((a, b) => a.cmd.localeCompare(b.cmd));
    return cachedWorkflows;
}

export interface SkillEntry {
    filename: string;
    path: string;
    type: string;
}

function getSkillFiles(dirPath: string, limit: number): SkillEntry[] {
    const fullPath = path.join(process.cwd(), dirPath);
    if (!fs.existsSync(fullPath)) return [];

    try {
        const entries: SkillEntry[] = [];
        const readDir = (currentPath: string) => {
            if (entries.length >= limit) return;
            const items = fs.readdirSync(currentPath, { withFileTypes: true });
            for (const item of items) {
                if (entries.length >= limit) break;

                const itemPath = path.join(currentPath, item.name);
                if (item.isDirectory()) {
                    if (item.name === 'node_modules' || item.name === '.git') continue;
                    readDir(itemPath);
                } else if (item.isFile()) {
                    const name = item.name.toLowerCase();
                    if (name.endsWith('.md') || name.endsWith('.mdc') || name.endsWith('.py')) {
                        if (name === 'readme.md' || name === 'license.md' || name === 'skill.md') continue;

                        const relPath = path.relative(process.cwd(), itemPath).replace(/\\/g, '/');
                        entries.push({
                            filename: item.name,
                            path: relPath,
                            type: name.split('.').pop() || 'md'
                        });
                    }
                }
            }
        };

        readDir(fullPath);
        return entries;
    } catch {
        return [];
    }
}

function getCombinedSkillFiles(dirs: string[], limit: number = 3000): SkillEntry[] {
    const entries: SkillEntry[] = [];
    for (const d of dirs) {
        if (entries.length >= limit) break;
        const subFiles = getSkillFiles(d, limit - entries.length);
        entries.push(...subFiles);
    }
    return entries.sort((a, b) => a.filename.localeCompare(b.filename));
}

let cachedSkills: Record<string, SkillEntry[]> | null = null;
async function getSkillsMap() {
    if (cachedSkills) return cachedSkills;
    cachedSkills = {
        uiux: getCombinedSkillFiles(['.agent/skills/ui-ux-pro-max', '.claude/skills/ui-ux-pro-max']),
        gsap: getCombinedSkillFiles(['.agent/skills/gsap-skills', '.claude/skills/gsap-skills']),
        cursorrules: getCombinedSkillFiles(['.agent/skills/awesome-cursorrules/rules', '.claude/skills/awesome-cursorrules/rules']),
        honnibal: getCombinedSkillFiles(['.agent/skills/honnibal-skills', '.claude/skills/honnibal-skills'])
    };
    return cachedSkills;
}

export default async function AiAgentsPage() {
    const workflows = await getWorkflows();
    const skillsMap = await getSkillsMap();

    return <AiAgentsClient workflows={workflows} skillsMap={skillsMap} />;
}
