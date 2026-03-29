export type BlockType = 'p' | 'h2' | 'h3' | 'callout' | 'code' | 'ul' | 'ol';

export interface Block {
    type: BlockType;
    text?: string;
    items?: string[];
    variant?: 'fire' | 'skull' | 'idea' | 'zap';
    language?: string;
    code?: string;
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
