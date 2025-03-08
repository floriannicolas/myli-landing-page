"use client";

import { useScroll, useMotionValueEvent } from "motion/react";
import { useRef, useState } from "react";
import LogoMyli from "@/components/icons/logo-myli";
import LogoMyliMobile from "@/components/icons/logo-myli-mobile";
import CentralContainer from "@/components/ui/central-container";
import MagicButton from "@/components/ui/magic-button";
import { useMediaQuery } from "usehooks-ts";
import Link from "next/link";

export default function NavBar() {
  const sectionRef = useRef(null);
  const isLgScreen = useMediaQuery("(width >= 64rem)");
  const [loginBtnStyle, setLoginBtnStyle] = useState({});

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end end", "start start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (current < 0.96) {
      setLoginBtnStyle({
        transform: "translateY(0%)",
        opacity: 1,
      });
    } else {
      setLoginBtnStyle({
        transform: "translateY(-100%)",
        opacity: 0,
      });
    }
  });

  return (
    <header ref={sectionRef} className="fixed top-8 left-0 right-0 z-50">
      <CentralContainer>
        <nav className="px-0 lg:px-6">
          <ul className="flex gap-0 items-center justify-center">
            <li>
              <Link href="/" aria-label="Myli">
                <LogoMyli className="hidden lg:block" />
                <LogoMyliMobile className="block lg:hidden h-8" />
              </Link>
            </li>
            <li className="ml-auto lg:bg-white lg:px-1 lg:py-1 lg:rounded-l-full overflow-hidden">
              <MagicButton asChild variant="transparent-gray" style={isLgScreen ? {} : loginBtnStyle}>
                <a href="/login">Se connecter</a>
              </MagicButton>
            </li>
            <li className="ml-2 lg:ml-0 lg:bg-white lg:px-1 lg:py-1 lg:rounded-r-full">
              <MagicButton>
                Planifiez votre démo
              </MagicButton>
            </li>
          </ul>
        </nav>
      </CentralContainer>
    </header>
  );
}
