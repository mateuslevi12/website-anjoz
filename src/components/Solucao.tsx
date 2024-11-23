import { HTMLAttributes } from "react";
import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";

interface ISolucao extends HTMLAttributes<HTMLDivElement> {
    solucao: string;
    descricao: string;
    icone: LucideIcon;
    corIcone: string;
}

export function Solucao({ descricao, icone: Icon, solucao, className, corIcone }: ISolucao) {
    return (
        <Card className={`flex flex-col items-start gap-2 sm:w-[30%] p-4`}>
            <div className={`${className} p-2 rounded-full`}>
                <Icon size={40} color={corIcone} />
            </div>
                <p className="font-bold">{solucao}</p>
                <p className="text-[#575757] font-medium text-sm sm:text-lg">{descricao}</p>
           
        </Card>
    );
}
