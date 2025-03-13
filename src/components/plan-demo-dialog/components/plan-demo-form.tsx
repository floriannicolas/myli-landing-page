'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function PlanDemoForm() {
  return (
    <form className="flex flex-col gap-2">
      <div className="flex items-center justify-center flex-col lg:flex-row gap-2">
        <div className="grid w-full items-center gap-1">
          <Label htmlFor="lastname">Nom<span className="text-[#DA2828]">*</span></Label>
          <Input type="text" id="lastname" />
        </div>
        <div className="grid w-full items-center gap-1">
          <Label htmlFor="firstname">Prénom<span className="text-[#DA2828]">*</span></Label>
          <Input type="text" id="firstname" />
        </div>
      </div>
      <div className="grid w-full items-center gap-1">
          <Label htmlFor="businessName">Nom de l&apos;entreprise<span className="text-[#DA2828]">*</span></Label>
          <Input type="text" id="businessName" />
        </div>
        <div className="grid w-full items-center gap-1">
          <Label htmlFor="email">Email<span className="text-[#DA2828]">*</span></Label>
          <Input type="email" id="email" />
        </div>
        <div className="grid w-full items-center gap-1">
          <Label htmlFor="phone">Téléphone<span className="text-[#DA2828]">*</span></Label>
          <Input type="text" id="phone" />
        </div>
        <div className="pt-4 lg:pt-6">
            <Button type="submit" size="lg" className="w-full lg:w-auto">Contactez-moi</Button>
        </div>
    </form>
  );
}
