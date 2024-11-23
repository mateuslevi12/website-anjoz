import { HTMLAttributes } from "react";
import { Card } from "./ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Quote } from "lucide-react";

interface IDepoimento extends HTMLAttributes<HTMLDivElement>{
    nomeEmpresa: string;
    nicho: string;
    depoimento: string;
    logo: string;
}

export function Depoimento({ depoimento, logo, nicho, nomeEmpresa, className }: IDepoimento) {
    return (
        <>
            <Card className={`rounded rounded-tl-3xl rounded-br-3xl ${className} p-4 w-[30%] h-[100%] flex flex-col gap-4`}>
                <div className="flex gap-2 items-center">
                   
                    <img src={logo} alt="" />
                    <div className="flex flex-col">
                        <p className="font-bold">{nomeEmpresa}</p>
                        <p>{nicho}</p>
                    </div>
                </div>
                <p className="text-xl">
                    {depoimento}
                </p>
                <div className="w-full flex justify-end text-right ">
                    <Quote/>
                </div>
            </Card>
        </>
    )
}