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
import { useMediaQuery } from 'usehooks-ts';
import { SPRING_SCROLL_MASS } from '@/lib/constants';
import LogoMyliChat from '@/components/icons/logo-myli-chat';
import SmileyAngry from '@/components/icons/smiley-angry';
import CentralContainer from '@/components/ui/central-container';

import Menu from './components/menu';

export default function ProductsSection() {
  const sectionRef = useRef(null);
  const isLgScreen = useMediaQuery('(width >= 64rem)', {
    defaultValue: true,
    initializeWithValue: false
  });

  const { scrollYProgress: scrollYClipPathProgress } = useScroll({
    target: sectionRef,
    offset: ['end end', 'start start']
  });
  const smoothScrollYClipPathProgress = useSpring(scrollYClipPathProgress, {
    mass: SPRING_SCROLL_MASS
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['-80vh', '470vh']
  });
  const smoothScrollYProgress = useSpring(scrollYProgress, {
    mass: SPRING_SCROLL_MASS
  });

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
    <section className="relative py-6 lg:py-10 xl:py-15">
      <CentralContainer className="lg:h-[400svh]">
        <div ref={sectionRef} className="h-full">
          <div className="mx-auto flex items-center justify-center lg:sticky lg:top-4">
            <motion.div
              className="relative w-full overflow-hidden rounded-none lg:h-[calc(100svh-2rem)] lg:rounded-[2rem]"
              style={{
                transform: isLgScreen
                  ? containerTransform
                  : mdContainerTransform
              }}
            >
              <motion.div
                className="relative h-full w-full"
                style={{
                  transform: isLgScreen
                    ? containerInnerTransform
                    : mdContainerInnerTransform
                }}
              >
                <div className="relative mt-4 flex h-full w-full items-center justify-center rounded-[2rem] bg-linear-180 from-[#ffefc6] to-[#fff9eb] px-[1rem] py-[3.25rem] lg:mt-0 lg:rounded-none lg:px-0 lg:py-0">
                  <div className="flex h-full w-full flex-col items-center justify-center lg:flex-row">
                    <Menu section="review" />
                    <div className="mt-[2.375rem] flex h-full flex-1 items-center justify-center md:mx-[20vw] lg:mx-auto lg:mt-0">
                      <div className="flex w-full max-w-[43.75rem] flex-col gap-6">
                        <div className="w-auto max-w-fit rounded-[1.25rem] bg-[#ffce67] px-6 py-5 lg:text-lg">
                          Y&apos;a t-il des{' '}
                          <b className="font-semibold">soucis particuliers</b>{' '}
                          dans mes établissements ?
                        </div>
                        <div className="flex w-auto max-w-fit gap-2">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e1e2e9] bg-white">
                            <LogoMyliChat />
                          </div>
                          <div className="flex flex-1 flex-col flex-wrap gap-2">
                            <div className="flex w-auto max-w-fit flex-wrap items-center gap-2 rounded-[1.25rem] border border-[#e1e2e9] bg-white px-6 py-5 lg:text-lg">
                              <div className="items-center gap-2 leading-8 lg:flex">
                                <b className="font-semibold">5%</b> de vos
                                clients sont{' '}
                                <span className="inline-flex items-center justify-center gap-1 rounded-lg border border-[#e1e2e9] bg-white p-1 align-middle leading-[20px] lg:gap-2 lg:p-2">
                                  <SmileyAngry />
                                  <span className="font-semibold lg:text-lg">
                                    En colère
                                  </span>
                                </span>{' '}
                                à propos du{' '}
                                <span className="inline-flex items-center justify-center gap-1 rounded-lg border border-[#e1e2e9] bg-white p-1 leading-[20px] lg:gap-2 lg:p-2">
                                  <span className="h-[.625rem] w-[.625rem] rounded-full bg-[#da2828]" />
                                  <span className="font-semibold lg:text-lg">
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
                  className="top-0 left-0 z-2 mt-4 flex h-full w-full items-center justify-center rounded-[2rem] bg-linear-180 from-[#e8f4e4] to-[#f5faf3] px-[1rem] py-[3.25rem] will-change-[clipPath] lg:absolute lg:mt-0 lg:rounded-none lg:px-0 lg:py-0"
                  style={{
                    clipPath: isLgScreen ? clipPathPresence : mdClipPath
                  }}
                >
                  <div className="flex h-full w-full flex-col items-center justify-center lg:flex-row">
                    <Menu section="presence" />
                    <motion.div
                      className="mt-[2.375rem] flex h-full flex-1 items-center justify-center md:mx-[20vw] lg:mx-auto lg:mt-0"
                      style={{
                        transform: isLgScreen
                          ? translateYTemplatePresence
                          : mdTranslateY,
                        opacity: isLgScreen ? opacityPresence : 1
                      }}
                    >
                      <div className="flex w-full max-w-[43.75rem] flex-col gap-6">
                        <div className="w-auto max-w-fit rounded-[1.25rem] bg-[#a2cd92] px-6 py-5 lg:text-lg">
                          Je souhaite{' '}
                          <b className="font-semibold">
                            attirer plus de clients
                          </b>{' '}
                          avec ma fiche Google
                        </div>
                        <div className="flex w-auto max-w-fit gap-2">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e1e2e9] bg-white">
                            <LogoMyliChat />
                          </div>
                          <div className="flex flex-1 flex-col flex-wrap gap-2">
                            <div className="flex w-auto max-w-fit items-center gap-2 rounded-[1.25rem] border border-[#e1e2e9] bg-white px-6 py-5 lg:text-lg">
                              Effectivement, votre photo de couverture est peu
                              vendeuse.
                              <br />
                              Souhaitez-vous la modifier ?
                            </div>
                            <div className="flex w-auto max-w-fit items-center gap-2 rounded-[1.25rem] border border-[#e1e2e9] bg-white px-2 py-2 lg:text-lg">
                              <Image
                                className="rounded-[.75rem]"
                                src="/images/products/products-chat-burger.webp"
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
                  className="top-0 left-0 z-3 mt-4 flex h-full w-full items-center justify-center rounded-[2rem] bg-linear-180 from-[#e3e7fc] to-[#eff2fe] px-[1rem] py-[3.25rem] will-change-[clipPath] lg:absolute lg:mt-0 lg:rounded-none lg:px-0 lg:py-0"
                  style={{ clipPath: isLgScreen ? clipPathSeo : mdClipPath }}
                >
                  <div className="flex h-full w-full flex-col items-center justify-center lg:flex-row">
                    <Menu section="seo" />
                    <motion.div
                      className="mt-[2.375rem] flex h-full flex-1 items-center justify-center md:mx-[20vw] lg:mx-auto lg:mt-0"
                      style={{
                        transform: isLgScreen
                          ? translateYTemplateSeo
                          : mdTranslateY,
                        opacity: isLgScreen ? opacitySeo : 1
                      }}
                    >
                      <div className="flex w-full max-w-[43.75rem] flex-col gap-6">
                        <div className="w-auto max-w-fit rounded-[1.25rem] bg-[#afb7f5] px-6 py-5 lg:text-lg">
                          Je jette mon{' '}
                          <b className="font-semibold">budget SEO</b> par les
                          fenêtres sans résultat...
                        </div>
                        <div className="flex w-auto max-w-fit gap-2">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e1e2e9] bg-white">
                            <LogoMyliChat />
                          </div>
                          <div className="flex flex-1 flex-col flex-wrap gap-2">
                            <div className="w-auto max-w-fit rounded-[1.25rem] border border-[#e1e2e9] bg-white px-6 py-5 lg:text-lg">
                              Votre{' '}
                              <b className="font-semibold">Store Locator</b> est
                              prêt. <b className="font-semibold">356 pages</b>{' '}
                              locales parfaitement optimisées.
                            </div>
                            <div className="flex w-auto max-w-fit items-center gap-2 rounded-[1.25rem] border border-[#e1e2e9] bg-white px-6 py-5 lg:text-lg">
                              Vos concurrents vont adorer (ou pas)
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
                <motion.div
                  className="top-0 left-0 z-4 mt-4 flex h-full w-full items-center justify-center rounded-[2rem] bg-linear-180 from-[#f4edfa] to-[#fbf7fd] px-[1rem] py-[3.25rem] will-change-[clipPath] lg:absolute lg:mt-0 lg:rounded-none lg:px-0 lg:py-0"
                  style={{
                    clipPath: isLgScreen ? clipPathLottery : mdClipPath
                  }}
                >
                  <div className="flex h-full w-full flex-col items-center justify-center lg:flex-row">
                    <Menu section="lottery" />
                    <motion.div
                      className="mt-[2.375rem] flex h-full flex-1 items-center justify-center md:mx-[20vw] lg:mx-auto lg:mt-0"
                      style={{
                        transform: isLgScreen
                          ? translateYTemplateLottery
                          : mdTranslateY,
                        opacity: isLgScreen ? opacityLottery : 1
                      }}
                    >
                      <div className="flex w-full max-w-[43.75rem] flex-col gap-6">
                        <div className="w-auto max-w-fit rounded-[1.25rem] bg-[#d3b3ea] px-6 py-5 lg:text-lg">
                          Ça existe un outil qui{' '}
                          <b className="font-semibold">collecte des avis</b>{' '}
                          facilement ?
                        </div>
                        <div className="flex w-auto max-w-fit gap-2">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e1e2e9] bg-white">
                            <LogoMyliChat />
                          </div>
                          <div className="flex flex-1 flex-col flex-wrap gap-2">
                            <div className="w-auto max-w-fit rounded-[1.25rem] border border-[#e1e2e9] bg-white px-6 py-5 lg:text-lg">
                              <b className="inline font-semibold">
                                Myli Lottery
                              </b>{' '}
                              : Vos clients jouent, laissent des avis et
                              reviennent.
                            </div>
                            <div className="flex w-auto max-w-fit items-center gap-2 rounded-[1.25rem] border border-[#e1e2e9] bg-white px-6 py-5 lg:text-lg">
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
      </CentralContainer>
    </section>
  );
}
