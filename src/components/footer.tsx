import LogoMyliAnimated from '@/components/icons/logo-myli-animated';
import LogoMyli from '@/components/icons/logo-myli';
import CentralContainer from '@/components/ui/central-container';
import { Button } from '@/components/ui/button';
import Asterisk from '@/components/icons/asterisk';
import Link from 'next/link';
import { PlanDemoDialog } from '@/components/dialogs/plan-demo-dialog';

export default function Footer() {
  return (
    <section className="mt-auto">
      <CentralContainer>
        <footer className="py-6 px-4 mt-4 lg:py-14 lg:px-20 bg-[#f5f6f8] rounded-t-[2rem]">
          <div className="flex flex-col lg:flex-row items-start justify-between">
            <div className="flex lg:flex-col items-center lg:items-start justify-between lg:justify-start gap-6 w-full lg:w-auto">
              <Link href="/" aria-label="Myli" className="lg:overflow-hidden lg:transition-all lg:w-26 lg:hover:w-75">
                <LogoMyliAnimated className='h-8 hidden lg:block' />
                <LogoMyli className='h-8 block lg:hidden' />
              </Link>
              <Button variant="outline" className="ml-auto lg:ml-0" asChild>
                <a href="https://next.myli.io/fr">Se connecter</a>
              </Button>
            </div>
            <div className="flex flex-col justify-end gap-4 mt-12 lg:mt-0">
              <div>Nous contacter :</div>
              <a
                href="https://www.linkedin.com/company/mylocalinfluence/"
                className="font-semibold text-[#171b26] hover:text-[#737373] transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
              <a
                href="tel:0176420579"
                className="font-semibold text-[#171b26] hover:text-[#737373] transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                01 76 42 05 79
              </a>
            </div>
          </div>
          <div className="max-w-md font-medium mt-10 lg:mt-12 text-[2rem] leading-[2.25rem] lg:text-[3rem] lg:leading-[3.25rem] tracking-[-.02em]">
            L&apos;intelligence client nouvelle génération
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mt-6 lg:mt-8">
            <div className="flex justify-center items-center">
              <PlanDemoDialog>
                <Button variant="yellow" size="xl">
                  Planifiez votre démo
                </Button>
              </PlanDemoDialog>
              <div className="hidden xl:flex items-center justify-center p-5 h-16 w-16 justify-center rounded-full overflow-hidden bg-[#ffce67] transition-all duration-350 group hover:w-[344px] hover:bg-[#ffefc6]">
                <div className="text-left w-[280px] px-2 shrink-0 delay-200 transition-opacity duration-1000 opacity-0 leading-[1.375rem] hidden group-hover:block group-hover:opacity-100">
                  On parie qu&apos;on va vous surprendre avec au moins une info
                  à ce rendez-vous ?
                </div>
                <div className="ml-auto flex items-center shrink-0 justify-center rounded-full transition-all duration-550 group-hover:rotate-60">
                  <Asterisk className="fill-black h-6" />
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col lg:flex-row mt-8 lg:mt-0 text-sm font-semibold gap-2 lg:gap-6">
                <span className="text-[#737373]">@Myli 2025</span>
                <Link
                  className="hover:text-[#737373] transition-all"
                  href="/mentions-legales"
                >
                  Mentions légales
                </Link>
                <Link
                  className="hover:text-[#737373] transition-all"
                  href="/politique-de-confidentialite"
                >
                  Politique de confidentialité
                </Link>
                <Link
                  className="hover:text-[#737373] transition-all"
                  href="/politique-cookies"
                >
                  Politique des cookies
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </CentralContainer>
    </section>
  );
}
