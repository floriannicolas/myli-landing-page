import Header from '@/components/header';
import Footer from '@/components/footer';
import PageHeader from '@/components/ui/page-header';
import Link from 'next/link';
import MagicButton from '@/components/ui/magic-button';

export default function NotFound() {
  return (
    <main className="min-h-screen relative pt-18 lg:pt-28 flex flex-col">
      <Header />
      <div>
        <PageHeader>
          <div className="flex flex-col gap-6">
            <h1>Oups, vous êtes perdus.</h1>
            <div className="flex items-center justify-center">
              <MagicButton size="big" variant="dark" asChild>
                <Link href="/">Ramenez moi à l&apos;accueil</Link>
              </MagicButton>
            </div>
          </div>
        </PageHeader>
      </div>
      <Footer />
    </main>
  );
}
