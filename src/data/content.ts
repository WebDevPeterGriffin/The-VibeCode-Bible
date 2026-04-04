import { Category } from './types';
import { category as gettingStarted } from './categories/01-getting-started';
import { category as theTools } from './categories/02-the-tools';
import { category as theMethodology } from './categories/03-the-methodology';
import { category as buildingProducts } from './categories/04-building-products';
import { category as debuggingAndTesting } from './categories/05-debugging-and-testing';
import { category as localAiSetup } from './categories/06-local-ai-setup';
import { category as lessonsLearned } from './categories/07-lessons-learned';

export const content: Category[] = [
    gettingStarted,
    theTools,
    theMethodology,
    buildingProducts,
    debuggingAndTesting,
    localAiSetup,
    lessonsLearned,
];
