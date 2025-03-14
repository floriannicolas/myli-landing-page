'use client';

import { useScroll, useMotionValueEvent, useSpring } from 'motion/react';
import { useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import Link from 'next/link';
import { SPRING_SCROLL_MASS } from '@/lib/constants';
import LogoMyli from '@/components/icons/logo-myli';
import LogoMyliMobile from '@/components/icons/logo-myli-mobile';
import CentralContainer from '@/components/ui/central-container';
import { Button } from '@/components/ui/button';
import { PlanDemoDialog } from '@/components/dialogs/plan-demo-dialog';

export default function Header() {
  const isLgScreen = useMediaQuery('(width >= 64rem)', {
    defaultValue: true,
    initializeWithValue: false
  });
  const [loginBtnStyle, setLoginBtnStyle] = useState({});

  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, { mass: SPRING_SCROLL_MASS });

  useMotionValueEvent(smoothScrollY, 'change', (current) => {
    if (current < 55) {
      setLoginBtnStyle({
        transform: 'translateY(0%)',
        opacity: 1
      });
    } else {
      setLoginBtnStyle({
        transform: 'translateY(-100%)',
        opacity: 0
      });
    }
  });

  return (
    <header className="fixed top-4 lg:top-8 left-0 right-0 z-50">
      <CentralContainer>
        <nav className="px-0 lg:px-4">
          <ul className="flex gap-0 items-center justify-center">
            <li>
              <Link href="/" aria-label="Myli">
                <LogoMyli className="hidden lg:block" />
                <LogoMyliMobile className="block lg:hidden h-8" />
              </Link>
            </li>
            <li className="ml-auto lg:bg-white lg:px-1 lg:py-1 lg:rounded-l-full overflow-hidden">
              <Button
                asChild
                variant="myli-ghost-gray"
                className="h-10 border border-[#e5e5e5] lg:border-none"
                style={isLgScreen ? {} : loginBtnStyle}
              >
                <a href="https://next.myli.io/fr">Se connecter</a>
              </Button>
            </li>
            <li className="ml-2 lg:ml-0 lg:bg-white lg:px-1 lg:py-1 lg:rounded-r-full">
              <PlanDemoDialog>
                <Button variant="myli">Planifiez votre démo</Button>
              </PlanDemoDialog>
            </li>
          </ul>
        </nav>
      </CentralContainer>
    </header>
  );
}
