import { cn } from '@/lib/utils'
import { Marquee } from '../ui/marquee'
import Image from 'next/image'

const reviews = [
   {
     name: 'Thiago (Co-idealizador)',
     username: '@thiago_Fix2Zero',
     body: 'Desenvolver o Fix2Zero é transformar o CO₂ em uma oportunidade, construindo um futuro com menos emissões.',
     img: 'https://github.com/Thiago.png',
   },
   {
     name: 'Fernanda (Engenheira de Processos)',
     username: '@fernanda_eng',
     body: 'O modelo da Fix2Zero aproveita o CO₂ residual de biomassa, gerando combustível verde de forma eficiente e inovadora.',
     img: 'https://github.com/Fernanda.png',
   },
   {
     name: 'Carlos (Especialista em Sustentabilidade)',
     username: '@carlos_sustentavel',
     body: 'Conectar biomassa, Etanol e Hidrogênio Verde é o futuro da descarbonização. O Fix2Zero está liderando essa transformação.',
     img: 'https://github.com/Carlos.png',
   },
   {
     name: 'Juliana (Consultora de Energia Verde)',
     username: '@juliana_green',
     body: 'A inovação tecnológica do Fix2Zero torna o Metanol Verde uma realidade acessível para descarbonizar a matriz energética.',
     img: 'https://github.com/Juliana.png',
   },
   {
     name: 'Ricardo (Diretor de Operações Marítimas)',
     username: '@ricardo_maritime',
     body: 'A transição para o Metanol Verde é essencial para o transporte marítimo. A Fix2Zero está um passo à frente.',
     img: 'https://github.com/Ricardo.png',
   },
   {
     name: 'Ana (Analista de Planejamento)',
     username: '@ana_planejamento',
     body: 'Com as ferramentas preditivas do Fix2Zero, conseguimos planejar plantas sustentáveis e otimizadas.',
     img: 'https://github.com/Ana.png',
   },
   {
     name: 'Marcos (Especialista em Biomassa)',
     username: '@marcos_biomassa',
     body: 'Integrar CO₂ de biomassa em um modelo de produção eficiente é uma solução única que só o Fix2Zero oferece.',
     img: 'https://github.com/Marcos.png',
   },
   {
     name: 'Carolina (Engenheira de Projetos)',
     username: '@carolina_proj',
     body: 'A precisão das análises do Fix2Zero garante decisões estratégicas para viabilizar plantas conectadas.',
     img: 'https://github.com/Carolina.png',
   },
   {
     name: 'Pedro (Especialista em Hidrogênio Verde)',
     username: '@pedro_h2green',
     body: 'O Fix2Zero é um marco na produção de Hidrogênio Verde, unindo eficiência e sustentabilidade.',
     img: 'https://github.com/Pedro.png',
   },
   {
     name: 'Mariana (Head de Estratégia)',
     username: '@mariana_strategy',
     body: 'Decisões estratégicas para descarbonização começam com o Fix2Zero. O impacto vai além das emissões.',
     img: 'https://github.com/Mariana.png',
   },
   {
     name: 'Luiz (Diretor de Energia)',
     username: '@luiz_energy',
     body: 'O modelo Fix2Zero reduz custos e acelera a transição para combustíveis sustentáveis como o Metanol Verde.',
     img: 'https://github.com/Luiz.png',
   },
 ];
 
const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

function ReviewCard({
   img,
   name,
   username,
   body,
}: {
   img: string
   name: string
   username: string
   body: string
}) {
   return (
      <figure
         className={cn(
            'relative w-64 cursor-pointer overflow-hidden p-4 border-2 border-black bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300 translate-x-[-4px] translate-y-[-4px] rounded-md shadow-[2px_2px_0px_black] hover:translate-x-[0px] hover:translate-y-[0px] hover:shadow-none',
         )}
      >
         <div className="flex flex-row items-center gap-2">
            <Image className="rounded-full" width="32" height="32" alt="" src={img} />
            <div className="flex flex-col">
               <figcaption className="text-sm font-medium dark:text-white">
                  {name}
               </figcaption>
               <p className="text-xs font-medium dark:text-white/40">{username}</p>
            </div>
         </div>
         <blockquote className="mt-2 text-sm">{body}</blockquote>
      </figure>
   )
}

export function Testimonials() {
   return (
      <div className="bg-background relative flex size-full flex-col items-center justify-center overflow-hidden py-20 ">
         <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map(review => (
               <ReviewCard key={review.username} {...review} />
            ))}
         </Marquee>
         <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map(review => (
               <ReviewCard key={review.username} {...review} />
            ))}
         </Marquee>
         <div className="dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white"></div>
         <div className="dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white"></div>
      </div>
   )
}

