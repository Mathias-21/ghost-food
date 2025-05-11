import React from 'react';
import stores from './mockedData';
import StoreCard from '../StoreCard';

export default function StoresList() {
  return (
    <section className="pt-5 px-4 mb-8">
      <h1 className="text-xl text-primary font-extrabold">abertos</h1>
      <div className="flex flex-col gap-4 mt-4">
        {stores
          .filter((store) => store.isOpen)
          .map((store) => (
            <StoreCard
              key={store.id}
              name={store.name}
              logoUrl={store.logoUrl}
              rating={store.rating}
              isOpen={store.isOpen}
              deliveryAmount={store.deliveryAmount}
            />
          ))}
      </div>
      <h1 className="text-xl text-primary font-extrabold mt-7">fechados</h1>
      <div className="flex flex-col gap-4 mt-4">
        {stores
          .filter((store) => !store.isOpen)
          .map((store) => (
            <StoreCard
              key={store.id}
              name={store.name}
              logoUrl={store.logoUrl}
              rating={store.rating}
              isOpen={store.isOpen}
              deliveryAmount={store.deliveryAmount}
            />
          ))}
      </div>
    </section>
  );
}
