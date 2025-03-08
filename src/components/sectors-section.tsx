'use client';

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValueEvent
} from 'motion/react';
import React, { useRef, useState } from 'react';
import CentralContainer from '@/components/ui/central-container';
import CentralMiniContainer from '@/components/ui/central-mini-container';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const sectors = [
  {
    key: 'restauration',
    image: '/images/sectors/restauration.webp',
    title: 'Restauration',
    description:
      'Service à table, Restauration rapide, Boulangerie, Coffee shop…'
  },
  {
    key: 'services',
    image: '/images/sectors/services.webp',
    title: 'Services',
    description: "Banque, Assurance, Agence d'intérim, Salle de sport…"
  },
  {
    key: 'grande-distribution',
    image: '/images/sectors/grande-distribution.webp',
    title: 'Grande distribution',
    description: 'Hypermarché, Alimentaire, Jardinerie, Décoration…'
  },
  {
    key: 'mode-et-beaute',
    image: '/images/sectors/mode-et-beaute.webp',
    title: 'Mode et Beauté',
    description: 'Boutique de Prêt-à-porter, Luxe, Cosmétique…'
  },
  {
    key: 'magasins-specialises',
    image: '/images/sectors/magasins-specialises.webp',
    title: 'Magasins spécialisés',
    description: 'Automobile, Fleuriste, Achat-vente…'
  }
];
const sectorsKeys = sectors.map(({ key }) => key);
const duplicatedSectorsKeys = sectorsKeys.flatMap((item) => [item, item]);
const sectorInputsTransform = [
  0, 0.21, 0.22, 0.45, 0.46, 0.7, 0.71, 0.92, 0.93, 1
];

export default function SectorsSection() {
  const sectionRef = useRef(null);
  const [currentSector, setCurrentSector] = useState(sectorsKeys[0]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['-50vh', 2.2]
  });

  const scrollKey = useTransform(
    scrollYProgress,
    sectorInputsTransform,
    duplicatedSectorsKeys
  );

  useMotionValueEvent(scrollKey, 'change', (current) => {
    if (currentSector !== current) {
      setCurrentSector(current);
    }
  });

  const imageTranslate = useTransform(
    scrollYProgress,
    sectorInputsTransform,
    [0, 0, 20, 20, 40, 40, 60, 60, 80, 80]
  );
  const imageTransform = useMotionTemplate`translateY(-${imageTranslate}%)`;

  return (
    <section className="py-10" ref={sectionRef}>
      <CentralContainer>
        <CentralMiniContainer>
          <div className="relative flex justify-between gap-12">
            <div className="flex flex-1 flex-col gap-12">
              {sectors.map(({ key, title, description }) => (
                <div
                  key={key}
                  className={cn(
                    'transition-all duration-400',
                    key !== currentSector && 'opacity-50'
                  )}
                >
                  <h3 className="text-[2.5rem] leading-[2.75rem] lg:text-[5rem] lg:leading-[5.5rem] tracking-[-.02em] font-medium text-left">
                    {title}
                  </h3>
                  <p className="text-lg mt-2 text-balance">{description}</p>
                </div>
              ))}
            </div>
            <div className="hidden lg:block sticky top-[calc(50%-20vh)] right-0 z-1 block w-[30vh] h-[40vh] bg-[#f5f6f8] rounded-[2rem] overflow-hidden">
              <motion.div
                className="w-full min-h-full transition-all duration-400"
                style={{ transform: imageTransform }}
              >
                {sectors.map(({ key, image, title }) => (
                  <Image
                    key={key}
                    className="w-full h-[40vh] object-cover"
                    src={image}
                    alt={title}
                    width={300}
                    height={400}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </CentralMiniContainer>
      </CentralContainer>
    </section>
  );
}
