import DeliveryPrice from '@/components/DeliveryPrice';
import { DotIcon } from 'lucide-react';
import React from 'react';

export default function DeliveryInfo({ amount }: { amount: number }) {
  return (
    <div className="flex flex-col items-start gap-1">
      <div className="flex items-center mt-1.5">
        <DeliveryPrice amount={amount} moreInfo icon="moto" />
        <DotIcon color="#A8ADB7" />
        <p className="text-xs text-[#6D6F73] font-bold">hoje, 30-40 min</p>
        <DotIcon color="#A8ADB7" />
        <p className="text-xs text-[#6D6F73] font-bold">5.2km</p>
      </div>
      <span className="p-1.5 rounded-[4px] bg-[#F2FAFA] text-xs text-[#027A7A] font-bold">
        entrega grátis cima de R$ 35,00
      </span>
    </div>
  );
}
