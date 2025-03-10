import CentralMiniContainer from '@/components/ui/central-mini-container';
import MagicButton from '@/components/ui/magic-button';
import Asterisk from '@/components/icons/asterisk';

export default function TrialSection() {
  return (
    <section className="min-h-100/2 py-10 lg:py-20">
      <CentralMiniContainer className="bg-[#171b26] rounded-[24px] text-center px-[24px] lg:px-[80px] py-[40px] lg:pt-[104px] lg:pb-[80px]">
        <h2 className="text-white text-balance text-[2.5rem] leading-[2.75rem] lg:text-[5rem] lg:leading-[5.5rem] tracking-[-.02em] font-medium">
          Testez-nous maintenant
        </h2>
        <p className="text-white text-lg lg:text-2xl mt-2">
          Les chiffres parleront d&apos;eux-mêmes.
        </p>
        <div className="mt-10 flex justify-center">
          <MagicButton size="big" variant="hover-white">
            Planifiez votre démo
          </MagicButton>
          <div className="hidden xl:flex items-center justify-center p-5 h-16 w-16 justify-center rounded-full overflow-hidden bg-[#ffce67] transition-all duration-350 group hover:w-[344px] hover:bg-[#ffefc6]">
            <div className="text-left w-[280px] px-2 shrink-0 delay-200 duration-1000 opacity-0 leading-[1.375rem] hidden group-hover:block group-hover:opacity-100">
              On parie qu'on va vous surprendre avec au moins une info à ce
              rendez-vous ?
            </div>
            <div className="ml-auto flex items-center shrink-0 justify-center rounded-full">
              <Asterisk className="fill-black h-6" />
            </div>
          </div>
        </div>
      </CentralMiniContainer>
    </section>
  );
}
