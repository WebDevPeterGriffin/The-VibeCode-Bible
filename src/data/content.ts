import { Category } from './types';
import { category as foundation } from './categories/01-foundation';
import { category as buildingAndShipping } from './categories/02-building-and-shipping';
import { category as localAiAndAgentic } from './categories/03-local-ai-and-agentic';
import { category as advancedAndScale } from './categories/04-advanced-and-scale';

export const content: Category[] = [
    foundation,
    buildingAndShipping,
    localAiAndAgentic,
    advancedAndScale,
];
