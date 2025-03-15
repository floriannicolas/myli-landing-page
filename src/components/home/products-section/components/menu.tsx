import ToolLottery from '@/components/icons/tool-lottery';
import ToolPresence from '@/components/icons/tool-presence';
import ToolReview from '@/components/icons/tool-review';
import ToolStoreLocator from '@/components/icons/tool-store-locator';
import { cn } from '@/lib/utils';

export default function Menu({ section }: { section: string }) {
  return (
    <div className="lg:mx-none mx-auto flex w-[220px] flex-col items-center justify-center gap-[0.625rem] text-center lg:mr-auto lg:h-full lg:w-[16.5rem] lg:items-start lg:px-8 lg:text-left">
      <div
        className={cn(
          'flex w-full items-center justify-center gap-3 lg:justify-start',
          section !== 'review' && 'hidden lg:flex'
        )}
      >
        <div
          className={cn(
            'flex h-8 w-8 items-center justify-center rounded-full bg-[#ffce67]',
            section !== 'review' && 'opacity-30'
          )}
        >
          <ToolReview className="h-4" />
        </div>
        <div
          className={cn(
            'relative flex-none lg:flex-1',
            section !== 'review' && 'invisible'
          )}
        >
          <div className="text-left text-[1.5rem] font-medium lg:text-sm">
            Myli Review
          </div>
          {section === 'review' && (
            <div className="absolute mt-3 hidden text-sm font-medium lg:block lg:text-xs">
              Collecte et analyse intelligente des avis clients
            </div>
          )}
        </div>
      </div>
      {section === 'review' && (
        <div className="mt-3 block text-sm font-medium lg:hidden lg:text-xs">
          Collecte et analyse intelligente des avis clients
        </div>
      )}
      <div
        className={cn(
          'flex w-full items-center justify-center gap-3 lg:justify-start',
          section !== 'presence' && 'hidden lg:flex'
        )}
      >
        <div
          className={cn(
            'flex h-8 w-8 items-center justify-center rounded-full bg-[#a2cd92]',
            section !== 'presence' && 'opacity-30'
          )}
        >
          <ToolPresence className="h-4" />
        </div>
        <div
          className={cn(
            'relative flex-none lg:flex-1',
            section !== 'presence' && 'invisible'
          )}
        >
          <div className="text-[1.5rem] font-medium lg:text-sm">
            Myli Presence
          </div>
          {section === 'presence' && (
            <div className="absolute mt-3 hidden text-sm font-medium lg:block lg:text-xs">
              Optimisation de vos fiches Google, Apple, Facebook...
            </div>
          )}
        </div>
      </div>
      {section === 'presence' && (
        <div className="mt-3 block text-sm font-medium lg:hidden lg:text-xs">
          Optimisation de vos fiches Google, Apple, Facebook...
        </div>
      )}
      <div
        className={cn(
          'flex w-full items-center justify-center gap-3 lg:justify-start',
          section !== 'seo' && 'hidden lg:flex'
        )}
      >
        <div
          className={cn(
            'flex h-8 w-8 items-center justify-center rounded-full bg-[#afb7f5]',
            section !== 'seo' && 'opacity-30'
          )}
        >
          <ToolStoreLocator className="h-4" />
        </div>
        <div
          className={cn(
            'relative flex-none lg:flex-1',
            section !== 'seo' && 'invisible'
          )}
        >
          <div className="text-[1.5rem] font-medium lg:text-sm">Myli SEO</div>
          {section === 'seo' && (
            <div className="absolute mt-3 hidden text-sm font-medium lg:block lg:text-xs">
              Création de votre Store Locator vraiment optimisé SEO
            </div>
          )}
        </div>
      </div>
      {section === 'seo' && (
        <div className="mt-3 block text-sm font-medium lg:hidden lg:text-xs">
          Création de votre Store Locator vraiment optimisé SEO
        </div>
      )}
      <div
        className={cn(
          'flex w-full items-center justify-center gap-3 lg:justify-start',
          section !== 'lottery' && 'hidden lg:flex'
        )}
      >
        <div
          className={cn(
            'flex h-8 w-8 items-center justify-center rounded-full bg-[#d3b3ea]',
            section !== 'lottery' && 'opacity-30'
          )}
        >
          <ToolLottery className="h-4" />
        </div>
        <div
          className={cn(
            'relative flex-none lg:flex-1',
            section !== 'lottery' && 'invisible'
          )}
        >
          <div className="text-[1.5rem] font-medium lg:text-sm">
            Myli Lottery
          </div>
          {section === 'lottery' && (
            <div className="absolute mt-3 hidden text-sm font-medium lg:block lg:text-xs">
              La gamification en local pour des actions marketing
            </div>
          )}
        </div>
      </div>
      {section === 'lottery' && (
        <div className="mt-3 block text-sm font-medium lg:hidden lg:text-xs">
          La gamification en local pour des actions marketing
        </div>
      )}
    </div>
  );
}
