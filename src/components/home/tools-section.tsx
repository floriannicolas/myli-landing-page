'use client';

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useSpring
} from 'motion/react';
import { useRef } from 'react';
import ToolLottery from '@/components/icons/tool-lottery';
import ToolPresence from '@/components/icons/tool-presence';
import ToolReview from '@/components/icons/tool-review';
import ToolStoreLocator from '@/components/icons/tool-store-locator';
import { useMediaQuery } from 'usehooks-ts';
import { SPRING_SCROLL_MASS } from '@/lib/constants';

export default function ToolsSection() {
  const sectionRef = useRef(null);
  const isLgScreen = useMediaQuery('(width >= 64rem)', {
    defaultValue: true,
    initializeWithValue: false
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['-50vh', '150vh']
  });
  const smoothScrollYProgress = useSpring(scrollYProgress, {
    mass: SPRING_SCROLL_MASS
  });

  const textContainerTranslate = useTransform(
    smoothScrollYProgress,
    [0, 1],
    [-12.5, 12.5]
  );

  const textContainerTransform = useMotionTemplate`translateY(${textContainerTranslate}vh)`;

  const lgLextContainerTranslate = useTransform(
    smoothScrollYProgress,
    [0, 1],
    [-12.5, 20]
  );
  const lgTextContainerTransform = useMotionTemplate`translateY(${lgLextContainerTranslate}vh)`;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-svh bg-linear-90 from-[#f1f7fd] to-[#fbf7fd] py-5 text-center lg:py-10 xl:py-15"
    >
      <motion.div
        className="absolute top-0 left-0 flex h-full w-full items-center justify-center"
        style={{
          transform: isLgScreen
            ? lgTextContainerTransform
            : textContainerTransform
        }}
      >
        <div className="relative mx-auto max-w-xl lg:max-w-4xl">
          <h2 className="text-[2.5rem] leading-[2.75rem] font-medium tracking-[-.02em] text-balance lg:text-[5rem] lg:leading-[5.5rem]">
            Quatre outils puissants, une seule plateforme
          </h2>
          <div className="mx-4 mt-6 max-w-lg text-lg lg:mx-auto lg:mt-10">
            De la gestion des avis à la conquête locale, nous avons créé des
            solutions puissantes, complémentaires et faciles à intégrer :
            Review, Presence, Store Locator, Lottery.
          </div>
        </div>
      </motion.div>
      <div className="relative flex min-h-svh flex-col items-center justify-center">
        <div className="relative mt-25 flex translate-x-[calc(min(100vw,1800px)*.1)] items-center justify-center gap-3 rounded-full bg-white p-3 pr-[1.375rem] shadow-[0_1px_43px_0_rgba(0,0,0,0.15)] lg:mt-45">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#afb7f5]">
            <ToolStoreLocator className="h-[22px]" />
          </div>
          <span className="text-xl">Store Locator</span>
        </div>
        <div className="relative mt-18 flex translate-x-[calc(min(100vw,1800px)*-.25)] items-center justify-center gap-3 rounded-full bg-white p-3 pr-[1.375rem] shadow-[0_1px_43px_0_rgba(0,0,0,0.15)] lg:mt-60 xl:mt-70">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffce67]">
            <ToolReview className="h-[22px]" />
          </div>
          <span className="text-xl">Review</span>
        </div>
        <div className="relative mt-86 flex translate-x-[calc(min(100vw,1800px)*.225)] items-center justify-center gap-3 rounded-full bg-white p-3 pr-[1.375rem] shadow-[0_1px_43px_0_rgba(0,0,0,0.15)] lg:mt-25">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#a2cd92]">
            <ToolPresence className="h-[22px]" />
          </div>
          <span className="text-xl">Presence</span>
        </div>
        <div className="relative mt-20 mb-20 flex translate-x-[calc(min(100vw,1800px)*-.085)] items-center justify-center gap-3 rounded-full bg-white p-3 pr-[1.375rem] shadow-[0_1px_43px_0_rgba(0,0,0,0.15)] xl:mt-20 xl:mt-30 xl:mb-30">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d3b3ea]">
            <ToolLottery className="h-[22px]" />
          </div>
          <span className="text-xl">Lottery</span>
        </div>
      </div>
    </section>
  );
}
