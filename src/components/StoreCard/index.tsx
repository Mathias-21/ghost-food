import DeliveryManIcon from '@/assets/icons/DeliveryManIcon';
import MotocycleIcon from '@/assets/icons/MotocycleIcon';
import StarIcon from '@/assets/icons/StarIcon';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

interface StoreCardProps {
  name: string;
  deliveryAmount: number;
  rating: number;
  isOpen: boolean;
  logoUrl: string;
}

export default function StoreCard({
  name,
  deliveryAmount,
  rating,
  isOpen,
  logoUrl,
}: StoreCardProps) {
  return (
    <div className="flex items-center gap-4 min-h-[72px] w-full rounded-[8px] bg-[#F5F6F9]">
      <Image
        src={logoUrl}
        alt={`Imagem da loja ${name}`}
        className={cn(
          'border border-[#EEF0F5] rounded-l-[8px] min-h-[72px]',
          !isOpen && 'opacity-40'
        )}
        width={72}
        height={72}
      />
      <div>
        <p className="text-font-quaternary font-bold">{name}</p>
        <div className="flex items-center gap-2">
          {deliveryAmount > 0 ? (
            <span className="flex items-center gap-1.5 text-sm font-bold text-[#7B1FA2]">
              <DeliveryManIcon />
              {deliveryAmount.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                maximumFractionDigits: 2,
              })}
            </span>
          ) : (
            <span className="flex items-center gap-1.5 text-[#027A7A] text-sm font-bold">
              <MotocycleIcon /> grátis
            </span>
          )}
          <span className="flex items-center gap-1.5 font-bold text-sm text-[#6D6F73]">
            <StarIcon />
            {rating}
          </span>
        </div>
      </div>
    </div>
  );
}
