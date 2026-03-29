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

async function getWorkflows() {
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

        // Count steps (e.g., "1. " or "10. " at start of lines)
        const stepMatches = content.match(/^\d+\.\s/gm);
        const steps = stepMatches ? stepMatches.length : 0;

        // Command is the filename without .md
        const cmd = '/' + filename.replace('.md', '');

        // Cycle through colors
        const color = COLORS[index % COLORS.length];

        return { cmd, desc, steps, color };
    });

    // Sort alphabetically by command
    return workflows.sort((a, b) => a.cmd.localeCompare(b.cmd));
}

export default async function AiAgentsPage() {
    const workflows = await getWorkflows();

    return <AiAgentsClient workflows={workflows} />;
}
