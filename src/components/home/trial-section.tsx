import Asterisk from '@/components/icons/asterisk';
import { Button } from '@/components/ui/button';
import CentralContainer from '@/components/ui/central-container';
import { PlanDemoDialog } from '@/components/dialogs/plan-demo-dialog';

export default function TrialSection() {
  return (
    <section className="min-h-100/2 py-10 lg:py-20">
      <CentralContainer variant="small">
        <div className="rounded-[24px] bg-[#171b26] px-[24px] py-[40px] text-center lg:px-[80px] lg:pt-[104px] lg:pb-[80px]">
          <h2 className="text-[2.5rem] leading-[2.75rem] font-medium tracking-[-.02em] text-balance text-white lg:text-[5rem] lg:leading-[5.5rem]">
            Testez-nous maintenant
          </h2>
          <p className="mt-2 text-lg text-white lg:text-2xl">
            Les chiffres parleront d&apos;eux-mêmes.
          </p>
          <div className="mt-10 flex justify-center">
            <PlanDemoDialog>
              <Button variant="yellow-hover-white" size="xl">
                Planifiez votre démo
              </Button>
            </PlanDemoDialog>
            <div className="group hidden h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-[#ffce67] p-5 transition-all duration-350 hover:w-[344px] hover:bg-[#ffefc6] xl:flex">
              <div className="hidden w-[280px] shrink-0 px-2 text-left leading-[1.375rem] opacity-0 transition-opacity delay-200 duration-1000 group-hover:block group-hover:opacity-100">
                On parie qu&apos;on va vous surprendre avec au moins une info à
                ce rendez-vous ?
              </div>
              <div className="ml-auto flex shrink-0 items-center justify-center rounded-full transition-all duration-550 group-hover:rotate-60">
                <Asterisk className="h-6 fill-black" />
              </div>
            </div>
          </div>
        </div>
      </CentralContainer>
    </section>
  );
}
