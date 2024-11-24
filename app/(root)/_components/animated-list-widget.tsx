"use client"

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/app/(root)/_components/ui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Nova recomendação de alocação de recursos",
    description: "Painel de Simulação de Viabilidade",
    time: "15m atrás",
    icon: "📊",
    color: "#00C9A7", 
  },
  {
    name: "Atualização de previsão de produção",
    description: "Painel de Análise Preditiva",
    time: "10m atrás",
    icon: "🔮",
    color: "#FFB800", 
  },
  {
    name: "Relatório de impacto ambiental gerado",
    description: "Painel de Relatórios ESG",
    time: "5m atrás",
    icon: "🌍",
    color: "#4caf50", 
  },
  {
    name: "Alerta: sobrecarga operacional detectada",
    description: "Painel de Monitoramento",
    time: "2m atrás",
    icon: "⚠️",
    color: "#FF3D71", 
  },
  {
    name: "Demanda crítica identificada para CO₂",
    description: "Painel de Gestão de Demandas",
    time: "30m atrás",
    icon: "🔥",
    color: "#1E86FF", 
  },
  {
    name: "Nova ausência impactando produção",
    description: "Painel de Recursos Humanos",
    time: "1h atrás",
    icon: "🚫",
    color: "#DC3545", 
  },
  {
    name: "Tarefa-chave concluída na planta piloto",
    description: "Painel de Projetos",
    time: "20m atrás",
    icon: "✅",
    color: "#22c55e", 
  },
  {
    name: "Baixo desempenho detectado em recursos",
    description: "Painel de Monitoramento de Eficiência",
    time: "45m atrás",
    icon: "📉",
    color: "#FFC107",
  },
  {
    name: "Nova atualização do modelo fix2zero",
    description: "Painel de Machine Learning",
    time: "2h atrás",
    icon: "🔄",
    color: "#38bdf8", 
  },
  {
    name: "Feedback ajustado para previsão ESG",
    description: "Painel de Relatórios ESG",
    time: "15m atrás",
    icon: "💬",
    color: "#17A2B8", 
  },
];



notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full cursor-pointer overflow-hidden rounded-md p-3 sm:p-4 border-2 border-black bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300 translate-x-[-4px] translate-y-[-4px] shadow-[4px_4px_0px_black] hover:translate-x-[0px] hover:translate-y-[0px] hover:shadow-none"
      )}
    >
      <div className="flex flex-row items-center gap-2 sm:gap-3">
        <div
          className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-base sm:text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center text-base sm:text-lg font-medium dark:text-white whitespace-pre">
            <span className="text-sm sm:text-base">{name}</span>
            <span className="mx-1 hidden sm:inline">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-xs sm:text-sm font-normal dark:text-white/60 truncate">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};


export function AnimatedListWidget({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[595px] w-full flex-col p-6 overflow-hidden rounded-lg",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
