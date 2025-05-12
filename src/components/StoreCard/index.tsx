import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import DeliveryPrice from '../DeliveryPrice';
import { useRouter } from 'next/navigation';
import { StoreProps } from '@/types';
import Rating from '../Rating';

export default function StoreCard({
  id,
  name,
  deliveryAmount,
  rating,
  isOpen,
  logoUrl,
}: StoreProps) {
  const router = useRouter();

  return (
    <div
      className="flex items-center gap-4 min-h-[72px] w-full rounded-[8px] bg-[#F5F6F9]"
      onClick={() => router.push(`/${id}`)}
    >
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
          <DeliveryPrice amount={deliveryAmount} />
          <Rating rating={rating} />
        </div>
      </div>
    </div>
  );
}
