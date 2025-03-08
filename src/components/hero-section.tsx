import HeroSparkles from "@/components/icons/hero-sparkles";
import MagicButton from "@/components/ui/magic-button";

export default function HeroSection() {
  return (
    <section className="lg:min-h-100/2 px-8 py-6 lg:py-10 text-center">
      <h1 className="mx-auto text-balance lg:max-w-3xl text-[2.5rem] leading-[2.75rem] lg:text-[5rem] lg:leading-[5.5rem] tracking-[-.02em] font-medium">
        Vos&nbsp;établissements méritent une plateforme à leur mesure.
      </h1>
      <div className="mt-6 max-w-lg mx-auto text-[1rem] leading-[1.5rem] lg:text-[1.5rem] lg:leading-[1.98rem] tracking-[-.01em] font-medium bg-gradient-to-r from-[#3d77d3] to-[#9b59c4] bg-clip-text text-transparent">
        <p>De l&apos;acquisition à la satisfation client :</p>
        <p>L&apos;audace comme signature,</p>
        <p className="inline-flex items-center">
          <HeroSparkles className="h-4 lg:h-6 inline mr-1 lg:mr-2" />
          l&apos;IA comme force.
        </p>
      </div>
      <div className="mt-10 flex justify-center">
        <MagicButton size="big">
          Planifiez votre démo
        </MagicButton>
      </div>
    </section>
  );
}
