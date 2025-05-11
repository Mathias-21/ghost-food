'use client';

import { useForm } from 'react-hook-form';
import SearchIcon from '@/assets/icons/SearchIcon';
import BackgoundDiaDasCriancas from '@/assets/images/background-dia-das-criancas.png';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StoresList from '@/components/StoresList';
import Footer from '@/components/Footer';
import InputControlled from '@/components/form/Input';

export default function Home() {
  const { control } = useForm();

  return (
    <div>
      <Header>
        <InputControlled
          name="search-store"
          control={control}
          placeholder="busque pela loja ou culinária"
          icon={<SearchIcon />}
        />
      </Header>
      <Hero image={BackgoundDiaDasCriancas} />
      <StoresList />
      <Footer />
    </div>
  );
}
