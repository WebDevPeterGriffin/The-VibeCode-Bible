import { content } from '@/data/content';
import { notFound } from 'next/navigation';
import SectionClient from './SectionClient';

export function generateStaticParams() {
    return content.flatMap(c => c.sections).map((section) => ({
        slug: section.slug,
    }));
}

export default function SectionPage({ params }: { params: { slug: string } }) {
    const allSections = content.flatMap(c => c.sections);
    const sectionIndex = allSections.findIndex((s) => s.slug === params.slug);
    const section = allSections[sectionIndex];

    if (!section) {
        notFound();
    }

    const prevSection = sectionIndex > 0 ? allSections[sectionIndex - 1] : null;
    const nextSection = sectionIndex < allSections.length - 1 ? allSections[sectionIndex + 1] : null;

    return (
        <SectionClient
            section={section}
            sectionIndex={sectionIndex}
            prevSection={prevSection ? { slug: prevSection.slug, title: prevSection.title } : null}
            nextSection={nextSection ? { slug: nextSection.slug, title: nextSection.title } : null}
        />
    );
}
