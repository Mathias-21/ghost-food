import { Accordion } from '@/components/ui/accordion';
import React from 'react';
import CategoryAccordionItem from '../CategoryAccordionItem';
import { ICategoryFood } from '@/types';

interface CategoriesAccordionProps {
  categories: ICategoryFood[];
}

export default function CategoriesAccordion({
  categories,
}: CategoriesAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {categories.map((category, i) => (
        <CategoryAccordionItem key={i} props={category} />
      ))}
    </Accordion>
  );
}
