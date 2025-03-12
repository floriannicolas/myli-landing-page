import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Header from '@/components/header';
import Footer from '@/components/footer';
import PageHeader from '@/components/ui/page-header';
import CentralContainer from '@/components/ui/central-container';
import ArrowLeft from '@/components/icons/arrow-left';

const disclosures = [
  {
    label: 'Politique de confidentialité',
    content: (
      <>
        La société MY LOCAL INFLUENCE est propriétaire de l&apos;application
        MYLI. Ainsi dès l&apos;accès, la navigation et l&apos;utilisation de nos
        services MY LOCAL INFLUENCE est susceptible de collecter des données
        personnelles. C&apos;est pourquoi nous nous sommes engagés à protéger la
        vie privée de nos utilisateurs et à respecter la confidentialité de
        leurs informations personnelles. Nous garantissons ainsi un niveau
        conforme au ****Règlement (UE) 2016/679 du Parlement Européen et du
        Conseil du 27 avril 2016 dit Règlement général sur la protection des
        données. **** Cette politique de confidentialité décrit comment nous
        collectons, utilisons et partageons les informations que nous
        recueillons. Nous prenons la confidentialité de vos données très au
        sérieux et nous nous engageons à les protéger.
      </>
    )
  },
  {
    label: 'Données personnelles traitées',
    content: (
      <>
        <p>
          <b>
            Données d&apos;identification professionnelle et de la relation
            commerciale
          </b>
          <br />
          Selon les finalités indiquées ci-dessous, le responsable de traitement
          traite les données d&apos;identification suivantes : prénom, nom,
          adresse électronique professionnelle, numéro de téléphone
          professionnel, poste, entreprise, lien vers le profil LinkedIn, moyens
          de paiement, type de service souscrit.
        </p>

        <p>
          <b>Données de prospection commerciale</b>
          <br />
          Selon les finalités indiquées ci-dessous, le responsable de traitement
          traite les données d&apos;identification suivantes : nom, prénom,
          adresse mail professionnelle, numéro de téléphone professionnel,
          intitulé de poste, entreprise.
        </p>

        <p>
          <b>Données d&apos;ordre financier et économique</b>
          <br />
          Suivant les finalités indiquées ci-dessous, le responsable de
          traitement traite les données suivantes : données bancaires, données
          de transaction et de facturation.
        </p>

        <p>
          <b>Données d&apos;authentification</b>
          <br />
          Suivant les finalités indiquées ci-dessous, le responsable de
          traitement traite les données suivantes : identifiant et mot de passe
          des applications nécessaires au fonctionnement des services de Myli.
        </p>

        <p>
          <b>Données de connexion</b>
          <br />
          Suivant les finalités indiquées ci-dessous, le responsable de
          traitement traite les données d&apos;identification suivantes :
          adresse IP et logs.
        </p>

        <p>
          <b>Données de recrutement</b>
          <br />
          Suivant les finalités indiquées ci-dessous, le responsable de
          traitement traite les données d&apos;identification suivantes : CV,
          lettre de motivation.
        </p>

        <p>
          <b>Données de contact</b>
          <br />
          Suivant les finalités indiquées ci-dessous, le responsable de
          traitement traite les données de contact suivantes: Nom de
          l&apos;entreprise, Nom, Email, téléphone, contenu du message.
        </p>

        <p>
          <b>Données issue des visioconférences</b>
          <br />
          Suivant les finalités indiquées ci-dessous, le responsable de
          traitement traite les données de contact suivantes: Nom, prénom, voix,
          image, contenu de l&apos;échange.
        </p>
      </>
    )
  },
  {
    label: 'Durée de conservation des données',
    content: (
      <ul>
        <li>
          Les données d&apos;identification sont conservées pendant toute la
          durée contractuelle. Toutefois, certains documents sont nécessaires
          pour répondre à des obligations légales qui suivent une durée de 5 ans
          (par exemple : contrats).
        </li>
        <li>
          Les données de prospection commerciale sont conservées pendant une
          durée de 3 ans après le dernier contact avec le prospect.
        </li>
        <li>
          Les données d&apos;ordre financier et économique sont conservées
          pendant toute la durée contractuelle puis suivent un archivage
          intermédiaire suivant les délais de prescription légaux de 10 ans
          nécessaires à l&apos;exercice comptable.
        </li>
        <li>
          Les données d&apos;authentification sont conservées pendant toute la
          durée de la relation contractuelle.
        </li>
        <li>
          Les données de connexion sont conservées pendant une durée d&apos;un
          an.
        </li>
        <li>
          Les données de recrutement sont conservées pendant deux ans. Si le
          candidat ne correspond pas aux attentes et profils de
          l&apos;entreprise, il y a une destruction immédiate.
        </li>
        <li>
          Les données de contact sont conservées pendant 12 mois suivant la
          demande.
        </li>
        <li>
          Les données issue des visioconférences sont conservées pendant une
          durée de 6 mois sauf retrait du consentement du client.
        </li>
      </ul>
    )
  },
  {
    label: 'Finalité du traitement',
    content: (
      <>
        <p>
          Les données personnelles indiquées ci-dessus seront traitées pour les
          finalités suivantes :
        </p>
        <ol>
          <li>Gestion de la relation commerciale</li>
          <li>Accéder au service et application MYLI</li>
          <li>Fournir un service client</li>
          <li>Gestion des recrutements</li>
          <li>Gestion de la prospection commerciale B TO B</li>
          <li>Contacter les utilisateurs qui en font la demande.</li>
          <li>Gestion des visioconférences et formation du personnel MYLI</li>
        </ol>
      </>
    )
  },
  {
    label: 'Base légale du traitement',
    content: (
      <>
        <p>
          Pour les finalités numéro 1, 2, 3: Aux termes de l&apos;article 6 1.
          b) “le traitement est nécessaire à l&apos;exécution d&apos;un contrat
          auquel la personne concernée est partie”.
        </p>
        <p>
          Pour les finalités 4, 5, 6 : Aux termes de l&apos;article 6 point f)
          du RGPD, le traitement « est nécessaire aux fins des intérêts
          légitimes poursuivis par le responsable du traitement ou par un tiers,
          à moins que ne prévalent les intérêts ou les libertés et droits
          fondamentaux de la personne concernée qui exigent une protection des
          données à caractère personnel.
        </p>
        <p>
          Pour la finalité 7: Aux termes de l&apos;article 6 1. a) la personne
          concernée a consenti au traitement de ses données à caractère
          personnel pour une ou plusieurs finalités spécifiques.
        </p>
        <p>
          Pour la conservation de votre CV, MYLI vous demandera votre
          consentement.
        </p>
      </>
    )
  },
  {
    label: 'Destinataires du traitement',
    content: (
      <p>
        Les Données Personnelles peuvent être communiquées au personnel et
        fournisseurs de MYLI. Les fournisseurs de MYLI sont autorisés à traiter
        les Données Personnelles du Client uniquement sur instructions de MYLI.
        Les Données Personnelles font l&apos;objet d&apos;un traitement
        informatique et sont conservées par MYLI pour les seules finalités ci
        dessous . MYLI s&apos;engage à ne pas les utiliser dans un autre cadre,
        ni à les transmettre à des tiers, en dehors de ses fournisseurs, sauf
        cas autorisés par la loi, ou accord exprès du Client, de
        l&apos;utilisateur ou du Prospect.
      </p>
    )
  },
  {
    label: 'Nos mesures de sécurité',
    content: (
      <p>
        MY LOCAL INFLUENCE s&apos;engage à prendre toutes les mesures
        nécessaires pour garantir la sécurité de vos informations. Des mesures
        techniques, physiques et organisationnelles sont mises en place pour
        prévenir tout accès non autorisé, toute utilisation abusive ou toute
        divulgation de vos données personnelles. Nous utilisons des protocoles
        de sécurité avancés pour protéger vos informations, telles que des
        pare-feu, des logiciels antivirus, des règles de sécurité strictes. De
        plus, nous formons régulièrement notre personnel à la sécurité des
        données et nous nous engageons à respecter les normes de sécurité en
        vigueur pour garantir la confidentialité de vos données personnelles.
      </p>
    )
  },
  {
    label: 'Transfert de données hors Union Européenne',
    content: (
      <>
        <p>
          Nous vous informons que vos données à caractère personnel peuvent être
          transférées en dehors de l&apos;union Européenne. En effet, certains
          de nos sous-traitants sont situés en dehors de l&apos;union
          Européenne, notamment aux États-Unis.
        </p>

        <p>
          Cependant, nous prenons toutes les mesures nécessaires pour assurer la
          sécurité de ces transferts. Premièrement, nous veillons à ce que nos
          sous-traitants se situe dans des pays qui offre un niveau de
          protection adéquat reconnu par l&apos;uE. Si ce n&apos;est pas le cas
          MYLI met en des outils permettant d&apos;encadrer le transfert,
          notamment des clauses contractuelle types adoptées par la Commission
          européenne.
        </p>

        <p>
          Nous nous engageons à ne pas transférer vos données à caractère
          personnel à un sous-traitant situé dans un pays tiers ne garantissant
          pas un niveau de protection suffisant, à moins que des garanties
          appropriées ne soient fournies.
        </p>

        <p>
          Pour plus d&apos;informations sur les transferts de données à
          caractère personnel en dehors de l&apos;union Européenne, vous pouvez
          nous contacter.
        </p>
      </>
    )
  },
  {
    label: 'Exercice des droits de la personne concernée',
    content: (
      <>
        <p>
          En application de la loi « informatique et libertés » du 6 janvier
          1978 modifiée et au Règlement 2016/679/UE du 27 avril 2016, les
          participants disposent des droits suivants, dans les conditions
          prévues par la règlementation :
        </p>
        <ul>
          <li>
            Un droit d&apos;accès aux données (savoir si un traitement de
            données est réalisé et si oui, des informations sur ce traitement et
            la copie des données traitées) et de rectification en cas de données
            inexactes ;
          </li>
          <li>
            Un droit à l&apos;effacement des données (« droit à l&apos;oubli »)
            sauf lorsque le traitement est nécessaire pour le respect d&apos;une
            obligation légale ou l&apos;exercice de droits en justice et un
            droit à la limitation du traitement dans les cas prévus par la
            réglementation en vigueur ;
          </li>
          <li>Le droit de retirer son consentement ;</li>
          <li>Le droit à la portabilité des données brutes fournies ;</li>
          <li>
            Le droit de définir des directives relatives au sort de ses données
            à caractère personnel après sa mort ;
          </li>
          <li>
            Le droit d&apos;introduire une réclamation auprès de l&apos;autorité
            compétente (notamment la CNIL en France) ;
          </li>
          <li>Le droit d&apos;opposition au traitement des données.</li>
        </ul>
        <p>
          Les utilisateurs peuvent exercer leurs droits en matière de données
          personnelles en nous contactant à l&apos;adresse électronique suivante
          : rgpd@myli.io
        </p>
      </>
    )
  },
  {
    label: "Mise à jour de la notice d'information",
    content: (
      <>
        <p>
          Nous nous réservons le droit de modifier cette Politique de
          confidentialité à tout moment. En cas de modification, nous
          informerons les utilisateurs des changements apportés et mettrons à
          jour la date de dernière révision figurant en bas de la présente
          Politique de confidentialité.
        </p>

        <p>Date de modification: 29/06/2023</p>

        <p>
          En tant que prestataire de services, MY LOCAL INFLUENCE peut agir en
          tant que sous-traitant pour ses clients. Dans le cadre de cette
          relation, nous sommes amenés à collecter des données pour le compte de
          nos clients afin de fournir les prestations souscrites. Nous nous
          engageons à ne traiter ces données qu&apos;en conformité avec les
          instructions que nous recevons de nos clients, et à prendre toutes les
          mesures nécessaires pour garantir leur sécurité et leur
          confidentialité.
        </p>

        <p>
          Si vous souhaitez obtenir des informations ou exercer vos droits en
          relation avec nos services, nous vous invitons à contacter directement
          nos clients. Ils seront en mesure de vous fournir toutes les
          informations nécessaires à cet égard et de vous aider à exercer vos
          droits en toute simplicité. Nous restons bien entendu à votre
          disposition pour répondre à toute question que vous pourriez avoir
          concernant notre prestation de services.
        </p>
      </>
    )
  }
];

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
          <Link
            href="/"
            className="inline-flex gap-1 items-center group hover:text-[#464646]"
          >
            <ArrowLeft className="h-4 fill-black group-hover:fill-[#464646]" />
            <span className="font-semibold">Retourner à l’accueil</span>
          </Link>
          <div className="mt-4 lg:mt-10">
            <h2 className="text-[2rem] leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3rem] tracking-[-.01em]">
              Synthèse de la politique de confidentialité
            </h2>
            <p className="mt-4 lg:mt-6">
              Voici une synthèse de la politique de confidentialité. Pour
              obtenir plus d&apos;informations sur le traitement de vos données,
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
                        Données d&apos;identification professionnelle
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
                        Données d&apos;ordre financier et économique
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
                        Données d&apos;authentification
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
                        d&apos;intérêt
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
              3. Notre démarche de transparence et d&apos;éthique repose sur une
              collecte respectueuse des consommateurs, en adéquation avec la
              finalité déterminée.
            </div>
            <h2 className="my-8 lg:my-16 text-[2rem] leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3rem] tracking-[-.01em]">
              Politique de confidentialité
            </h2>
            <Accordion type="multiple" className="w-full">
              {disclosures.map((disclosure) => (
                <AccordionItem key={disclosure.label} value={disclosure.label}>
                  <AccordionTrigger>{disclosure.label}</AccordionTrigger>
                  <AccordionContent>{disclosure.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </CentralContainer>
      </div>
      <Footer />
    </main>
  );
}
