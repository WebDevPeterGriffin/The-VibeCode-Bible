export type BlockType = 'p' | 'h2' | 'h3' | 'callout' | 'code' | 'ul' | 'ol' | 'workflow_accordion';

export interface WorkflowItem {
    title: string;
    whatItDoes: string;
    whyImportant: string;
    details: string[];
}

export interface Block {
    type: BlockType;
    text?: string;
    items?: string[];
    variant?: 'fire' | 'skull' | 'idea' | 'zap';
    language?: string;
    code?: string;
    workflows?: WorkflowItem[];
}

export interface Section {
    id: string;
    slug: string;
    title: string;
    blocks: Block[];
}

export interface Category {
    id: string;
    slug: string;
    title: string;
    sections: Section[];
}
