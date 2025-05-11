import AccountIcon from '@/assets/icons/AccountIcon';
import LocationIcon from '@/assets/icons/LocationIcon';
import Logo from '@/assets/icons/Logo';
import React, { ReactNode } from 'react';

interface HeaderProps {
  children?: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="flex flex-col gap-3 bg-primary p-4 border-b border-white">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-8">
          <Logo />
          <div className="flex items-center gap-3">
            <LocationIcon />
            <div>
              <p className="text-font-tertiary">entregando em</p>
              <span className="text-font-secondary">Rua Mandaguari, 198</span>
            </div>
          </div>
        </div>
        <span className="p-3 -mr-3">
          <AccountIcon />
        </span>
      </div>
      {children}
    </header>
  );
}
