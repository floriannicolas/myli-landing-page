'use client';

import { DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export default function PlanDemoSubmitSuccess() {
  return (
    <div className="flex min-h-full flex-col">
      <h3 className="text-[1.75rem] leading-[2.25rem] font-medium tracking-[-.01em] lg:text-[2.5rem] lg:leading-[3rem]">
        Demande envoyée
      </h3>
      <p className="mt-2">
        Nous vous recontacterons très vite pour planifier votre démo.
      </p>
      <div className="mt-auto pt-6">
        <DialogClose asChild>
          <Button size="lg" className="w-full lg:w-auto">
            Continuer à naviguer
          </Button>
        </DialogClose>
      </div>
    </div>
  );
}
