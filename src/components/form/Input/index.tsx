import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import React, { InputHTMLAttributes, ReactNode } from 'react';
import { Control, Controller } from 'react-hook-form';

interface InputControlledProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control;
  icon?: ReactNode;
}

export default function InputControlled({
  name,
  control,
  icon,
  ...props
}: InputControlledProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { name, onChange } }) => (
        <div className="flex items-center w-full">
          {icon && <span className="ml-3 -mr-7 z-10">{icon}</span>}
          <Input
            name={name}
            onChange={onChange}
            {...props}
            className={cn('', icon && 'pl-9 -mr-7')}
          />
        </div>
      )}
    />
  );
}
