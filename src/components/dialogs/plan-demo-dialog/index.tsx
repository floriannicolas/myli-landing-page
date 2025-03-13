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
      <DialogContent variant="ghost" className="max-w-[calc(min(1012px,100vw))]">
        <DialogTitle />
        <DialogDescription />
        <div className="flex items-stretch justify-center flex-col lg:flex-row gap-0 lg:gap-4">
          <div className="bg-white rounded-t-[2rem] lg:rounded-[2rem] p-4 sm:p-6 lg:p-10 lg:w-[418px]">
            <h3 className="font-medium font-medium text-[1.75rem] leading-[2.25rem] lg:text-[2.5rem] lg:leading-[3rem] tracking-[-.01em]">
              Planifions votre démo
            </h3>
            <p className="mt-2">
              <Asterisk className="h-4 mr-1 fill-black inline-flex" />
              On parie qu’on va vous surprendre avec au moins une info à ce
              rendez-vous ?
            </p>
            <div className="mt-4 border border-[#e1e2e9] rounded-[1rem] p-4 lg:p-6">
              <div className="flex items-center">
                <Image
                  alt="Adrien"
                  src="/images/contact/portrait-adrien.webp"
                  width={38}
                  height={38}
                  className="rounded-full border border-white box-content"
                />
                <Image
                  alt="Marylou"
                  src="/images/contact/portrait-marylou.webp"
                  width={38}
                  height={38}
                  className="rounded-full border border-white box-content -ml-3"
                />
                <Image
                  alt="Samuel"
                  src="/images/contact/portrait-samuel.webp"
                  width={38}
                  height={38}
                  className="rounded-full border border-white box-content -ml-3"
                />
              </div>
              <p className="pt-4 leading-[1.375rem]">
                Rencontrez Adrien, Marylou ou Samuel pour une présentation
                personnalisée de nos produits.
              </p>
              <div className="pt-4 flex flex-col gap-2 leading-[1.375rem]">
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
          <div className="bg-white rounded-b-[2rem] lg:rounded-[2rem] p-4 sm:p-6 lg:p-10 pt-0 lg:pt-10 flex-1">
            <PlanDemoForm />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
