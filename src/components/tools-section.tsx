'use client';

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate
} from 'motion/react';
import { useRef } from 'react';
import ToolLottery from '@/components/icons/tool-lottery';
import ToolPresence from '@/components/icons/tool-presence';
import ToolReview from '@/components/icons/tool-review';
import ToolStoreLocator from '@/components/icons/tool-store-locator';
import { useMediaQuery } from 'usehooks-ts';

export default function ToolsSection() {
  const sectionRef = useRef(null);
  const isLgScreen = useMediaQuery('(width >= 64rem)');

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['-50vh', '150vh']
  });

  const textContainerTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [-12.5, 12.5]
  );

  const textContainerTransform = useMotionTemplate`translateY(${textContainerTranslate}vh)`;

  const lgLextContainerTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [-20, 20]
  );
  const lgTextContainerTransform = useMotionTemplate`translateY(${lgLextContainerTranslate}vh)`;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-svh text-center py-5 lg:py-10 bg-linear-90 from-[#f1f7fd] to-[#fbf7fd]"
    >
      <motion.div
        className="absolute flex items-center justify-center h-full w-full top-0 left-0"
        style={{
          transform: isLgScreen
            ? lgTextContainerTransform
            : textContainerTransform
        }}
      >
        <div className="relative max-w-xl lg:max-w-4xl mx-auto">
          <h2 className="font-medium text-balance text-[2.5rem] leading-[2.75rem] lg:text-[5rem] lg:leading-[5.5rem] tracking-[-.02em]">
            Quatre outils puissants, une seule plateforme
          </h2>
          <div className="mx-4 mt-6 lg:mt-10 text-lg max-w-lg lg:mx-auto">
            De la gestion des avis à la conquête locale, nous avons créé des
            solutions puissantes, complémentaires et faciles à intégrer :
            Review, Presence, Store Locator, Lottery.
          </div>
        </div>
      </motion.div>
      <div className="relative min-h-svh flex flex-col items-center justify-center">
        <div className="mt-25 lg:mt-45 translate-x-[calc(min(100vw,1800px)*.1)] relative bg-white p-3 pr-[1.375rem] rounded-full flex items-center justify-center gap-3 shadow-[0_1px_43px_0_rgba(0,0,0,0.15)]">
          <div className="rounded-full bg-[#afb7f5] w-10 h-10 flex items-center justify-center">
            <ToolStoreLocator className="h-[22px]" />
          </div>
          <span className="text-xl">Store Locator</span>
        </div>
        <div className="mt-18 lg:mt-60 translate-x-[calc(min(100vw,1800px)*-.25)] relative bg-white p-3 pr-[1.375rem] rounded-full flex items-center justify-center gap-3 shadow-[0_1px_43px_0_rgba(0,0,0,0.15)]">
          <div className="rounded-full bg-[#ffce67] w-10 h-10 flex items-center justify-center">
            <ToolReview className="h-[22px]" />
          </div>
          <span className="text-xl">Review</span>
        </div>
        <div className="mt-86 lg:mt-25 translate-x-[calc(min(100vw,1800px)*.225)] relative bg-white p-3 pr-[1.375rem] rounded-full flex items-center justify-center gap-3 shadow-[0_1px_43px_0_rgba(0,0,0,0.15)]">
          <div className="rounded-full bg-[#a2cd92] w-10 h-10 flex items-center justify-center">
            <ToolPresence className="h-[22px]" />
          </div>
          <span className="text-xl">Presence</span>
        </div>
        <div className="mt-20 xl:mt-20 translate-x-[calc(min(100vw,1800px)*-.085)] mb-20 xl:mb-30 relative bg-white p-3 pr-[1.375rem] rounded-full flex items-center justify-center gap-3 shadow-[0_1px_43px_0_rgba(0,0,0,0.15)]">
          <div className="rounded-full bg-[#d3b3ea] w-10 h-10 flex items-center justify-center">
            <ToolLottery className="h-[22px]" />
          </div>
          <span className="text-xl">Lottery</span>
        </div>
      </div>
    </section>
  );
}
