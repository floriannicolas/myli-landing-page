'use client';

import { useScroll } from 'motion/react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import CentralContainer from '@/components/ui/central-container';
import { cn } from '@/lib/utils';

const sectors = [
  {
    key: 'restauration',
    imageTranslateY: 0,
    image: '/images/sectors/image-5.webp',
    title: 'Restauration',
    description:
      'Service à table, Restauration rapide, Boulangerie, Coffee shop…'
  },
  {
    key: 'services',
    imageTranslateY: 20,
    image: '/images/sectors/image-1.webp',
    title: 'Services',
    description: "Banque, Assurance, Agence d'intérim, Salle de sport…"
  },
  {
    key: 'grande-distribution',
    imageTranslateY: 40,
    image: '/images/sectors/image-2.webp',
    title: 'Grande distribution',
    description: 'Hypermarché, Alimentaire, Jardinerie, Décoration…'
  },
  {
    key: 'mode-et-beaute',
    imageTranslateY: 60,
    image: '/images/sectors/image-3.webp',
    title: 'Mode et Beauté',
    description: 'Boutique de Prêt-à-porter, Luxe, Cosmétique…'
  },
  {
    key: 'magasins-specialises',
    imageTranslateY: 80,
    image: '/images/sectors/image-4.webp',
    title: 'Magasins spécialisés',
    description: 'Automobile, Fleuriste, Achat-vente…'
  }
];
const sectorsKeys = sectors.map(({ key }) => key);

export default function SectorsSection() {
  const sectorsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<(HTMLDivElement | null)>(null);
  const [currentSector, setCurrentSector] = useState(sectorsKeys[0]);
  const [imageTranslateY, setImageTranslateY] = useState(0);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (!sectionRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Déclenche quand au moins 10% de l'élément est visible
    );
    
    observer.observe(sectionRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!isSectionVisible) return;

      const windowHeight = window.innerHeight;
      const centerPosition = windowHeight / 2;

      let closestSector = sectorsKeys[0];
      let closestImageTranslateY = 0;
      let minDistance = Infinity;

      sectorsRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const sectorCenter = rect.top + rect.height / 2;
          const distance = Math.abs(sectorCenter - centerPosition);

          if (distance < minDistance) {
            minDistance = distance;
            closestSector = sectors[index].key;
            closestImageTranslateY = sectors[index].imageTranslateY;
          }
        }
      });
      setCurrentSector(closestSector);
      setImageTranslateY(closestImageTranslateY);
    };

    const unsubscribe = scrollY.on('change', () => handleScroll());
    handleScroll();

    return () => unsubscribe();
  }, [scrollY]);

  return (
    <section className="py-10" ref={sectionRef}>
      <CentralContainer variant="small">
        <div className="relative flex justify-between gap-12">
          <div className="flex flex-1 flex-col gap-12">
            {sectors.map(({ key, title, description }, index) => (
              <div
                key={key}
                ref={(el: HTMLDivElement | null): void => {
                  sectorsRefs.current[index] = el;
                }}
                className={cn(
                  'transition-all duration-400 will-change-opacity',
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
            <div
              className="w-full min-h-full transition-all duration-400 will-change-transform"
              style={{ transform: `translateY(-${imageTranslateY}%)` }}
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
            </div>
          </div>
        </div>
      </CentralContainer>
    </section>
  );
}
