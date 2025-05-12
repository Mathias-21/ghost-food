import DeliveryManIcon from '@/assets/icons/DeliveryManIcon';
import MoreInfoIcon from '@/assets/icons/MoreInfoIcon';
import MotocycleIcon from '@/assets/icons/MotocycleIcon';
import { formatCurrency } from '@/services/utils';
import React, { Fragment } from 'react';

interface DeliveryPriceProps {
  amount: number;
  icon?: 'moto' | 'deliveryMan';
  moreInfo?: boolean;
}

export default function DeliveryPrice({
  amount,
  icon = 'deliveryMan',
  moreInfo,
}: DeliveryPriceProps) {
  return (
    <Fragment>
      {amount > 0 ? (
        <span className="flex items-center gap-1.5 text-sm font-bold text-[#7B1FA2]">
          {icon === 'deliveryMan' ? (
            <DeliveryManIcon />
          ) : (
            <MotocycleIcon color="#7B1FA2" />
          )}
          {formatCurrency(amount)}
          {moreInfo && (
            <MoreInfoIcon color={amount > 0 ? '#7B1FA2' : '#027A7A'} />
          )}
        </span>
      ) : (
        <span className="flex items-center gap-1.5 text-[#027A7A] text-sm font-bold">
          <MotocycleIcon /> grátis
        </span>
      )}
    </Fragment>
  );
}
