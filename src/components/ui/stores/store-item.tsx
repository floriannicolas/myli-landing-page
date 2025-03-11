import { cn } from '@/lib/utils';
import Image from 'next/image';
import { JSX } from 'react';

export default function StoreItem({
  image,
  label,
  type
}: {
  image: string;
  label: JSX.Element;
  type: 'type-1-50' | 'type-50-200' | 'type-200+';
}) {
    const classColorsByType = {
        'type-1-50': 'after:bg-[#ffce67] before:bg-[#ffce67]',
        'type-50-200': 'after:bg-[#a2cd92] before:bg-[#a2cd92]',
        'type-200+': 'after:bg-[#faa96b] before:bg-[#faa96b]',
    }
  return (
    <div className="relative overflow-hidden mx-auto flex items-center justify-center w-[calc(50%-.5rem)] lg:w-[calc(20%-.8rem)] aspect-square rounded-3xl border border-[#e1e2e9] text-center">
      <Image alt="" width={124} height={124} src={image} />
      <div
        className={cn(
          'absolute top-0 left-0 w-full h-full group',
          classColorsByType[type],
          "[&:hover::after]:bg-transparent after:content-[''] after:duration-350 after:transition-transform [&:hover::after]:transition-none",
          'after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-3xl after:translate-y-[-101%] [&:hover::after]:translate-y-0',
          "before:content-[''] before:duration-450 before:transition-none [&:hover::before]:transition-transform",
          'before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-3xl before:translate-y-[101%] [&:hover::before]:translate-y-0'
        )}
      >
        <div
          className={cn(
            'absolute inset-0 flex items-center justify-center px-[.625rem] py-[.625rem] opacity-0 text-balance rounded-3xl leading-5 transition-none duration-350 [.group:hover_&]:delay-100 translate-y-[-5%] [.group:hover_&]:opacity-100 [.group:hover_&]:transition-all [.group:hover_&]:translate-y-0',
          )}
        >
          {label}
        </div>
      </div>
    </div>
  );
}
