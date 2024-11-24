import { GraficoReducaoCO2 } from "@/app/(admin)/_components/charts/grafico-c2o";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative">
      <GraficoReducaoCO2
        nome="Planta Híbrida A"
        subtitle="Progresso na Redução de CO₂"
        reducao={65} 
        impactoFinal="Contribuindo para um futuro mais sustentável"
      />
    </div>
  );
};