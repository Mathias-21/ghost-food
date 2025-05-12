import MoreInfoIcon from '@/assets/icons/MoreInfoIcon';
import StarIcon from '@/assets/icons/StarIcon';
import { cn } from '@/lib/utils';
import React from 'react';

interface RatingProps {
  rating: number;
  showMax?: boolean;
  moreInfo?: boolean;
}

export default function Rating({ rating, showMax, moreInfo }: RatingProps) {
  return (
    <span
      className={cn(
        'flex items-center gap-1.5 font-bold text-sm text-[#6D6F73]',
        showMax && 'text-xs'
      )}
    >
      <StarIcon size="12" />
      {rating} {showMax && 'de 5'}
      {moreInfo && <MoreInfoIcon color="#6D6F73" />}
    </span>
  );
}
