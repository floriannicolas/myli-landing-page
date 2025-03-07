import CentralMiniContainer from "@/components/ui/central-mini-container";
import MagicButton from "@/components/ui/magic-button";

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
            Planifier votre démo
          </MagicButton>
        </div>
      </CentralMiniContainer>
    </section>
  );
}
