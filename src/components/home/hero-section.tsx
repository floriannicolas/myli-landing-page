import HeroSparkles from '@/components/icons/hero-sparkles';
import Asterisk from '@/components/icons/asterisk';
import { Button } from '@/components/ui/button';
import { PlanDemoDialog } from '@/components/dialogs/plan-demo-dialog';

export default function HeroSection() {
  return (
    <section className="px-4 py-6 text-center lg:min-h-100/2 lg:px-8 lg:py-10 xl:py-15">
      <h1 className="mx-auto text-[2.5rem] leading-[2.75rem] font-medium tracking-[-.02em] text-balance lg:max-w-4xl lg:text-[5rem] lg:leading-[5.5rem]">
        Vos&nbsp;établissements méritent une plateforme à leur mesure.
      </h1>
      <div className="mx-auto mt-6 max-w-lg bg-clip-text text-[1rem] leading-[1.5rem] font-medium tracking-[-.01em] text-balance text-transparent lg:text-[1.5rem] lg:leading-[1.95rem]">
        <p className="bg-[linear-gradient(270deg,#9b59c4_.38%,#8e5dc6_14.35%,#3d77d3_99.82%)] bg-clip-text">
          De l&apos;acquisition à la satisfation client :
        </p>
        <span className="inline-flex flex-col items-center xl:flex-row">
          <span className="bg-[linear-gradient(270deg,#9b59c4_.38%,#8e5dc6_14.35%,#3d77d3_99.82%)] bg-clip-text">
            L&apos;audace comme signature,
          </span>
          <span className="inline-flex items-center bg-[linear-gradient(270deg,#9b59c4_.38%,#8e5dc6_14.35%,#3d77d3_99.82%)] bg-clip-text xl:ml-3">
            <HeroSparkles className="mr-1 inline h-4 lg:mr-2 lg:h-6" />
            l&apos;IA comme force.
          </span>
        </span>
      </div>
      <div className="mt-10 flex items-center justify-center">
        <PlanDemoDialog>
          <Button variant="yellow" size="xl">
            Planifiez votre démo
          </Button>
        </PlanDemoDialog>
        <div className="group hidden h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-[#ffce67] p-5 transition-all duration-350 hover:w-[344px] hover:bg-[#ffefc6] xl:flex">
          <div className="hidden w-[280px] shrink-0 px-2 text-left leading-[1.375rem] opacity-0 transition-opacity delay-200 duration-1000 group-hover:block group-hover:opacity-100">
            On parie qu&apos;on va vous surprendre avec au moins une info à ce
            rendez-vous ?
          </div>
          <div className="ml-auto flex shrink-0 items-center justify-center rounded-full transition-all duration-550 group-hover:rotate-60">
            <Asterisk className="h-6 fill-black" />
          </div>
        </div>
      </div>
    </section>
  );
}
