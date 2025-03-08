'use client';

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate
} from 'motion/react';
import { useRef } from 'react';
import CentralContainer from '@/components/ui/central-container';
import CentralMiniContainer from '@/components/ui/central-mini-container';
import Image from 'next/image';

const sponsors = [
  { image: '/images/partners/logo-partner-jei_002.webp' },
  { image: '/images/partners/logo-partner-google-startup_002.webp' },
  { image: '/images/partners/logo-partner-facebook_002.webp' },
  { image: '/images/partners/logo-partner-frenchtech_002.webp' }
];
export default function TeamSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['-50vh', 2]
  });

  const smallTeamScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  const bigImpackScale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  const textTranslateY = useTransform(scrollYProgress, [0, 1], [10, -10]);

  const smallTeamScaleTransform = useMotionTemplate`scale(${smallTeamScale})`;
  const bigImpackScaleTransform = useMotionTemplate`scale(${bigImpackScale})`;
  const textTranslateYTransform = useMotionTemplate`translateY(${textTranslateY}%)`;

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden mt-5 lg:mt-10 pt-23 lg:pt-50 pb-20 bg-linear-90 from-[#f1f7fd] to-[#fbf7fd] flex items-center justify-center"
    >
      <CentralContainer>
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
        <CentralMiniContainer fluidSize={false}>
          <div className="flex items-center justify-center lg:justify-normal lg:flex-row-reverse mt-10 lg:-mt-10">
            <motion.div
              className="relative bg-white rounded-[2.5rem] p-6 lg:p-10 text-base lg:text-lg z-2 w-[calc(.8333333333*100vw-.8333333333*16px*2+.8333333333*1rem)] md:w-[calc(.6666666667*100vw-.6666666667*16px*2+.6666666667*1rem)] lg:w-[calc(.33*100vw-.33*16px*2+.333*1rem)]"
              style={{
                transform: textTranslateYTransform
              }}
            >
              Nous avons choisi d&apos;être une équipe à taille humaine pour
              garder l&apos;agilité des startups et la folie des pionniers.
              Certains misent sur la quantité, nous misons sur la qualité. Et ça
              change tout.
            </motion.div>
          </div>
        </CentralMiniContainer>
        <CentralMiniContainer fluidSize={false}>
          <div className="flex flex-wrap items-center gap-4 mt-20 mx-auto max-w-fit">
            {sponsors.map(({ image }) => (
              <div
                key={image}
                className="relative overflow-hidden group flex items-center justify-center w-[calc(50%-.5rem)] lg:w-44 aspect-square rounded-3xl border border-[#e1e2e9] text-center"
              >
                <Image alt="" width={124} height={124} src={image} />
              </div>
            ))}
          </div>
        </CentralMiniContainer>
      </CentralContainer>
    </section>
  );
}
