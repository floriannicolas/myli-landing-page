import HeroSparkles from '@/components/icons/hero-sparkles';
import MagicButton from '@/components/ui/magic-button';
import Asterisk from '@/components/icons/asterisk';

export default function HeroSection() {
  return (
    <section className="lg:min-h-100/2 px-4 lg:px-8 py-6 lg:py-10 xl:py-15 text-center">
      <h1 className="mx-auto text-balance lg:max-w-4xl text-[2.5rem] leading-[2.75rem] lg:text-[5rem] lg:leading-[5.5rem] tracking-[-.02em] font-medium">
        Vos&nbsp;établissements méritent une plateforme à leur mesure.
      </h1>
      <div className="mt-6 max-w-lg text-balance mx-auto text-[1rem] leading-[1.5rem] lg:text-[1.5rem] lg:leading-[1.95rem] tracking-[-.01em] font-medium bg-clip-text text-transparent">
        <p className="bg-[linear-gradient(270deg,#9b59c4_.38%,#8e5dc6_14.35%,#3d77d3_99.82%)] bg-clip-text">De l&apos;acquisition à la satisfation client :</p>
        <span className="inline-flex items-center flex-col xl:flex-row">
          <span className="bg-[linear-gradient(270deg,#9b59c4_.38%,#8e5dc6_14.35%,#3d77d3_99.82%)] bg-clip-text">
            L&apos;audace comme signature,
          </span>
          <span className="xl:ml-3 inline-flex items-center bg-[linear-gradient(270deg,#9b59c4_.38%,#8e5dc6_14.35%,#3d77d3_99.82%)] bg-clip-text">
            <HeroSparkles className="h-4 lg:h-6 inline mr-1 lg:mr-2" />
            l&apos;IA comme force.
          </span>
        </span>
      </div>
      <div className="mt-10 flex justify-center items-center">
        <MagicButton size="big">Planifiez votre démo</MagicButton>
        <div className="hidden xl:flex items-center justify-center p-5 h-16 w-16 justify-center rounded-full overflow-hidden bg-[#ffce67] transition-all duration-350 group hover:w-[344px] hover:bg-[#ffefc6]">
          <div className="text-left w-[280px] px-2 shrink-0 delay-200 duration-1000 opacity-0 leading-[1.375rem] hidden group-hover:block group-hover:opacity-100">
            On parie qu&apos;on va vous surprendre avec au moins une info à ce rendez-vous ?
          </div>
          <div className="ml-auto flex items-center shrink-0 justify-center transition-all duration-350 group-hover:rotate-60 rounded-full">
            <Asterisk className="fill-black h-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
