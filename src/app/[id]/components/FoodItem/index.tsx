import PromotionIcon from '@/assets/icons/PromotionIcon';
import SpicyIcon from '@/assets/icons/SpicyIcon';
import VegetarianIcon from '@/assets/icons/VegetarianIcon';
import { cn } from '@/lib/utils';
import { formatCurrency } from '@/services/utils';
import { IFood } from '@/types';
import React from 'react';

function returnFormattedDetails(details: string[]) {
  return details.map((detail, index) => {
    if (detail === 'Vegetariano') return <VegetarianIcon key={index} />;
    if (detail === 'Picante') return <SpicyIcon key={index} />;
    return null;
  });
}

export default function FoodItem({ food }: { food: IFood }) {
  return (
    <div className="flex items-center justify-between w-full gap-2">
      <div className="flex flex-col gap-1">
        <p className="flex items-center gap-1.5 text-sm font-semibold">
          {food.name} {returnFormattedDetails(food.details)}
        </p>
        <span className="text-xs text-[#6D6F73] line-clamp-2 text-ellipsis">
          {food.description}
        </span>
      </div>
      <div className="flex flex-col items-end">
        {food.initialPrice && (
          <span className="text-xs text-[#6D6F73] font-bold">a partir de</span>
        )}
        <span
          className={cn(
            'text-sm text-[#7B1FA2] font-bold',
            food.promotionPrice && 'text-xs text-[#6D6F73] line-through'
          )}
        >
          {formatCurrency(food.price)}
        </span>
        {food.promotionPrice && (
          <span className="flex items-center gap-1 text-sm text-[#02A117] font-bold">
            <PromotionIcon size="12" />
            {formatCurrency(food.promotionPrice)}
          </span>
        )}
      </div>
    </div>
  );
}
