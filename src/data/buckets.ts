export interface Bucket {
    label: string;
    categoryIds: string[];
}

export const BUCKETS: Bucket[] = [
    {
        label: 'Foundation',
        categoryIds: ['cat-1', 'cat-2', 'cat-3'],
    },
    {
        label: 'Building & Shipping',
        categoryIds: ['cat-4', 'cat-5'],
    },
    {
        label: 'Local AI & Agentic',
        categoryIds: ['cat-6', 'cat-8'],
    },
    {
        label: 'Advanced & Scale',
        categoryIds: ['cat-9', 'cat-10', 'cat-11', 'cat-7'],
    },
];
