import Header from '@/components/header';
import Footer from '@/components/footer';
import PageHeader from '@/components/ui/page-header';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col pt-18 lg:pt-28">
      <Header />
      <div>
        <PageHeader>
          <div className="flex flex-col gap-6">
            <h1>Oups, vous êtes perdus.</h1>
            <div className="flex items-center justify-center">
              <Button size="xl" variant="dark-hover-white" asChild>
                <Link href="/">Ramenez moi à l&apos;accueil</Link>
              </Button>
            </div>
          </div>
        </PageHeader>
      </div>
      <Footer />
    </main>
  );
}
