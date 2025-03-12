import Header from '@/components/header';
import Footer from '@/components/footer';
import PageHeader from '@/components/ui/page-header';
import CentralContainer from '@/components/ui/central-container';
import Link from 'next/link';
import ArrowLeft from '@/components/icons/arrow-left';
import { cn } from '@/lib/utils';

export default function Page() {
  const thClassName =
    'p-4 text-left font-bold text-base lg:text-lg border border-b-0 border-r-0 border-[#e1e2e9]';
  const tdClassName =
    'p-4 text-left text-base lg:text-lg border border-b-0 border-r-0 border-[#e1e2e9]';

  return (
    <main className="min-h-screen relative pt-18 lg:pt-28 flex flex-col">
      <Header />
      <div>
        <PageHeader>
          <h1>Politique de confidentialité</h1>
        </PageHeader>
        <CentralContainer variant="mini" className="my-8 lg:my-16">
          <Link href="/" className="inline-flex gap-1 items-center">
            <ArrowLeft className="h-4 fill-black" />
            <span className="font-semibold">Retourner à l’accueil</span>
          </Link>
          <div className="mt-4 lg:mt-10">
            <h2 className="text-[2.5rem] leading-[3rem] tracking-[-.01em]">
              Synthèse de la politique de confidentialité
            </h2>
            <p className="mt-4 lg:mt-6">
              Voici une synthèse de la politique de confidentialité. Pour
              obtenir plus d'informations sur le traitement de vos données,
              veuillez consulter le document disponible ci-dessous.
            </p>
            <div className="overflow-x-auto mt-4 lg:mt-6">
              <div className="min-w-179 w-full">
                <table className="relative w-full border-separate border-spacing-0 table-fixed rounded-t-2xl">
                  <thead>
                    <tr>
                      <th className={cn(thClassName, 'rounded-tl-2xl')}>
                        Données personnelles collectées
                      </th>
                      <th className={thClassName}>
                        Fondement légal du traitement
                      </th>
                      <th className={thClassName}>Finalité du traitement</th>
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
                      <th className={thClassName}>
                        Données d'identification professionnelle
                      </th>
                      <td className={tdClassName}>Obligation contractuelle</td>
                      <td className={tdClassName}>
                        Gestion de la relation commerciale, Fournir un service
                        client, gestion des contrats
                      </td>
                      <td className={cn(tdClassName, 'border-r-1')}>
                        Durée de la relation contractuelle puis archivage
                        intermédiaire de 5 ans
                      </td>
                    </tr>
                    <tr>
                      <th className={thClassName}>
                        Données de prospection commerciale
                      </th>
                      <td className={tdClassName}>Intérêt légitime</td>
                      <td className={tdClassName}>
                        Gestion de la prospection B TO B
                      </td>
                      <td className={cn(tdClassName, 'border-r-1')}>
                        Durée de 3 ans après le dernier contact avec le prospect
                      </td>
                    </tr>
                    <tr>
                      <th className={thClassName}>
                        Données d'ordre financier et économique
                      </th>
                      <td className={tdClassName}>Obligation contractuelle</td>
                      <td className={tdClassName}>
                        Gestion de la comptabilité
                      </td>
                      <td className={cn(tdClassName, 'border-r-1')}>
                        Durée de la relation contractuelle puis archivage
                        intermédiaire de 10 ans
                      </td>
                    </tr>
                    <tr>
                      <th className={thClassName}>
                        Données d'authentification
                      </th>
                      <td className={tdClassName}>Obligation contractuelle</td>
                      <td className={tdClassName}>
                        Accéder aux services et application MYLI
                      </td>
                      <td className={cn(tdClassName, 'border-r-1')}>
                        Durée de la relation contractuelle
                      </td>
                    </tr>
                    <tr>
                      <th className={thClassName}>Données de recrutement</th>
                      <td className={tdClassName}>
                        Intérêt légitime/ Consentement
                      </td>
                      <td className={tdClassName}>Gestion des recrutements</td>
                      <td className={cn(tdClassName, 'border-r-1')}>
                        Durée de deux ans/ destruction immédiate si pas
                        d'intérêt
                      </td>
                    </tr>
                    <tr>
                      <th className={thClassName}>Données de contact</th>
                      <td className={tdClassName}>Intérêt légitime</td>
                      <td className={tdClassName}>
                        Contacter les utilisateurs qui en font la demande
                      </td>
                      <td className={cn(tdClassName, 'border-r-1')}>
                        Durée de 12 mois après la demande de contact
                      </td>
                    </tr>
                    <tr>
                      <th className={cn(thClassName, 'border-b-1')}>
                        Données issue des visioconférences
                      </th>
                      <td className={cn(tdClassName, 'border-b-1')}>
                        Consentement
                      </td>
                      <td className={cn(tdClassName, 'border-b-1')}>
                        Gestion des visioconférences et former les équipes MYLI
                      </td>
                      <td className={cn(tdClassName, 'border-r-1 border-b-1')}>
                        Durée de 6 mois ou retrait du consentement du client.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-4 lg:mt-6 text-right text-[#737373] text-xs">
              1. Vos données personnelles sont en sécurité et protégées.
              <br />
              2. Vous gardez le contrôle de vos données et bénéficiez de vos
              droits dessus.
              <br />
              3. Notre démarche de transparence et d'éthique repose sur une
              collecte respectueuse des consommateurs, en adéquation avec la
              finalité déterminée.
            </div>
            <h2 className="pt-8 lg:pt-16 text-[2.5rem] leading-[3rem] tracking-[-.01em]">
              Politique de confidentialité
            </h2>
          </div>
        </CentralContainer>
      </div>
      <Footer />
    </main>
  );
}
