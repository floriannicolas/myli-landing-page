'use client';

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useSpring
} from 'motion/react';
import { useRef } from 'react';
import CentralContainer from '@/components/ui/central-container';
import Image from 'next/image';
import { SPRING_SCROLL_MASS } from '@/lib/constants';
import { useMediaQuery } from 'usehooks-ts';

const sponsors = [
  { image: '/images/sponsors/logo-partner-jei.webp', label: 'Jei' },
  {
    image: '/images/sponsors/logo-partner-google-startup.webp',
    label: 'Google for Startups'
  },
  {
    image: '/images/sponsors/logo-partner-facebook.webp',
    label: 'Startup garage PACA from Facebook'
  },
  {
    image: '/images/sponsors/logo-partner-frenchtech.webp',
    label: 'La French Tech'
  }
];
export default function TeamSection() {
  const sectionRef = useRef(null);
  const isLgScreen = useMediaQuery('(width >= 64rem)', {
    defaultValue: true,
    initializeWithValue: false
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['-50vh', 2]
  });
  const smoothScrollYProgress = useSpring(scrollYProgress, {
    mass: SPRING_SCROLL_MASS
  });

  const smallTeamScale = useTransform(smoothScrollYProgress, [0, 1], [1.1, 1]);
  const bigImpackScale = useTransform(smoothScrollYProgress, [0, 1], [0.9, 1]);
  const textTranslateY = useTransform(smoothScrollYProgress, [0, 1], [5, 25]);

  const smallTeamScaleTransform = useMotionTemplate`scale(${smallTeamScale})`;
  const bigImpackScaleTransform = useMotionTemplate`scale(${bigImpackScale})`;
  const lgTextTranslateYTransform = useMotionTemplate`translateY(${textTranslateY}%)`;
  const textTranslateYTransform = useMotionTemplate`translateY(5%)`;

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-linear-90 from-[#f1f7fd] to-[#fbf7fd]"
    >
      <div className="flex flex-col items-center justify-center py-34 lg:py-50">
        <CentralContainer
          withPadding={false}
          className="flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              className="text-[1.125rem] leading-[2rem] font-medium tracking-[-.02em] lg:text-[2rem] lg:leading-[2rem]"
              style={{
                transform: smallTeamScaleTransform
              }}
            >
              Small team
            </motion.div>
            <motion.div
              className="text-[4.5rem] leading-[4.5rem] font-medium tracking-[-.02em] lg:text-[13.75rem] lg:leading-[10.625rem]"
              style={{
                transform: bigImpackScaleTransform
              }}
            >
              Big impact
            </motion.div>
          </div>
        </CentralContainer>
        <CentralContainer variant="mini">
          <div className="mt-10 flex items-center justify-center lg:-mt-10 lg:-mr-10 lg:flex-row-reverse lg:justify-normal">
            <motion.div
              className="relative z-2 w-[calc(.8333333333*100vw-.8333333333*16px*2+.8333333333*1rem)] rounded-[2.5rem] bg-white p-6 text-base lg:w-[calc(max(40%,490px))] lg:p-10 lg:text-lg"
              style={{
                transform: isLgScreen
                  ? lgTextTranslateYTransform
                  : textTranslateYTransform
              }}
            >
              Nous avons choisi d&apos;être une équipe à taille humaine pour
              garder l&apos;agilité des startups et la folie des pionniers.
              Certains misent sur la quantité, nous misons sur la qualité. Et ça
              change tout.
            </motion.div>
          </div>
        </CentralContainer>
      </div>
      <CentralContainer variant="mini">
        <div className="mx-auto flex w-full flex-wrap items-center gap-4 py-4 lg:py-10">
          {sponsors.map(({ image, label }) => (
            <div
              key={image}
              className="group relative flex aspect-square w-[calc(50%-.5rem)] items-center justify-center overflow-hidden rounded-3xl border border-[#e1e2e9] text-center lg:w-[calc(25%-.75rem)]"
            >
              <Image alt={label} width={124} height={124} src={image} />
            </div>
          ))}
        </div>
      </CentralContainer>
    </section>
  );
}
