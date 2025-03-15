import { cn } from '@/lib/utils';
import Image from 'next/image';
import { JSX } from 'react';

export type Store = {
  label: string;
  description: JSX.Element;
  image: string;
};
export type StoreType = '1-50' | '50-200' | '200+';

export default function StoreBlock({
  store,
  type
}: {
  store: Store;
  type: StoreType;
}) {
  const classColorsByType: Record<StoreType, string> = {
    '1-50': 'after:bg-[#ffce67] before:bg-[#ffce67]',
    '50-200': 'after:bg-[#a2cd92] before:bg-[#a2cd92]',
    '200+': 'after:bg-[#faa96b] before:bg-[#faa96b]'
  };
  return (
    <div className="relative mx-auto flex aspect-square w-[calc(50%-.5rem)] items-center justify-center overflow-hidden rounded-3xl border border-[#e1e2e9] text-center lg:w-[calc(20%-.8rem)]">
      <Image alt={store.label} width={124} height={124} src={store.image} />
      <div
        className={cn(
          'group absolute top-0 left-0 h-full w-full',
          classColorsByType[type],
          "after:transition-transform after:duration-350 after:content-[''] [&:hover::after]:bg-transparent [&:hover::after]:transition-none",
          'after:absolute after:top-0 after:left-0 after:h-full after:w-full after:translate-y-[-101%] after:rounded-3xl [&:hover::after]:translate-y-0',
          "before:transition-none before:duration-450 before:content-[''] [&:hover::before]:transition-transform",
          'before:absolute before:top-0 before:left-0 before:h-full before:w-full before:translate-y-[101%] before:rounded-3xl [&:hover::before]:translate-y-0'
        )}
      >
        <div
          className={cn(
            'absolute inset-0 flex translate-y-[-5%] items-center justify-center rounded-3xl px-[.625rem] py-[.625rem] leading-5 text-balance opacity-0 transition-none duration-350 [.group:hover_&]:translate-y-0 [.group:hover_&]:opacity-100 [.group:hover_&]:transition-all [.group:hover_&]:delay-100'
          )}
        >
          {store.description}
        </div>
      </div>
    </div>
  );
}
