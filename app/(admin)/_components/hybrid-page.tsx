"use client";

import React, { useState, useContext } from "react";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { Card } from "@/components/ui/card";
import { GraficoReducaoCO2 } from "./charts/grafico-c2o";

interface Planta {
    nome: string;
    localizacao: string;
    dataInauguracao: string;
    capacidadeProducao: number;
    eficiencia: number; 
}

const plantas: Planta[] = [
    {
        nome: "Planta Híbrida A",
        localizacao: "Ceará, Brasil",
        dataInauguracao: "2023-01-15",
        capacidadeProducao: 500,
        eficiencia: 85,
    },
    {
        nome: "Planta Híbrida B",
        localizacao: "Pernambuco, Brasil",
        dataInauguracao: "2024-06-20",
        capacidadeProducao: 750,
        eficiencia: 90,
    },
    {
        nome: "Planta Híbrida C",
        localizacao: "Bahia, Brasil",
        dataInauguracao: "2022-10-05",
        capacidadeProducao: 600,
        eficiencia: 80,
    },
];

export function HybridPlantManagementPage() {
    const [selectedPlant, setSelectedPlant] = useState<Planta | null>(plantas[0]);
    const [openCombobox, setOpenCombobox] = React.useState(false);

    return (
        <div className="w-full p-6">
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-6 rounded-lg drop-shadow-md space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-4">
                    <p className="text-md text-muted-foreground">Selecione uma Planta:</p>
                    <Popover open={openCombobox} onOpenChange={setOpenCombobox}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                size="sm"
                                className="w-[200px] justify-center border-2 border-black bg-white"
                            >
                                {selectedPlant ? (
                                    <>{selectedPlant.nome}</>
                                ) : (
                                    <>+ Selecione uma Planta</>
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent
                            className="p-0 border-2 border-black"
                            side="right"
                            align="start"
                        >
                            <Command>
                                <CommandInput placeholder="Procurar planta..." />
                                <CommandList>
                                    <CommandEmpty>Nenhuma planta encontrada.</CommandEmpty>
                                    <CommandGroup>
                                        {plantas.map((planta, index) => (
                                            <CommandItem
                                                key={index}
                                                value={planta.nome}
                                                onSelect={() => {
                                                    setSelectedPlant(planta);
                                                    setOpenCombobox(false);
                                                }}
                                            >
                                                <span>{planta.nome}</span>
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>

            {selectedPlant && (
                <>
                    <div className="p-4 rounded-lg mb-6 drop-shadow-md bg-roxo">
                        <h1 className="text-2xl font-bold text-center mb-8 text-white">
                            Detalhes da Planta Híbrida
                        </h1>
                        <div className="flex flex-col md:flex-row items-center justify-around space-y-4 md:space-y-0">
                            <Card className="text-lg h-40 w-60 flex flex-col items-center justify-center text-center border-none drop-shadow-md rounded-lg">
                                <p className="font-bold">Nome da Planta</p>
                                {selectedPlant.nome}
                            </Card>
                            <Card className="text-lg h-40 w-60 flex flex-col items-center justify-center text-center border-none drop-shadow-md rounded-lg">
                                <p className="font-bold">Localização</p>
                                {selectedPlant.localizacao}
                            </Card>
                            <Card className="text-lg h-40 w-60 flex flex-col items-center justify-center text-center border-none drop-shadow-md rounded-lg">
                                <p className="font-bold">Data de Inauguração</p>
                                {selectedPlant.dataInauguracao}
                            </Card>
                            <Card className="text-lg h-40 w-60 flex flex-col items-center justify-center text-center border-none drop-shadow-md rounded-lg">
                                <p className="font-bold">C. de Produção</p>
                                {selectedPlant.capacidadeProducao} ton
                            </Card>
                            <Card className="text-lg h-40 w-60 flex flex-col items-center justify-center text-center border-none drop-shadow-md rounded-lg">
                                <p className="font-bold">Eficiência</p>
                                {selectedPlant.eficiencia}%
                            </Card>
                        </div>
                    </div>
                </>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 mb-6">
                <GraficoReducaoCO2
                    nome="Planta Híbrida A"
                    subtitle="Progresso na Redução de CO₂"
                    reducao={65} 
                    impactoFinal="Contribuindo para um futuro mais sustentável"
                />
            </div>
        </div>
    );
}
