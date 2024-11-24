"use client";

import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/app/(root)/_components/ui/badge";
import { Button } from "@/components/ui/button";
import { Syne } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HeroCards } from "@/app/(root)/_components/hero-cards";

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const Hero = () => {
  return (
    <section className="mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        <div className="text-center lg:text-start space-y-6 max-w-3xl">
          <Badge variant={"neutral"}>Transformando o CO₂ em Solução</Badge>
          <main className={cn("text-5xl md:text-7xl font-bold", syne.className)}>
            <h1 className="inline">
              Gerencie{" "}
              <span className="inline text-verde">Plantas Híbridas</span> e{" "}
              <span className="inline text-roxo font-bold">Descarbonize</span>
              <br />
              o Transporte Marítimo
            </h1>
          </main>
          <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
            Na Fix2Zero, cuidamos da gestão de plantas híbridas que transformam
            CO₂ em Metanol Verde, utilizando biomassa, Etanol e Hidrogênio
            Verde. Garantimos eficiência operacional, sustentabilidade e baixo
            custo para descarbonizar o transporte marítimo.
          </p>
          <div className="space-y-4 md:space-x-4">
            <Link href="/simulacao">
              <Button className="w-2/3 sm:w-1/3">Explore a Solução</Button>
            </Link>
            <Link href="/pitch">
              <Button variant={"outline"}>
                Fix2Zero Video Pitch
                <ArrowUpRight size={20} />
              </Button>
            </Link>
          </div>
        </div>

        <div className="z-10">
          <HeroCards />
        </div>
      </div>

      <div className="shadow"></div>
    </section>
  );
};
