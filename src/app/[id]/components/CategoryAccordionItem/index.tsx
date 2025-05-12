import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ICategoryFood } from '@/types';
import React from 'react';
import FoodItem from '../FoodItem';
import PromotionIcon from '@/assets/icons/PromotionIcon';

export default function CategoryAccordionItem({
  props,
}: {
  props: ICategoryFood;
}) {
  return (
    <AccordionItem
      value={props.name}
      className="border-b-[4px] border-[#EEF0F5]"
    >
      <AccordionTrigger className="text-base font-bold px-4">
        <div className="flex flex-col">
          <span className="flex items-center gap-2">
            {props.name}
            {props.promotion && <PromotionIcon />}
          </span>
          {props.description && (
            <span className="text-xs font-semibold text-[#6D6F73]">
              {props.description}
            </span>
          )}
        </div>
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-5  px-4">
        {props.foods.map((food, i) => (
          <FoodItem key={i} food={food} />
        ))}
      </AccordionContent>
    </AccordionItem>
  );
}
