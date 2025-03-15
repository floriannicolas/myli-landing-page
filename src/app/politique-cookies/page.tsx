import Link from 'next/link';
import { cn } from '@/lib/utils';
import Header from '@/components/header';
import Footer from '@/components/footer';
import PageHeader from '@/components/ui/page-header';
import CentralContainer from '@/components/ui/central-container';
import ArrowLeft from '@/components/icons/arrow-left';

export default function Page() {
  const thClassName =
    'p-4 text-left font-bold text-base lg:text-lg border border-b-0 border-r-0 border-[#e1e2e9]';
  const tdClassName =
    'p-4 text-left text-base lg:text-lg border border-b-0 border-r-0 border-[#e1e2e9]';

  return (
    <main className="relative flex min-h-screen flex-col pt-18 lg:pt-28">
      <Header />
      <div>
        <PageHeader>
          <h1>Politique des cookies</h1>
        </PageHeader>
        <CentralContainer variant="mini" className="my-8 lg:my-16">
          <Link
            href="/"
            className="group inline-flex items-center gap-1 hover:text-[#464646]"
          >
            <ArrowLeft className="h-4 fill-black group-hover:fill-[#464646]" />
            <span className="font-semibold">Retourner à l’accueil</span>
          </Link>
          <div className="mt-4 lg:mt-10">
            <h2 className="text-[1.75rem] leading-[2.25rem] font-medium tracking-[-.01em] lg:text-[2.5rem] lg:leading-[3rem]">
              Politique des cookies
            </h2>
            <p className="mt-4 lg:mt-6">
              Lorsque vous consultez la plateforme MYLI.IO, des cookies sont
              déposés sur votre ordinateur, votre mobile ou votre tablette. Lors
              de votre première visite sur notre site, un bandeau vous informe
              de la présence de ces cookies et vous invite à indiquer votre
              choix. Les cookies ne sont déposés que si vous les acceptez. Vous
              pouvez à tout moment paramétrer ces cookies en cliquant sur
              l&apos;icône située en bas à gauche. Vous pouvez également refuser
              ces cookies en configurant les paramètres de votre navigateur.
            </p>
            <h2 className="mt-6 text-[1.75rem] leading-[2.25rem] font-medium tracking-[-.01em] lg:text-[2.5rem] lg:leading-[3rem]">
              Qu&apos;est-ce qu&apos;un cookie ?
            </h2>
            <p className="mt-4 lg:mt-6">
              Selon la CNIL, Un cookie est un petit fichier stocké par un
              serveur dans le terminal (ordinateur, téléphone, etc.) d&apos;un
              utilisateur et associé à un domaine web. Ils suivent plusieurs
              objectifs tels qu&apos;à mémoriser votre identifiant client auprès
              d&apos;un site marchand, le contenu courant de votre panier
              d&apos;achat, la langue d&apos;affichage de la page web, un
              identifiant permettant de tracer votre navigation à des fins
              statistiques ou publicitaires etc…
            </p>
            <h2 className="mt-6 text-[1.75rem] leading-[2.25rem] font-medium tracking-[-.01em] lg:text-[2.5rem] lg:leading-[3rem]">
              À quelles fins My Local Influence utilise les cookies ?
            </h2>
            <p className="mt-4 lg:mt-6">
              Nous utilisons des cookies techniques qui sont strictement
              nécessaires au fonctionnement des services du site web myli.io De
              plus, nous utilisons des cookies tiers de mesure d&apos;audience
              destinés à fournir des données statistiques permettant de mesurer
              et d&apos;améliorer les intérêts des utilisateurs sur le site
              internet. Ces cookies sont soumis au consentement de
              l&apos;utilisateur.
            </p>
            <h2 className="mt-6 text-[1.75rem] leading-[2.25rem] font-medium tracking-[-.01em] lg:text-[2.5rem] lg:leading-[3rem]">
              Qu&apos;est ce que les cookies tiers exactement ?
            </h2>
            <div className="mt-4 overflow-x-auto lg:mt-6">
              <div className="w-full min-w-179">
                <table className="relative w-full table-fixed border-separate border-spacing-0 rounded-t-2xl">
                  <thead>
                    <tr>
                      <th className={cn(thClassName, 'rounded-tl-2xl')}>
                        Nom du cookie
                      </th>
                      <th className={thClassName}>Finalité</th>
                      <th
                        className={cn(
                          thClassName,
                          'rounded-tr-2xl',
                          'border-r-1'
                        )}
                      >
                        Durée de conservation
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className={thClassName}>Google Analytics</th>
                      <td className={tdClassName}>Mesure d&apos;audience</td>
                      <td className={cn(tdClassName, 'border-r-1')}>24 mois</td>
                    </tr>
                    <tr>
                      <th className={thClassName}>Facebook Pixel</th>
                      <td className={tdClassName}>
                        Mesure d&apos;audience des publicités Facebook
                      </td>
                      <td className={cn(tdClassName, 'border-r-1')}>24 mois</td>
                    </tr>
                    <tr>
                      <th className={cn(thClassName, 'border-b-1')}>
                        Plausible
                      </th>
                      <td className={cn(tdClassName, 'border-b-1')}>
                        Mesure d&apos;audience
                      </td>
                      <td className={cn(tdClassName, 'border-r-1 border-b-1')}>
                        24 mois
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </CentralContainer>
      </div>
      <Footer />
    </main>
  );
}
