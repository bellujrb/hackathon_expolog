import {
    Lightbulb,
    Cog,
    Leaf,
    Globe,
    TrendingUp,
    ChevronRightIcon,
  } from "lucide-react";
  import Link from "next/link";
  import { Heading } from "../heading";
  
  const visionData = [
    {
      title: "Sustentabilidade",
      desc: "Promovemos um futuro sustentável, transformando CO₂ em soluções inovadoras.",
      icon: <Leaf />,
      color: "#4caf50", 
    },
    {
      title: "Descarbonização Global",
      desc: "Aceleramos a transição energética, descarbonizando indústrias críticas como transporte marítimo.",
      icon: <Globe />,
      color: "#00bcd4", 
    },
    {
      title: "Eficiência Econômica",
      desc: "Produzimos combustíveis verdes de baixo custo, maximizando competitividade.",
      icon: <TrendingUp />,
      color: "#ff9800", 
    },
    {
      title: "Inovação Tecnológica",
      desc: "Integramos tecnologias de ponta para plantas conectadas de Etanol e Hidrogênio Verde.",
      icon: <Lightbulb />,
      color: "#9c27b0", 
    },
  ];
  
  export const VisionSection = () => {
    return (
      <>
        <div className="py-12 lg:py-24 relative container mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
              {visionData.map((vision, index) => (
                <a
                  className="group flex flex-col justify-center p-5 border-2 border-black bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300 translate-x-[-4px] translate-y-[-4px] rounded-md shadow-[4px_4px_0px_black] hover:translate-x-[0px] hover:translate-y-[0px] hover:shadow-none"
                  href={""}
                  key={index}
                >
                  <div
                    className="flex justify-center items-center w-12 h-12 border rounded-lg"
                    style={{ backgroundColor: vision.color }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 text-primary-foreground">
                      {vision.icon}
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">{vision.title}</h3>
                    <p className="mt-1 text-muted-foreground">{vision.desc}</p>
                  </div>
                </a>
              ))}
            </div>
  
            <div className="lg:w-3/4">
              <Heading
                title="Nossa Visão Sustentável"
                badge="Visão fix2zero"
                classNameBadge="flex justify-center md:justify-start"
                classNameTitle="text-center md:text-start"
                id="visao"
              />
              <p className="mt-3 text-base md:text-lg text-muted-foreground">
                Na fix2zero, acreditamos em um futuro onde o CO₂ não é apenas um resíduo, mas uma oportunidade. Transformamos emissões em Metanol Verde, contribuindo para a descarbonização global e o avanço de combustíveis sustentáveis.
              </p>
              <p className="mt-3 text-base md:text-lg text-muted-foreground">
                Nossa missão é integrar sustentabilidade e eficiência econômica com tecnologias avançadas, conectando plantas de Etanol e Hidrogênio Verde para transformar o mundo.
              </p>
              <p className="mt-5">
                <Link
                  className="inline-flex items-center gap-x-1 group font-medium hover:underline underline-offset-4 text-sm md:text-base"
                  href="/about"
                >
                  Conheça o coração do nosso projeto
                  <ChevronRightIcon className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };
  