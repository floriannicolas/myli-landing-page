"use client";

import CentralContainer from "@/components/ui/central-container";
import CentralMiniContainer from "@/components/ui/central-mini-container";
import ArrowLeft from "@/components/icons/arrow-left";
import ArrowRight from "@/components/icons/arrow-right";

export default function ChatSection() {
  return (
    <section className="py-10 bg-linear-90 from-[#f1f7fd] to-[#fbf7fd] flex items-center justify-center">
      <CentralContainer>
        <CentralMiniContainer>
          <div className="flex justify-between">
            <div className="max-w-[560px]">
              <h2 className="mx-auto max-w-3xl text-[2rem] leading-[2.25rem] lg:text-[4rem] lg:leading-[4.25rem] tracking-[-.01em] font-medium">
                Notre secret ?<br />
                Ne jamais rien lâcher.
              </h2>
              <p className="mt-4">
                (Et nos clients nous en remercient)
              </p>
            </div>
            <div className="hidden lg:flex items-end justify-center gap-4">
              <div className="cursor-pointer rounded-full h-12 w-12 bg-[#171b26] transition-all hover:bg-[#ffce67] flex items-center justify-center group">
                <ArrowLeft className="h-6 fill-[#fff] transition-all group-hover:fill-[#171b26]" />
              </div>
              <div className="cursor-pointer rounded-full h-12 w-12 bg-[#171b26] transition-all hover:bg-[#ffce67] flex items-center justify-center group">
                <ArrowRight className="h-6 fill-[#fff] transition-all group-hover:fill-[#171b26]" />
              </div>
            </div>
          </div>
        </CentralMiniContainer>
      </CentralContainer>
    </section>
  );
}
