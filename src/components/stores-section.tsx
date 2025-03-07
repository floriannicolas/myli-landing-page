"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

const stores1 = [
  {
    image: "logo-bocuse_002.webp",
    label: (
      <>
        Depuis 2018
        <br />
        Le restaurant de Mr Paul !
      </>
    ),
  },
  {
    image: "logo-trampoline-park_002.webp",
    label: (
      <>
        Depuis 2016
        <br />
        De FeelSport à Youjump - Du challenge et de la confiance !
      </>
    ),
  },
  {
    image: "logo-black&white_002.webp",
    label: (
      <>
        Connu via Pokawa
        <br />
        Reconnu grâce à nos résultats
      </>
    ),
  },
  {
    image: "logo-pny_002.webp",
    label: (
      <>
        2020-22 : Début de l&apos;histoire
        <br />
        2024 : Les retrouvailles après un essai chez un confrère.
      </>
    ),
  },
];

const stores2 = [
  {
    image: "logo-pokawa_002.webp",
    label: (
      <>
        2020 : 29 restaurants
        <br />
        2025 : 128 restaurants
        <br />
        (On grandit ensemble 😌)
      </>
    ),
  },
  {
    image: "logo-laboucherie_002.webp",
    label: (
      <>
        Depuis 2020
        <br />
        Bienveillance, Challenge, Fidélité… comme tous nos clients à Angers !
      </>
    ),
  },
  {
    image: "logo-b&m_002.webp",
    label: (
      <>
        135 magasins
        <br />
        Une confiance basée sur du concret
      </>
    ),
  },
  {
    image: "logo-pizzacosy_002.webp",
    label: (
      <>
        2018 : 15 pizzerias et 1 produit Myli
        <br />
        2025 : 73 pizzerias et 4 produits Myli
      </>
    ),
  },
];

const stores3 = [
  {
    image: "logo-groupe-bertrand_002.webp",
    label: (
      <>
        2017 : Pitaya 10 restos
        <br />
        2019 : Le paradis du fruit
        <br />
        2020 : Groupe Kamel Boulhadid
      </>
    ),
  },
  {
    image: "logo-adecco_002.webp",
    label: (
      <>
        Écartés en 2021, Précieux aujourd&apos;hui. 98% des avis ont une réponse
        grâce à Myli et aux équipes Adecco.
      </>
    ),
  },
  {
    image: "logo-amorino_002.webp",
    label: (
      <>
        270 boutiques
        <br />
        Un plaisir de valoriser l’image de leur Gelato dans 18 pays.
      </>
    ),
  },
  {
    image: "logo-monceaux-fleurs_002.webp",
    label: (
      <>
        211 fleuristes et 2 produits déployés avec des résultats bien visibles
        ☺️
      </>
    ),
  },
];

export default function StoresSection() {
  const [currentStoreType, setCurrentStoreType] = useState("type-50-200");

  const handleChangeStoreType = (newStoreType: string) => {
    setCurrentStoreType(newStoreType);
  };

  return (
    <section className="min-h-100/2 px-8 py-10 text-center">
      <h2 className="mx-auto text-balance lg:max-w-lg text-[2rem] leading-[2.25rem] lg:text-[4rem] lg:leading-[4.25rem] tracking-[-.01em] font-medium">
        Leaders dans la restauration.
        <br />
        Reconnus dans tous les secteurs.
      </h2>
      <div className="relative mx-auto max-w-[647px] lg:max-w-[972px] mt-6 lg:mt-16">
        <div className="flex lg:hidden items-center justify-center gap-2 mb-8 p-2 rounded-full border border-[#e1e2e9]">
          <div
            className={cn(
              "transition-all rounded-full flex-1 h-8 flex items-center justify-center cursor-pointer text-sm font-semibold",
              currentStoreType === "type-1-50" && "bg-[#ffce67]"
            )}
            onClick={() => {
              handleChangeStoreType("type-1-50");
            }}
          >
            1-50
          </div>
          <div
            className={cn(
              "transition-all rounded-full flex-1 h-8 flex items-center justify-center cursor-pointer text-sm font-semibold",
              currentStoreType === "type-50-200" && "bg-[#a2cd92]"
            )}
            onClick={() => {
              handleChangeStoreType("type-50-200");
            }}
          >
            50-200
          </div>
          <div
            className={cn(
              "transition-all rounded-full flex-1 h-8 flex items-center justify-center cursor-pointer text-sm font-semibold",
              currentStoreType === "type-200+" && "bg-[#faa96b]"
            )}
            onClick={() => {
              handleChangeStoreType("type-200+");
            }}
          >
            200+
          </div>
        </div>
        <div
          className={cn(
            "flex flex-wrap items-center justify-center gap-4 lg:!flex",
            currentStoreType !== "type-1-50" && "hidden",
          )}
        >
          <div className="hidden lg:flex mx-auto items-center justify-center w-44 h-44 rounded-3xl bg-[#ffce67] text-center">
            <span className="text-lg leading-7 px-4">1-50 établissements</span>
          </div>
          {stores1.map(({ image, label }) => (
            <div
              key={image}
              className="relative overflow-hidden mx-auto group flex items-center justify-center w-[calc(50%-.5rem)] lg:w-44 aspect-square rounded-3xl border border-[#e1e2e9] text-center"
            >
              <img
                alt=""
                loading="lazy"
                width="124"
                height="124"
                src={`/stores/${image}`}
              />
              <div className="absolute inset-0 flex items-center justify-center px-3 bg-[#ffce67] rounded-3xl leading-5 transition-all translate-y-full group-hover:translate-y-0">
                {label}
              </div>
            </div>
          ))}
        </div>
        <div
          className={cn(
            "flex flex-wrap items-center justify-center mt-4 gap-4 lg:!flex",
            currentStoreType !== "type-50-200" && "hidden",
          )}
        >
          <div className="hidden lg:flex mx-auto items-center justify-center w-44 h-44 rounded-3xl bg-[#a2cd92] text-center">
            <span className="text-lg leading-7 px-4">
              50-200 établissements
            </span>
          </div>
          {stores2.map(({ image, label }) => (
            <div
              key={image}
              className="relative overflow-hidden mx-auto group flex items-center justify-center w-[calc(50%-.5rem)] lg:w-44 aspect-square rounded-3xl border border-[#e1e2e9] text-center"
            >
              <img
                alt=""
                loading="lazy"
                width="124"
                height="124"
                src={`/stores/${image}`}
              />
              <div className="absolute inset-0 flex items-center justify-center px-3 bg-[#a2cd92] rounded-3xl leading-5 transition-all translate-y-full group-hover:translate-y-0">
                {label}
              </div>
            </div>
          ))}
        </div>
        <div
          className={cn(
            "flex flex-wrap items-center justify-center mt-4 gap-4 lg:!flex",
            currentStoreType !== "type-200+" && "hidden",
          )}
        >
          <div className="hidden lg:flex mx-auto items-center justify-center w-44 h-44 rounded-3xl bg-[#faa96b] text-center">
            <span className="text-lg leading-7 px-4">200+ établissements</span>
          </div>
          {stores3.map(({ image, label }) => (
            <div
              key={image}
              className="relative overflow-hidden mx-auto group flex items-center justify-center w-[calc(50%-.5rem)] lg:w-44 aspect-square rounded-3xl border border-[#e1e2e9] text-center"
            >
              <img
                alt=""
                loading="lazy"
                width="124"
                height="124"
                src={`/stores/${image}`}
              />
              <div className="absolute inset-0 flex items-center justify-center px-3 bg-[#faa96b] rounded-3xl leading-5 transition-all translate-y-full group-hover:translate-y-0">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
