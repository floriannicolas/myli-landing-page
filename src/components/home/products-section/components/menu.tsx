import ToolLottery from "@/components/icons/tool-lottery";
import ToolPresence from "@/components/icons/tool-presence";
import ToolReview from "@/components/icons/tool-review";
import ToolStoreLocator from "@/components/icons/tool-store-locator";
import { cn } from "@/lib/utils";

export default function Menu({ section }: { section: string }) {
  return (
    <div className="text-center lg:text-left mx-auto lg:mx-none lg:mr-auto lg:px-8 w-[220px] lg:w-[16.5rem] lg:h-full flex flex-col gap-[0.625rem] justify-center items-center lg:items-start">
      <div
        className={cn(
          "flex gap-3 items-center w-full justify-center lg:justify-start",
          section !== "review" && "hidden lg:flex"
        )}
      >
        <div
          className={cn(
            "rounded-full bg-[#ffce67] w-8 h-8 flex items-center justify-center",
            section !== "review" && "opacity-30"
          )}
        >
          <ToolReview className="h-4" />
        </div>
        <div
          className={cn(
            "relative flex-none lg:flex-1",
            section !== "review" && "invisible"
          )}
        >
          <div className="text-left text-[1.5rem] lg:text-sm font-medium">
            Myli Review
          </div>
          {section === "review" && (
            <div className="hidden lg:block absolute mt-3 text-sm lg:text-xs font-medium">
              Collecte et analyse intelligente des avis clients
            </div>
          )}
        </div>
      </div>
      {section === "review" && (
        <div className="block lg:hidden mt-3 text-sm lg:text-xs font-medium">
          Collecte et analyse intelligente des avis clients
        </div>
      )}
      <div
        className={cn(
          "flex gap-3 items-center w-full justify-center lg:justify-start",
          section !== "presence" && "hidden lg:flex"
        )}
      >
        <div
          className={cn(
            "rounded-full bg-[#a2cd92] w-8 h-8 flex items-center justify-center",
            section !== "presence" && "opacity-30"
          )}
        >
          <ToolPresence className="h-4" />
        </div>
        <div
          className={cn(
            "relative flex-none lg:flex-1",
            section !== "presence" && "invisible"
          )}
        >
          <div className="text-[1.5rem] lg:text-sm font-medium">
            Myli Presence
          </div>
          {section === "presence" && (
            <div className="hidden lg:block absolute mt-3 text-sm lg:text-xs font-medium">
              Optimisation de vos fiches Google, Apple, Facebook...
            </div>
          )}
        </div>
      </div>
      {section === "presence" && (
        <div className="block lg:hidden mt-3 text-sm lg:text-xs font-medium">
          Optimisation de vos fiches Google, Apple, Facebook...
        </div>
      )}
      <div
        className={cn(
          "flex gap-3 items-center w-full justify-center lg:justify-start",
          section !== "seo" && "hidden lg:flex"
        )}
      >
        <div
          className={cn(
            "rounded-full bg-[#afb7f5] w-8 h-8 flex items-center justify-center",
            section !== "seo" && "opacity-30"
          )}
        >
          <ToolStoreLocator className="h-4" />
        </div>
        <div
          className={cn(
            "relative flex-none lg:flex-1",
            section !== "seo" && "invisible"
          )}
        >
          <div className="text-[1.5rem] lg:text-sm font-medium">Myli SEO</div>
          {section === "seo" && (
            <div className="hidden lg:block absolute mt-3 text-sm lg:text-xs font-medium">
              Création de votre Store Locator vraiment optimisé SEO
            </div>
          )}
        </div>
      </div>
      {section === "seo" && (
        <div className="block lg:hidden mt-3 text-sm lg:text-xs font-medium">
          Création de votre Store Locator vraiment optimisé SEO
        </div>
      )}
      <div
        className={cn(
          "flex gap-3 items-center w-full justify-center lg:justify-start",
          section !== "lottery" && "hidden lg:flex"
        )}
      >
        <div
          className={cn(
            "rounded-full bg-[#d3b3ea] w-8 h-8 flex items-center justify-center",
            section !== "lottery" && "opacity-30"
          )}
        >
          <ToolLottery className="h-4" />
        </div>
        <div
          className={cn(
            "relative flex-none lg:flex-1",
            section !== "lottery" && "invisible"
          )}
        >
          <div className="text-[1.5rem] lg:text-sm font-medium">
            Myli Lottery
          </div>
          {section === "lottery" && (
            <div className="hidden lg:block absolute mt-3 text-sm lg:text-xs font-medium">
              La gamification en local pour des actions marketing
            </div>
          )}
        </div>
      </div>
      {section === "lottery" && (
        <div className="block lg:hidden mt-3 text-sm lg:text-xs font-medium">
          La gamification en local pour des actions marketing
        </div>
      )}
    </div>
  );
}
