'use client';

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from 'motion/react';
import { useLayoutEffect, useRef, useState } from 'react';
import LogoMyli from '@/components/icons/logo-myli';
import LogoGoogle from '@/components/icons/logo-google';
import Reviews from '@/components/icons/reviews';
import Star from '@/components/icons/star';
import CentralContainer from '@/components/ui/central-container';

import Pin from './components/pin';
import PinBar from './components/pin-bar';
import PinContent from './components/pin-content';
import PinContainer from './components/pin-container';
import Image from 'next/image';

export default function ComparisonSection() {
  const [isReady, setIsReady] = useState(false);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    setIsReady(true);
  }, []);

  const { scrollYProgress: scrollYClipPathProgress } = useScroll({
    target: sectionRef,
    offset: ['end end', 'start start']
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['-40vh', '170vh']
  });

  const clipPathPercent = useTransform(
    scrollYClipPathProgress,
    [0, 0.8],
    [0, 100]
  );
  const clipPath = isReady
    ? useMotionTemplate`polygon(0% ${clipPathPercent}%, 100% ${clipPathPercent}%, 100% 100%, 0% 100%)`
    : useMotionTemplate`polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)`;

  const containerTranslate = useTransform(
    scrollYProgress,
    [0, 0.32, 0.8, 1],
    [-5, 0, 0, -5]
  );
  const containerScale = useTransform(
    scrollYProgress,
    [0, 0.32, 0.8, 1],
    [0.825, 1, 1, 0.825]
  );
  const containerTransform = isReady
    ? useMotionTemplate`translate(0%, ${containerTranslate}%) scale(${containerScale}, ${containerScale})`
    : useMotionTemplate`translate(0%, -5%) scale(0.825, 0.825)`;

  const containerInnerScale = useTransform(
    scrollYProgress,
    [0, 0.32, 0.8, 1],
    [1.25, 1, 1, 1.25]
  );
  const containerInnerTransform = isReady
    ? useMotionTemplate`scale(${containerInnerScale}, ${containerInnerScale})`
    : useMotionTemplate`scale(1.25, 1.25)`;

  const containerPinsOpacityTransform = useTransform(
    scrollYProgress,
    [0.26, 0.34, 0.78, 0.84],
    [0, 1, 1, 0]
  );
  const containerPinsOpacity = isReady ? containerPinsOpacityTransform : 0;

  return (
    <section className="relative py-6 lg:py-10 xl:py-15">
      <CentralContainer className="h-[200svh]">
        <div ref={sectionRef} className="h-full">
          <div className="sticky top-18 lg:top-4 mx-auto flex justify-center items-center">
            <motion.div
              className="relative w-full h-[calc(100svh-5.5rem)] lg:h-[calc(100svh-2rem)] rounded-[2rem] overflow-hidden"
              style={{
                transform: containerTransform
              }}
            >
              <motion.div
                className="relative w-full h-full"
                style={{
                  transform: containerInnerTransform
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    className="absolute top-0 left-0 right-0 w-full h-full object-cover z-1 bg-[#f5f6f8]"
                    src="/images/comparison/comparison-before.webp"
                    alt="Avant Myli"
                    width={1920}
                    height={1920}
                  />
                  <motion.div
                    className="absolute top-8 left-1/2 -translate-x-1/2 transform flex justify-center items-center gap-2 bg-white py-2 px-4 rounded-2xl z-2"
                    style={{ opacity: containerPinsOpacity }}
                  >
                    <span className="text-lg xl:text-xl font-semibold opacity-60">
                      Avant
                    </span>
                    <LogoMyli className="opacity-60" />
                  </motion.div>
                  <motion.div
                    className="absolute flex justify-center items-end gap-2 flex-wrap lg:items-center bottom-0 lg:top-0 left-0 w-full lg:h-full px-8 lg:px-2 pb-8 lg:pb-0 z-2"
                    style={{ opacity: containerPinsOpacity }}
                  >
                    <PinContainer className="lg:mt-[15%] lg:ml-[0]">
                      <Pin />
                      <PinBar className="h-[130px]" />
                      <PinContent className="lg:top-[-110px] lg:left-[40px]">
                        <Reviews />
                        <div className="text-sm font-semibold text-[#171b26] leading-[1.5rem]">
                          Peu&nbsp;d&apos;avis&nbsp;clients
                        </div>
                      </PinContent>
                    </PinContainer>
                    <PinContainer className="lg:mt-[-10%] lg:ml-[40%]">
                      <Pin />
                      <PinBar />
                      <PinContent className="lg:top-[-130px] lg:left-[40px]">
                        <LogoGoogle className="grayscale" />
                        <div className="text-sm font-semibold text-[#171b26] leading-[1.5rem]">
                          Visibilité&nbsp;médiocre
                        </div>
                      </PinContent>
                    </PinContainer>
                    <PinContainer className="lg:mt-[12%] lg:ml-[-57%]">
                      <Pin />
                      <PinBar className="rotate-135 left-[-52px]" />
                      <PinContent className="lg:top-[-130px] lg:left-[-170px]">
                        <Star />
                        <Star className="opacity-20" />
                        <Star className="opacity-20" />
                        <Star className="opacity-20" />
                        <Star className="opacity-20" />
                      </PinContent>
                    </PinContainer>
                    <PinContainer className="lg:mt-[-4%] lg:ml-[-20%]">
                      <Pin />
                      <PinBar className="rotate-135 left-[-52px]" />
                      <PinContent className="lg:top-[-130px] lg:left-[-220px]">
                        <span className="block bg-[#da2828] rounded-full w-3 h-3" />
                        <div className="text-sm font-semibold text-[#171b26] leading-[1.5rem]">
                          Mauvais&nbsp;horaires&nbsp;d&apos;ouverture
                        </div>
                      </PinContent>
                    </PinContainer>
                  </motion.div>
                </div>
                <motion.div
                  className="absolute top-0 left-0 w-full h-full will-change-[clipPath] z-2"
                  style={{ clipPath }}
                >
                  <Image
                    className="absolute top-0 left-0 right-0 w-full h-full object-cover z-1 bg-[#f5f6f8]"
                    src="/images/comparison/comparison-after.webp"
                    alt="Avant Myli"
                    width={1920}
                    height={1920}
                  />
                  <motion.div
                    className="absolute top-8 left-1/2 -translate-x-1/2 transform flex justify-center items-center gap-3 bg-[#ffce67] py-2 px-4 rounded-2xl z-2"
                    style={{ opacity: containerPinsOpacity }}
                  >
                    <span className="text-lg xl:text-xl font-semibold">
                      Avec
                    </span>
                    <LogoMyli />
                  </motion.div>
                  <motion.div
                    className="absolute flex justify-center items-end gap-2 flex-wrap lg:items-center bottom-0 lg:top-0 left-0 w-full lg:h-full px-8 lg:px-2 pb-8 lg:pb-0 z-2"
                    style={{ opacity: containerPinsOpacity }}
                  >
                    <PinContainer className="lg:mt-[15%] lg:ml-[0]">
                      <Pin />
                      <PinBar className="h-[130px]" />
                      <PinContent className="lg:top-[-110px] lg:left-[40px]">
                        <Reviews />
                        <div className="text-sm font-semibold text-[#171b26] leading-[1.5rem]">
                          356&nbsp;nouveaux&nbsp;avis
                        </div>
                      </PinContent>
                    </PinContainer>
                    <PinContainer className="lg:mt-[-10%] lg:ml-[40%]">
                      <Pin />
                      <PinBar />
                      <PinContent className="lg:top-[-130px] lg:left-[40px]">
                        <LogoGoogle />
                        <div className="text-sm font-semibold text-[#171b26] leading-[1.5rem]">
                          Top&nbsp;3&nbsp;sur&nbsp;Google
                        </div>
                      </PinContent>
                    </PinContainer>
                    <PinContainer className="lg:mt-[12%] lg:ml-[-57%]">
                      <Pin />
                      <PinBar className="rotate-135 left-[-52px]" />
                      <PinContent className="lg:top-[-130px] lg:left-[-170px]">
                        <Star className="fill-[#ffce67]" />
                        <Star className="fill-[#ffce67]" />
                        <Star className="fill-[#ffce67]" />
                        <Star className="fill-[#ffce67]" />
                        <Star className="fill-[#ffce67]" />
                      </PinContent>
                    </PinContainer>
                    <PinContainer className="lg:mt-[-4%] lg:ml-[-20%]">
                      <Pin />
                      <PinBar className="rotate-135 left-[-52px]" />
                      <PinContent className="lg:top-[-130px] lg:left-[-220px]">
                        <span className="block bg-[#a2cd92] rounded-full w-3 h-3" />
                        <div className="text-sm font-semibold text-[#171b26] leading-[1.5rem]">
                          Ouvert&nbsp;actuellement
                        </div>
                      </PinContent>
                    </PinContainer>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </CentralContainer>
    </section>
  );
}
