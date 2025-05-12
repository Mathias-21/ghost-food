'use client';

import Header from '@/components/Header';
import { DetailedStoreProps } from '@/types';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Actions from './components/Actions';
import DeliveryInfo from './components/DeliveryInfo';
import RatingAndMoreInfos from './components/RatingAndMoreInfos';
import detailedStores from '@/mockedDatas/detailedStores';
import CategoriesAccordion from './components/CategoriesAccordion';

export default function Store() {
  const { id } = useParams();
  const [store, setStore] = useState<DetailedStoreProps>();

  useEffect(() => {
    const store = detailedStores.find((store) => store.id === Number(id));
    setStore(store);
  }, [id]);

  if (!store) return null;

  return (
    <section>
      <Header />
      <div className="px-4 py-6">
        <div className="flex items-center gap-2 w-full">
          <Image
            src={store.logoUrl}
            alt={`Imagem da loja ${store.name}`}
            width={36}
            height={36}
            className="border border-#EEF0F5 rounded-[5px]"
          />
          <h1 className="text-xl font-extrabold">{store.name}</h1>
        </div>
        <Actions />
        <DeliveryInfo amount={store.deliveryAmount} />
        <RatingAndMoreInfos
          rating={store.rating}
          closingTime={store.closingTime}
          minimumOrder={store.minimumOrder}
        />
      </div>
      <CategoriesAccordion categories={store.categories} />
    </section>
  );
}
