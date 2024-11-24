"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/app/(root)/_components/ui/navigation-menu";
import { TransitionLink } from "@/components/ui/transition-link";
import { Button } from "@/components/ui/button";
import { Slack } from "lucide-react";

interface NavigationProps {
  className: string
}

export function MegaNavigation({ className }: NavigationProps) {
  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <TransitionLink href={"/"}>Página Inicial</TransitionLink>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <TransitionLink href="/">
                  <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-logo p-6 no-underline outline-none focus:shadow-md">
                    <Slack className="h-6 w-6 text-white" />
                    <div className="mb-2 mt-4 text-lg font-medium text-white">
                      Fuel2Zero
                    </div>
                    <p className="text-sm leading-tight text-muted/70 dark:text-muted">
                      Utilizamos IA para analisar e interpretar dados,
                      proporcionando aumento de eficiência operacional e redução
                      de custos.
                    </p>
                  </div>
                </TransitionLink>
              </li>
              <ListItem href="/#visao" title="Nossa Visão">
                Qualidade e inovação para pequenas e médias empresas.
              </ListItem>
              <ListItem href="/#guide" title="Nossas Soluções">
                Transformando dados com eficiência.
              </ListItem>
              <ListItem href="/#faq" title="Perguntas Frequentes">
                Tire suas Dúvidas sobre o nosso produto.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/video" passHref>
            <Button variant={"ghost"}>Video Pitch</Button>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" passHref>
            <Button variant={"ghost"}>Sobre o Projeto</Button>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
