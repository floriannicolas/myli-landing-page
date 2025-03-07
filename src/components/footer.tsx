import LogoMyli from "@/components/icons/logo-myli";
import CentralContainer from "@/components/ui/central-container";
import MagicButton from "@/components/ui/magic-button";

export default function Footer() {
  return (
    <section>
      <CentralContainer>
        <footer className="py-6 px-4 lg:py-14 lg:px-20 bg-[#f5f6f8] rounded-t-[2rem]">
          <div className="flex flex-col lg:flex-row items-start justify-between">
            <div className="flex lg:flex-col items-center justify-between lg:justify-start gap-6 w-full lg:w-auto">
              <LogoMyli className="h-8" />
              <a
                className="ml-auto rounded-full bg-transparent border border-[#e1e2e9] py-2 px-4 font-semibold text-sm hover:bg-[#171b26] hover:text-white transition-all"
                href="/login"
              >
                Se connecter
              </a>
            </div>
            <div className="flex flex-col justify-end gap-4 mt-12 lg:mt-0">
              <div>Nous contacter :</div>
              <a
                href="#"
                className="font-semibold text-[#171b26] hover:text-[#737373] transition-all"
              >
                Linkedin
              </a>
              <a
                href="#"
                className="font-semibold text-[#171b26] hover:text-[#737373] transition-all"
              >
                01 76 42 05 79
              </a>
            </div>
          </div>
          <div className="max-w-md font-medium mt-10 lg:mt-12 text-[2rem] leading-[2.25rem] lg:text-[3rem] lg:leading-[3.25rem] tracking-[-.02em]">
            L&apos;intelligence client nouvelle génération
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mt-6 lg:mt-8">
            <div>
              <MagicButton size="big">
                Planifier votre démo
              </MagicButton>
            </div>
            <div>
              <div className="flex flex-col lg:flex-row mt-8 lg:mt-0 text-sm font-semibold gap-2 lg:gap-6">
                <span className="text-[#737373]">@Myli 2025</span>
                <a
                  className="hover:text-[#737373] transition-all"
                  href="/mentions-legales"
                >
                  Mentions légales
                </a>
                <a
                  className="hover:text-[#737373] transition-all"
                  href="/politique-de-confidentialite"
                >
                  Politique de confidentialité
                </a>
                <a
                  className="hover:text-[#737373] transition-all"
                  href="/politique-cookies"
                >
                  Politique des cookies
                </a>
              </div>
            </div>
          </div>
        </footer>
      </CentralContainer>
    </section>
  );
}
