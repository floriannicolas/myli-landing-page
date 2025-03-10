'use client';

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useSpring
} from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';
import ProductsSectionMenu from '@/components/ui/products-section-menu';
import LogoMyliChat from '@/components/icons/logo-myli-chat';
import SmileyAngry from '@/components/icons/smiley-angry';
import { useMediaQuery } from 'usehooks-ts';
import { SPRING_SCROLL_MASS } from '@/lib/constants';

export default function ProductsSection() {
  const sectionRef = useRef(null);
  const isLgScreen = useMediaQuery('(width >= 64rem)');

  const { scrollYProgress: scrollYClipPathProgress } = useScroll({
    target: sectionRef,
    offset: ['end end', 'start start']
  });
  const smoothScrollYClipPathProgress = useSpring(scrollYClipPathProgress, { mass: SPRING_SCROLL_MASS });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['-80vh', '470vh']
  });
  const smoothScrollYProgress = useSpring(scrollYProgress, { mass: SPRING_SCROLL_MASS });

  const mdClipPath = useMotionTemplate`polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`;
  const mdTranslateY = useMotionTemplate`translateY(0%)`;

  // Presence
  const clipPathPercentPresence = useTransform(
    smoothScrollYClipPathProgress,
    [0.75, 1],
    [0, 100]
  );
  const clipPathPresence = useMotionTemplate`polygon(0% ${clipPathPercentPresence}%, 100% ${clipPathPercentPresence}%, 100% 100%, 0% 100%)`;
  const translateYPercentPresence = useTransform(
    smoothScrollYClipPathProgress,
    [0.75, 1],
    [0, 6.5]
  );
  const translateYTemplatePresence = useMotionTemplate`translateY(${translateYPercentPresence}%)`;
  const opacityPresence = useTransform(
    smoothScrollYClipPathProgress,
    [0.75, 1],
    [1, 0.35]
  );

  // SEO
  const clipPathPercentSeo = useTransform(
    smoothScrollYClipPathProgress,
    [0.5, 0.75],
    [0, 100]
  );
  const clipPathSeo = useMotionTemplate`polygon(0% ${clipPathPercentSeo}%, 100% ${clipPathPercentSeo}%, 100% 100%, 0% 100%)`;
  const translateYPercentSeo = useTransform(
    smoothScrollYClipPathProgress,
    [0.5, 0.75],
    [0, 6.5]
  );
  const translateYTemplateSeo = useMotionTemplate`translateY(${translateYPercentSeo}%)`;
  const opacitySeo = useTransform(
    smoothScrollYClipPathProgress,
    [0.5, 0.75],
    [1, 0.35]
  );

  // Lottery
  const clipPathPercentLottery = useTransform(
    smoothScrollYClipPathProgress,
    [0.25, 0.5],
    [0, 100]
  );
  const clipPathLottery = useMotionTemplate`polygon(0% ${clipPathPercentLottery}%, 100% ${clipPathPercentLottery}%, 100% 100%, 0% 100%)`;
  const translateYPercentLottery = useTransform(
    smoothScrollYClipPathProgress,
    [0.25, 0.5],
    [0, 6.5]
  );
  const translateYTemplateLottery = useMotionTemplate`translateY(${translateYPercentLottery}%)`;
  const opacityLottery = useTransform(
    smoothScrollYClipPathProgress,
    [0.25, 0.5],
    [1, 0.35]
  );

  // Container
  const containerTranslate = useTransform(
    smoothScrollYProgress,
    [0, 0.14, 0.8, 1],
    [-5, 0, 0, -5]
  );
  const containerScale = useTransform(
    smoothScrollYProgress,
    [0, 0.14, 0.8, 1],
    [0.825, 1, 1, 0.825]
  );
  const containerTransform = useMotionTemplate`translate(0%, ${containerTranslate}%) scale(${containerScale}, ${containerScale})`;
  const mdContainerTransform = useMotionTemplate`translate(0%, 0%) scale(1, 1)`;

  const containerInnerScale = useTransform(
    smoothScrollYProgress,
    [0, 0.14, 0.8, 1],
    [1.25, 1, 1, 1.25]
  );
  const containerInnerTransform = useMotionTemplate`scale(${containerInnerScale}, ${containerInnerScale})`;
  const mdContainerInnerTransform = useMotionTemplate`scale(1, 1)`;

  return (
    <section className="relative lg:h-[400svh]">
      <div ref={sectionRef} className="h-full px-4 mx-auto 2xl:px-17">
        <div className="lg:sticky lg:top-4 2xl:top-[104px] flex justify-center items-center">
          <motion.div
            className="relative w-full lg:h-[calc(100vh-2rem)] 2xl:h-[calc(100vh-208px)] rounded-none lg:rounded-[2rem] overflow-hidden"
            style={{
              transform: isLgScreen ? containerTransform : mdContainerTransform
            }}
          >
            <motion.div
              className="relative w-full h-full"
              style={{
                transform: isLgScreen
                  ? containerInnerTransform
                  : mdContainerInnerTransform
              }}
            >
              <div className="py-[3.25rem] px-[1rem] lg:py-0 lg:px-0 mt-4 lg:mt-0 rounded-[2rem] lg:rounded-none relative w-full h-full flex justify-center items-center bg-linear-180 from-[#ffefc6] to-[#fff9eb]">
                <div className="flex flex-col lg:flex-row items-center justify-center h-full w-full">
                  <ProductsSectionMenu section="review" />
                  <div className="mt-[2.375rem] md:mx-[20vw] lg:mt-0 lg:mx-auto flex-1 h-full flex justify-center items-center">
                    <div className="flex flex-col w-full max-w-[43.75rem] gap-6">
                      <div className="w-auto max-w-fit bg-[#ffce67] px-6 py-5 lg:text-lg rounded-[1.25rem]">
                        Y&apos;a t-il des{' '}
                        <b className="font-semibold">soucis particuliers</b>{' '}
                        dans mes établissements ?
                      </div>
                      <div className="w-auto max-w-fit flex gap-2">
                        <div className="rounded-full w-12 h-12 flex justify-center items-center bg-white border border-[#e1e2e9]">
                          <LogoMyliChat />
                        </div>
                        <div className="flex flex-wrap flex-1 flex-col gap-2">
                          <div className="w-auto max-w-fit flex flex-wrap items-center gap-2 bg-white border border-[#e1e2e9] px-6 py-5 lg:text-lg rounded-[1.25rem]">
                            <div className="lg:flex gap-2 items-center leading-8">
                              <b className="font-semibold">5%</b> de vos clients
                              sont{' '}
                              <span className="leading-[20px] bg-white border border-[#e1e2e9] align-middle inline-flex gap-1 lg:gap-2 justify-center items-center rounded-lg p-1 lg:p-2">
                                <SmileyAngry />
                                <span className="lg:text-lg font-semibold">
                                  En colère
                                </span>
                              </span>{' '}
                              à propos du{' '}
                              <span className="leading-[20px] bg-white border border-[#e1e2e9] inline-flex gap-1 lg:gap-2 justify-center items-center rounded-lg p-1 lg:p-2">
                                <span className="w-[.625rem] h-[.625rem] bg-[#da2828] rounded-full" />
                                <span className="lg:text-lg font-semibold">
                                  Temps d&apos;attente
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <motion.div
                className="py-[3.25rem] px-[1rem] lg:py-0 lg:px-0 mt-4 lg:mt-0 rounded-[2rem] lg:rounded-none lg:absolute top-0 left-0 w-full h-full flex justify-center items-center will-change-[clipPath] bg-linear-180 from-[#e8f4e4] to-[#f5faf3] z-2"
                style={{ clipPath: isLgScreen ? clipPathPresence : mdClipPath }}
              >
                <div className="flex flex-col lg:flex-row items-center justify-center h-full w-full">
                  <ProductsSectionMenu section="presence" />
                  <motion.div
                    className="mt-[2.375rem] md:mx-[20vw] lg:mt-0 lg:mx-auto flex-1 h-full flex justify-center items-center"
                    style={{
                      transform: isLgScreen
                        ? translateYTemplatePresence
                        : mdTranslateY,
                      opacity: isLgScreen ? opacityPresence : 1
                    }}
                  >
                    <div className="flex flex-col w-full max-w-[43.75rem] gap-6">
                      <div className="w-auto max-w-fit bg-[#a2cd92] px-6 py-5 lg:text-lg rounded-[1.25rem]">
                        Je souhaite{' '}
                        <b className="font-semibold">attirer plus de clients</b>{' '}
                        avec ma fiche Google
                      </div>
                      <div className="w-auto max-w-fit flex gap-2">
                        <div className="rounded-full w-12 h-12 flex justify-center items-center bg-white border border-[#e1e2e9]">
                          <LogoMyliChat />
                        </div>
                        <div className="flex flex-wrap flex-1 flex-col gap-2">
                          <div className="w-auto max-w-fit flex items-center gap-2 bg-white border border-[#e1e2e9] px-6 py-5 lg:text-lg rounded-[1.25rem]">
                            Effectivement, votre photo de couverture est peu
                            vendeuse.
                            <br />
                            Souhaitez-vous la modifier ?
                          </div>
                          <div className="w-auto max-w-fit flex items-center gap-2 bg-white border border-[#e1e2e9] px-2 py-2 lg:text-lg rounded-[1.25rem]">
                            <Image
                              className="rounded-[.75rem]"
                              src="/products/products-chat-burger.webp"
                              alt=""
                              width={220}
                              height={141}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                className="py-[3.25rem] px-[1rem] lg:py-0 lg:px-0 mt-4 lg:mt-0 rounded-[2rem] lg:rounded-none lg:absolute top-0 left-0 w-full h-full flex justify-center items-center will-change-[clipPath] bg-linear-180 from-[#e3e7fc] to-[#eff2fe] z-3"
                style={{ clipPath: isLgScreen ? clipPathSeo : mdClipPath }}
              >
                <div className="flex flex-col lg:flex-row items-center justify-center h-full w-full">
                  <ProductsSectionMenu section="seo" />
                  <motion.div
                    className="mt-[2.375rem] md:mx-[20vw] lg:mt-0 lg:mx-auto flex-1 h-full flex justify-center items-center"
                    style={{
                      transform: isLgScreen
                        ? translateYTemplateSeo
                        : mdTranslateY,
                      opacity: isLgScreen ? opacitySeo : 1
                    }}
                  >
                    <div className="flex flex-col w-full max-w-[43.75rem] gap-6">
                      <div className="w-auto max-w-fit bg-[#afb7f5] px-6 py-5 lg:text-lg rounded-[1.25rem]">
                        Je jette mon <b className="font-semibold">budget SEO</b>{' '}
                        par les fenêtres sans résultat...
                      </div>
                      <div className="w-auto max-w-fit flex gap-2">
                        <div className="rounded-full w-12 h-12 flex justify-center items-center bg-white border border-[#e1e2e9]">
                          <LogoMyliChat />
                        </div>
                        <div className="flex flex-wrap flex-1 flex-col gap-2">
                          <div className="w-auto max-w-fit bg-white border border-[#e1e2e9] px-6 py-5 lg:text-lg rounded-[1.25rem]">
                            Votre <b className="font-semibold">Store Locator</b>{' '}
                            est prêt. <b className="font-semibold">356 pages</b>{' '}
                            locales parfaitement optimisées.
                          </div>
                          <div className="w-auto max-w-fit flex items-center gap-2 bg-white border border-[#e1e2e9] px-6 py-5 lg:text-lg rounded-[1.25rem]">
                            Vos concurrents vont adorer (ou pas)
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                className="py-[3.25rem] px-[1rem] lg:py-0 lg:px-0 mt-4 lg:mt-0 rounded-[2rem] lg:rounded-none lg:absolute top-0 left-0 w-full h-full flex justify-center items-center will-change-[clipPath] bg-linear-180 from-[#f4edfa] to-[#fbf7fd] z-4"
                style={{ clipPath: isLgScreen ? clipPathLottery : mdClipPath }}
              >
                <div className="flex flex-col lg:flex-row items-center justify-center h-full w-full">
                  <ProductsSectionMenu section="lottery" />
                  <motion.div
                    className="mt-[2.375rem] md:mx-[20vw] lg:mt-0 lg:mx-auto flex-1 h-full flex justify-center items-center"
                    style={{
                      transform: isLgScreen
                        ? translateYTemplateLottery
                        : mdTranslateY,
                      opacity: isLgScreen ? opacityLottery : 1
                    }}
                  >
                    <div className="flex flex-col w-full max-w-[43.75rem] gap-6">
                      <div className="w-auto max-w-fit bg-[#d3b3ea] px-6 py-5 lg:text-lg rounded-[1.25rem]">
                        Ça existe un outil qui{' '}
                        <b className="font-semibold">collecte des avis</b>{' '}
                        facilement ?
                      </div>
                      <div className="w-auto max-w-fit flex gap-2">
                        <div className="rounded-full w-12 h-12 flex justify-center items-center bg-white border border-[#e1e2e9]">
                          <LogoMyliChat />
                        </div>
                        <div className="flex flex-wrap flex-1 flex-col gap-2">
                          <div className="w-auto max-w-fit bg-white border border-[#e1e2e9] px-6 py-5 lg:text-lg rounded-[1.25rem]">
                            <b className="font-semibold inline">Myli Lottery</b>{' '}
                            : Vos clients jouent, laissent des avis et
                            reviennent.
                          </div>
                          <div className="w-auto max-w-fit flex items-center gap-2 bg-white border border-[#e1e2e9] px-6 py-5 lg:text-lg rounded-[1.25rem]">
                            En bonus ? Vous collectez des données clients.
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
