'use client';

import { JSX, useState } from 'react';
import { cn } from '@/lib/utils';
import Asterisk from '@/components/icons/asterisk';
import CentralContainer from '@/components/ui/central-container';

import StoreBlock, { Store, StoreType } from './components/store-block';

const stores: Record<StoreType, Store[]> = {
  '1-50': [
    {
      image: '/images/clients/logos/logo-bocuse.webp',
      label: 'Logo The Bocuse Restaurant',
      description: (
        <>
          Depuis 2018
          <br />
          Le restaurant de Mr Paul !
        </>
      )
    },
    {
      image: '/images/clients/logos/logo-trampoline-park.webp',
      label: 'Logo Trampoline Park You Jump!',
      description: (
        <>
          Depuis 2016
          <br />
          De FeelSport à Youjump - Du challenge et de la confiance !
        </>
      )
    },
    {
      image: '/images/clients/logos/logo-black&white.webp',
      label: 'Logo Black & White',
      description: (
        <>
          Connu via Pokawa
          <br />
          Reconnu grâce à nos résultats
        </>
      )
    },
    {
      image: '/images/clients/logos/logo-pny.webp',
      label: 'Logo PNY',
      description: (
        <>
          2020-22 : Début de l&apos;histoire
          <br />
          2024 : Les retrouvailles après un essai chez un confrère.
        </>
      )
    }
  ],
  '50-200': [
    {
      image: '/images/clients/logos/logo-pokawa.webp',
      label: 'Logo Pokawa',
      description: (
        <>
          2020 : 29 restaurants
          <br />
          2025 : 128 restaurants
          <br />
          (On grandit ensemble 😌)
        </>
      )
    },
    {
      image: '/images/clients/logos/logo-laboucherie.webp',
      label: 'Logo La Boucherie',
      description: (
        <>
          Depuis 2020
          <br />
          Bienveillance, Challenge, Fidélité… comme tous nos clients à Angers !
        </>
      )
    },
    {
      image: '/images/clients/logos/logo-b&m.webp',
      label: 'Logo B&M',
      description: (
        <>
          135 magasins
          <br />
          Une confiance basée sur du concret
        </>
      )
    },
    {
      image: '/images/clients/logos/logo-pizzacosy.webp',
      label: 'Logo Pizza Cozy',
      description: (
        <>
          2018 : 15 pizzerias et 1 produit Myli
          <br />
          2025 : 73 pizzerias et 4 produits Myli
        </>
      )
    }
  ],
  '200+': [
    {
      image: '/images/clients/logos/logo-groupe-bertrand.webp',
      label: 'Logo Groupe Bertrand',
      description: (
        <>
          2017 : Pitaya 10 restos
          <br />
          2019 : Le paradis du fruit
          <br />
          2020 : Groupe Kamel Boulhadid
        </>
      )
    },
    {
      image: '/images/clients/logos/logo-adecco.webp',
      label: 'Logo Addecco',
      description: (
        <>
          Écartés en 2021, Précieux aujourd&apos;hui. 98% des avis ont une
          réponse grâce à Myli et aux équipes Adecco.
        </>
      )
    },
    {
      image: '/images/clients/logos/logo-amorino.webp',
      label: 'Logo Amorino',
      description: (
        <>
          270 boutiques
          <br />
          Un plaisir de valoriser l’image de leur Gelato dans 18 pays.
        </>
      )
    },
    {
      image: '/images/clients/logos/logo-monceau-fleurs.webp',
      label: 'Logo Monceau Fleurs',
      description: (
        <>
          211 fleuristes et 2 produits déployés avec des résultats bien visibles
          ☺️
        </>
      )
    }
  ]
};

export default function StoresSection() {
  const [currentStoreType, setCurrentStoreType] = useState<StoreType>('50-200');

  const handleChangeStoreType = (newStoreType: StoreType) => {
    setCurrentStoreType(newStoreType);
  };

  return (
    <section className="min-h-100/2 py-10 text-center">
      <CentralContainer variant="small">
        <h2 className="mx-auto text-balance lg:max-w-lg xl:max-w-5xl text-[2rem] leading-[2.25rem] lg:text-[4rem] lg:leading-[4.25rem] tracking-[-.01em] font-medium">
          Leaders
          <span className="relative mx-2 translate-y-[-50%] lg:translate-y-[-100%] transition-all group inline-flex items-center justify-center rounded-full aspect-square w-6 bg-[#ffce67] lg:hover:bg-[#171b26]">
            <Asterisk className="fill-black lg:group-hover:fill-white transition-all duration-300 lg:group-hover:-rotate-90" />
            <div className="hidden lg:flex absolute text-balance items-center top-[calc(-200%-3.5rem)] pt-[.5625rem] px-4 pb-2 rounded-full bg-[#ffefc6] text-sm font-semibold transition-all duration-300 opacity-0 transform translate-y-9 scale-0 rotate-[25deg] group-hover:opacity-100 group-hover:translate-z-0 group-hover:scale-100 group-hover:rotate-0">
              <span className="w-[1000px] max-w-83">
                40% du Top 100 des chaînes de la restauration rapide par France
                Snacking Avril 2024
              </span>
            </div>
          </span>
          dans la restauration.
          <br />
          Reconnus dans tous les secteurs.
        </h2>
        <div className="relative mx-auto mt-6 lg:mt-16">
          <div className="flex lg:hidden items-center justify-center gap-2 mb-8 p-2 rounded-full border border-[#e1e2e9]">
            <div
              className={cn(
                'transition-all rounded-full flex-1 h-8 flex items-center justify-center cursor-pointer text-sm font-semibold',
                currentStoreType === '1-50' && 'bg-[#ffce67]'
              )}
              onClick={() => {
                handleChangeStoreType('1-50');
              }}
            >
              1-50
            </div>
            <div
              className={cn(
                'transition-all rounded-full flex-1 h-8 flex items-center justify-center cursor-pointer text-sm font-semibold',
                currentStoreType === '50-200' && 'bg-[#a2cd92]'
              )}
              onClick={() => {
                handleChangeStoreType('50-200');
              }}
            >
              50-200
            </div>
            <div
              className={cn(
                'transition-all rounded-full flex-1 h-8 flex items-center justify-center cursor-pointer text-sm font-semibold',
                currentStoreType === '200+' && 'bg-[#faa96b]'
              )}
              onClick={() => {
                handleChangeStoreType('200+');
              }}
            >
              200+
            </div>
          </div>
          <div
            className={cn(
              'flex flex-wrap items-center justify-center gap-4 lg:!flex',
              currentStoreType !== '1-50' && 'hidden'
            )}
          >
            <div className="hidden lg:flex mx-auto items-center justify-center w-[calc(20%-.8rem)] aspect-square rounded-3xl bg-[#ffce67] text-center">
              <span className="text-lg leading-7 px-4">
                1-50 établissements
              </span>
            </div>
            {stores['1-50'].map((store) => (
              <StoreBlock key={store.image} store={store} type="1-50" />
            ))}
          </div>
          <div
            className={cn(
              'flex flex-wrap items-center justify-center mt-4 gap-4 lg:!flex',
              currentStoreType !== '50-200' && 'hidden'
            )}
          >
            <div className="hidden lg:flex mx-auto items-center justify-center w-[calc(20%-.8rem)] aspect-square rounded-3xl bg-[#a2cd92] text-center">
              <span className="text-lg leading-7 px-4">
                50-200 établissements
              </span>
            </div>
            {stores['50-200'].map((store) => (
              <StoreBlock key={store.image} store={store} type="50-200" />
            ))}
          </div>
          <div
            className={cn(
              'flex flex-wrap items-center justify-center mt-4 gap-4 lg:!flex',
              currentStoreType !== '200+' && 'hidden'
            )}
          >
            <div className="hidden lg:flex mx-auto items-center justify-center w-[calc(20%-.8rem)] aspect-square rounded-3xl bg-[#faa96b] text-center">
              <span className="text-lg leading-7 px-4">
                200+ établissements
              </span>
            </div>
            {stores['200+'].map((store) => (
              <StoreBlock key={store.image} store={store} type="200+" />
            ))}
          </div>
        </div>
      </CentralContainer>
    </section>
  );
}
