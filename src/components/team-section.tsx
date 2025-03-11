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
  { image: '/images/partners/logo-partner-jei_002.webp' },
  { image: '/images/partners/logo-partner-google-startup_002.webp' },
  { image: '/images/partners/logo-partner-facebook_002.webp' },
  { image: '/images/partners/logo-partner-frenchtech_002.webp' }
];
export default function TeamSection() {
  const sectionRef = useRef(null);
  const isLgScreen = useMediaQuery('(width >= 64rem)');

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
      className="overflow-hidden mt-5 lg:mt-10 pt-23 lg:pt-50 pb-20 bg-linear-90 from-[#f1f7fd] to-[#fbf7fd]"
    >
      <CentralContainer
        withPadding={false}
        className="flex items-center justify-center"
      >
        <div className="text-center">
          <motion.div
            className="text-[1.125rem] leading-[2rem] lg:text-[2rem] lg:leading-[2rem] tracking-[-.02em] font-medium"
            style={{
              transform: smallTeamScaleTransform
            }}
          >
            Small team
          </motion.div>
          <motion.div
            className="text-[4.5rem] leading-[4.5rem] lg:text-[13.75rem] lg:leading-[10.625rem] tracking-[-.02em] font-medium"
            style={{
              transform: bigImpackScaleTransform
            }}
          >
            Big impact
          </motion.div>
        </div>
      </CentralContainer>
      <CentralContainer isMini>
        <div className="flex items-center justify-center lg:justify-normal lg:flex-row-reverse mt-10 lg:-mt-10 lg:-mr-10">
          <motion.div
            className="relative bg-white rounded-[2.5rem] p-6 lg:p-10 text-base lg:text-lg z-2 w-[calc(.8333333333*100vw-.8333333333*16px*2+.8333333333*1rem)] lg:w-[calc(max(40%,490px))]"
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
      <CentralContainer isMini>
        <div className="flex flex-wrap items-center gap-4 mt-20 mx-auto w-full">
          {sponsors.map(({ image }) => (
            <div
              key={image}
              className="relative overflow-hidden group flex items-center justify-center w-[calc(50%-.5rem)] lg:w-[calc(25%-.75rem)] aspect-square rounded-3xl border border-[#e1e2e9] text-center"
            >
              <Image alt="" width={124} height={124} src={image} />
            </div>
          ))}
        </div>
      </CentralContainer>
    </section>
  );
}
