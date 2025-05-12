import Rating from '@/components/Rating';
import { formatCurrency } from '@/services/utils';
import { DotIcon } from 'lucide-react';
import React from 'react';

interface RatingAndMoreInfosProps {
  rating: number;
  closingTime: string;
  minimumOrder: number;
}

export default function RatingAndMoreInfos({
  rating,
  closingTime,
  minimumOrder,
}: RatingAndMoreInfosProps) {
  return (
    <div className="mt-1">
      <div className="flex items-center">
        <Rating rating={rating} showMax moreInfo />
        <DotIcon color="#A8ADB7" />
        <span className="text-xs text-[#02A117] font-bold">
          fecha às {closingTime}
        </span>
      </div>
      <span className="text-xs text-[#6D6F73] font-bold">
        pedido mínimo: {formatCurrency(minimumOrder)}
      </span>
    </div>
  );
}
