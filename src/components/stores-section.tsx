'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import Asterisk from '@/components/icons/asterisk';
import CentralMiniContainer from '@/components/ui/central-mini-container';
import StoreItem from '@/components/ui/stores/store-item';

const stores1 = [
  {
    image: '/images/stores/logo-bocuse_002.webp',
    label: (
      <>
        Depuis 2018
        <br />
        Le restaurant de Mr Paul !
      </>
    )
  },
  {
    image: '/images/stores/logo-trampoline-park_002.webp',
    label: (
      <>
        Depuis 2016
        <br />
        De FeelSport à Youjump - Du challenge et de la confiance !
      </>
    )
  },
  {
    image: '/images/stores/logo-black&white_002.webp',
    label: (
      <>
        Connu via Pokawa
        <br />
        Reconnu grâce à nos résultats
      </>
    )
  },
  {
    image: '/images/stores/logo-pny_002.webp',
    label: (
      <>
        2020-22 : Début de l&apos;histoire
        <br />
        2024 : Les retrouvailles après un essai chez un confrère.
      </>
    )
  }
];

const stores2 = [
  {
    image: '/images/stores/logo-pokawa_002.webp',
    label: (
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
    image: '/images/stores/logo-laboucherie_002.webp',
    label: (
      <>
        Depuis 2020
        <br />
        Bienveillance, Challenge, Fidélité… comme tous nos clients à Angers !
      </>
    )
  },
  {
    image: '/images/stores/logo-b&m_002.webp',
    label: (
      <>
        135 magasins
        <br />
        Une confiance basée sur du concret
      </>
    )
  },
  {
    image: '/images/stores/logo-pizzacosy_002.webp',
    label: (
      <>
        2018 : 15 pizzerias et 1 produit Myli
        <br />
        2025 : 73 pizzerias et 4 produits Myli
      </>
    )
  }
];

const stores3 = [
  {
    image: '/images/stores/logo-groupe-bertrand_002.webp',
    label: (
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
    image: '/images/stores/logo-adecco_002.webp',
    label: (
      <>
        Écartés en 2021, Précieux aujourd&apos;hui. 98% des avis ont une réponse
        grâce à Myli et aux équipes Adecco.
      </>
    )
  },
  {
    image: '/images/stores/logo-amorino_002.webp',
    label: (
      <>
        270 boutiques
        <br />
        Un plaisir de valoriser l’image de leur Gelato dans 18 pays.
      </>
    )
  },
  {
    image: '/images/stores/logo-monceaux-fleurs_002.webp',
    label: (
      <>
        211 fleuristes et 2 produits déployés avec des résultats bien visibles
        ☺️
      </>
    )
  }
];

export default function StoresSection() {
  const [currentStoreType, setCurrentStoreType] = useState('type-50-200');

  const handleChangeStoreType = (newStoreType: string) => {
    setCurrentStoreType(newStoreType);
  };

  return (
    <section className="min-h-100/2 py-10 text-center">
      <CentralMiniContainer>
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
        <div className="relative mx-auto max-w-[647px] lg:max-w-[972px] xl:max-w-[1170px] mt-6 lg:mt-16">
          <div className="flex lg:hidden items-center justify-center gap-2 mb-8 p-2 rounded-full border border-[#e1e2e9]">
            <div
              className={cn(
                'transition-all rounded-full flex-1 h-8 flex items-center justify-center cursor-pointer text-sm font-semibold',
                currentStoreType === 'type-1-50' && 'bg-[#ffce67]'
              )}
              onClick={() => {
                handleChangeStoreType('type-1-50');
              }}
            >
              1-50
            </div>
            <div
              className={cn(
                'transition-all rounded-full flex-1 h-8 flex items-center justify-center cursor-pointer text-sm font-semibold',
                currentStoreType === 'type-50-200' && 'bg-[#a2cd92]'
              )}
              onClick={() => {
                handleChangeStoreType('type-50-200');
              }}
            >
              50-200
            </div>
            <div
              className={cn(
                'transition-all rounded-full flex-1 h-8 flex items-center justify-center cursor-pointer text-sm font-semibold',
                currentStoreType === 'type-200+' && 'bg-[#faa96b]'
              )}
              onClick={() => {
                handleChangeStoreType('type-200+');
              }}
            >
              200+
            </div>
          </div>
          <div
            className={cn(
              'flex flex-wrap items-center justify-center gap-4 lg:!flex',
              currentStoreType !== 'type-1-50' && 'hidden'
            )}
          >
            <div className="hidden lg:flex mx-auto items-center justify-center w-[calc(20%-.8rem)] aspect-square rounded-3xl bg-[#ffce67] text-center">
              <span className="text-lg leading-7 px-4">
                1-50 établissements
              </span>
            </div>
            {stores1.map(({ image, label }) => (
              <StoreItem
                key={image}
                image={image}
                label={label}
                type="type-1-50"
              />
            ))}
          </div>
          <div
            className={cn(
              'flex flex-wrap items-center justify-center mt-4 gap-4 lg:!flex',
              currentStoreType !== 'type-50-200' && 'hidden'
            )}
          >
            <div className="hidden lg:flex mx-auto items-center justify-center w-[calc(20%-.8rem)] aspect-square rounded-3xl bg-[#a2cd92] text-center">
              <span className="text-lg leading-7 px-4">
                50-200 établissements
              </span>
            </div>
            {stores2.map(({ image, label }) => (
              <StoreItem
                key={image}
                image={image}
                label={label}
                type="type-50-200"
              />
            ))}
          </div>
          <div
            className={cn(
              'flex flex-wrap items-center justify-center mt-4 gap-4 lg:!flex',
              currentStoreType !== 'type-200+' && 'hidden'
            )}
          >
            <div className="hidden lg:flex mx-auto items-center justify-center w-[calc(20%-.8rem)] aspect-square rounded-3xl bg-[#faa96b] text-center">
              <span className="text-lg leading-7 px-4">
                200+ établissements
              </span>
            </div>
            {stores3.map(({ image, label }) => (
              <StoreItem
                key={image}
                image={image}
                label={label}
                type="type-200+"
              />
            ))}
          </div>
        </div>
      </CentralMiniContainer>
    </section>
  );
}
