import Header from '@/components/header';
import Footer from '@/components/footer';
import PageHeader from '@/components/ui/page-header';
import CentralContainer from '@/components/ui/central-container';
import Link from 'next/link';
import ArrowLeft from '@/components/icons/arrow-left';

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col pt-18 lg:pt-28">
      <Header />
      <div>
        <PageHeader>
          <h1>Mentions légales</h1>
        </PageHeader>
        <CentralContainer variant="mini" className="my-8 lg:my-16">
          <Link
            href="/"
            className="group inline-flex items-center gap-1 hover:text-[#464646]"
          >
            <ArrowLeft className="h-4 fill-black group-hover:fill-[#464646]" />
            <span className="font-semibold">Retourner à l’accueil</span>
          </Link>
          <div className="mt-4 flex flex-col gap-4 text-base lg:mt-10 lg:gap-6 lg:text-2xl">
            <p>
              <b className="font-semibold">Nom de la société : </b>
              <span>My Local Influence</span>
            </p>
            <p>
              <b className="font-semibold">Siège social : </b>
              <span>38 rue de la république 13001 Marseille</span>
            </p>
            <p>
              <b className="font-semibold">Numéro de téléphone : </b>
              <span>
                <a
                  className="text-[#3d77d3] transition-all hover:text-[#70a6fe]"
                  href="tel:0176420579"
                >
                  01 76 42 05 79
                </a>
              </span>
            </p>
            <p>
              <b className="font-semibold">Email : </b>
              <span>
                <a
                  className="text-[#3d77d3] transition-all hover:text-[#70a6fe]"
                  href="mailto:support@myli.io"
                >
                  support@myli.io
                </a>
              </span>
            </p>
            <p>
              <b className="font-semibold">
                Numéro d&apos;immatriculation au RCS :{' '}
              </b>
              <span>Marseille B 822 948 949</span>
            </p>
            <p>
              <b className="font-semibold">Numéro SIREN : </b>
              <span>822948949</span>
            </p>
            <p>
              <b className="font-semibold">Capital social : </b>
              <span>10 500,00 €</span>
            </p>
            <p>
              <b className="font-semibold">
                Numéro de TVA intracommunautaire :{' '}
              </b>
              <span>FR46822948949</span>
            </p>
            <p>
              <b className="font-semibold">Directeur de la publication : </b>
              <span>Adrien GIBAULT</span>
            </p>
            <p>
              <b className="font-semibold">Hébergeur : </b>
              <span>
                Vercel Inc. 440 N Barranca Ave #4133, Covina, CA 91723, USA
              </span>
            </p>
          </div>
        </CentralContainer>
      </div>
      <Footer />
    </main>
  );
}
