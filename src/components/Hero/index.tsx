import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface HeroProps {
  image: StaticImageData;
}

export default function Hero({ image }: HeroProps) {
  return (
    <section className="w-full">
      <Image src={image} alt="Imagem de fundo" className="w-full" />
    </section>
  );
}
