import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger
} from '@/components/ui/dialog';
import Asterisk from '@/components/icons/asterisk';
import SmileyHappy from '@/components/icons/monochrome/smiley-happy';
import Clock from '@/components/icons/monochrome/clock';
import { PlanDemoForm } from './components/plan-demo-form';

export function PlanDemoDialog({ children }: { children?: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        variant="ghost"
        className="max-w-[calc(min(1012px,100vw))]"
      >
        <DialogTitle />
        <DialogDescription />
        <div className="flex flex-col items-stretch justify-center gap-0 lg:flex-row lg:gap-4">
          <div className="rounded-t-[2rem] bg-white p-4 sm:p-6 lg:w-[418px] lg:rounded-[2rem] lg:p-10">
            <h3 className="text-[1.75rem] leading-[2.25rem] font-medium tracking-[-.01em] lg:text-[2.5rem] lg:leading-[3rem]">
              Planifions votre démo
            </h3>
            <p className="mt-2">
              <Asterisk className="mr-1 inline-flex h-4 fill-black" />
              On parie qu’on va vous surprendre avec au moins une info à ce
              rendez-vous ?
            </p>
            <div className="mt-4 rounded-[1rem] border border-[#e1e2e9] p-4 lg:p-6">
              <div className="flex items-center">
                <Image
                  alt="Adrien"
                  src="/images/contact/portrait-adrien.webp"
                  width={38}
                  height={38}
                  className="box-content rounded-full border border-white"
                />
                <Image
                  alt="Marylou"
                  src="/images/contact/portrait-marylou.webp"
                  width={38}
                  height={38}
                  className="-ml-3 box-content rounded-full border border-white"
                />
                <Image
                  alt="Samuel"
                  src="/images/contact/portrait-samuel.webp"
                  width={38}
                  height={38}
                  className="-ml-3 box-content rounded-full border border-white"
                />
              </div>
              <p className="pt-4 leading-[1.375rem]">
                Rencontrez Adrien, Marylou ou Samuel pour une présentation
                personnalisée de nos produits.
              </p>
              <div className="flex flex-col gap-2 pt-4 leading-[1.375rem]">
                <div className="flex items-center gap-1">
                  <SmileyHappy />
                  <span>30 minutes en visio-conférence</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock />
                  <span>Un très bon moment</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-b-[2rem] bg-white p-4 pt-0 sm:p-6 lg:rounded-[2rem] lg:p-10 lg:pt-10">
            <PlanDemoForm />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
