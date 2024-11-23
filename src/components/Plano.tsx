import { HTMLAttributes } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Check } from "lucide-react";

export interface IPlano extends HTMLAttributes<HTMLDivElement> {
    nomePlano: string;
    valor: string;
    valorAntigo: string;
    caracteristicas: {
        quantidade: number
        descricao: string
    }[]
}

export function Plano({ caracteristicas, nomePlano, valor, valorAntigo, className }: IPlano) {
    return (
        <>
            <Card className={`p-4 flex flex-col gap-6 sm:w-[30%] sm:${className}`}>
                <div className="flex flex-col gap-1">
                    <p className="font-bold text-xs sm:text-sm">{nomePlano}</p>
                    <p className="font-bold text-2xl sm:text-4xl">{valor}</p>
                    <s className="text-gray-500 text-xs sm:text-sm ">{valorAntigo}</s>
                </div>
                <Button className="bg-[#7C67FE] rounded">Mais informações</Button>
                <div className="flex flex-col gap-2 ">
                    {
                        caracteristicas.map(caracteristica => {
                            return (
                                <div className="flex gap-2 items-center">
                                    <div className="bg-[#7C67FE] rounded-full p-1">
                                        <Check color="white" size={15}/>
                                    </div>
                                    <p className="text-sm sm:text-base">({caracteristica.quantidade}) {caracteristica.descricao}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </Card>
        </>
    )
}