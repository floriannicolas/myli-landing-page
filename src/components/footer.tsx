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
        <footer className="mt-4 rounded-t-[2rem] bg-[#f5f6f8] px-4 py-6 lg:px-20 lg:py-14">
          <div className="flex flex-col items-start justify-between lg:flex-row">
            <div className="flex w-full items-center justify-between gap-6 lg:w-auto lg:flex-col lg:items-start lg:justify-start">
              <Link
                href="/"
                aria-label="Myli"
                className="lg:w-26 lg:overflow-hidden lg:transition-all lg:hover:w-75"
              >
                <LogoMyliAnimated className="hidden h-8 lg:block" />
                <LogoMyli className="block h-8 lg:hidden" />
              </Link>
              <Button variant="outline" className="ml-auto lg:ml-0" asChild>
                <a href="https://next.myli.io/fr">Se connecter</a>
              </Button>
            </div>
            <div className="mt-12 flex flex-col justify-end gap-4 lg:mt-0">
              <div>Nous contacter :</div>
              <a
                href="https://www.linkedin.com/company/mylocalinfluence/"
                className="font-semibold text-[#171b26] transition-all hover:text-[#737373]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
              <a
                href="tel:0176420579"
                className="font-semibold text-[#171b26] transition-all hover:text-[#737373]"
                target="_blank"
                rel="noopener noreferrer"
              >
                01 76 42 05 79
              </a>
            </div>
          </div>
          <div className="mt-10 max-w-md text-[2rem] leading-[2.25rem] font-medium tracking-[-.02em] lg:mt-12 lg:text-[3rem] lg:leading-[3.25rem]">
            L&apos;intelligence client nouvelle génération
          </div>
          <div className="mt-6 flex flex-col items-start justify-between lg:mt-8 lg:flex-row lg:items-end">
            <div className="flex items-center justify-center">
              <PlanDemoDialog>
                <Button variant="yellow" size="xl">
                  Planifiez votre démo
                </Button>
              </PlanDemoDialog>
              <div className="group hidden h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-[#ffce67] p-5 transition-all duration-350 hover:w-[344px] hover:bg-[#ffefc6] xl:flex">
                <div className="hidden w-[280px] shrink-0 px-2 text-left leading-[1.375rem] opacity-0 transition-opacity delay-200 duration-1000 group-hover:block group-hover:opacity-100">
                  On parie qu&apos;on va vous surprendre avec au moins une info
                  à ce rendez-vous ?
                </div>
                <div className="ml-auto flex shrink-0 items-center justify-center rounded-full transition-all duration-550 group-hover:rotate-60">
                  <Asterisk className="h-6 fill-black" />
                </div>
              </div>
            </div>
            <div>
              <div className="mt-8 flex flex-col gap-2 text-sm font-semibold lg:mt-0 lg:flex-row lg:gap-6">
                <span className="text-[#737373]">@Myli 2025</span>
                <Link
                  className="transition-all hover:text-[#737373]"
                  href="/mentions-legales"
                >
                  Mentions légales
                </Link>
                <Link
                  className="transition-all hover:text-[#737373]"
                  href="/politique-de-confidentialite"
                >
                  Politique de confidentialité
                </Link>
                <Link
                  className="transition-all hover:text-[#737373]"
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
