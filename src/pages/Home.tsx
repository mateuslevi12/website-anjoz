import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Home() {
    return (
        <>
            <div className="flex flex-col gap-14 p-4">
                <div className=" h-screen">
                    <header className="w-full flex items-center justify-center">
                        <div>
                            <img src="src\assets\logo-anjoz.svg" alt="logo-anjoz-productions" />
                        </div>
                        <div className="flex gap-12 w-[75%] items-center justify-center">
                            <p className="text-xl">Home</p>
                            <p className="text-xl">Serviços</p>
                            <p className="text-xl">Ajuda</p>
                        </div>
                        <Button className="bg-corPrimariaAnjoz">Contato</Button>
                    </header>
                    <section className="flex justify-between items-center h-[80%] gap-10">
                        <div className="flex flex-col gap-12 pl-10 justify-center items-center w-[50%] ">
                            <h1 className="font-semibold text-6xl ">Sua marca com inovação & estratégia</h1>
                            <h3 className="text-[#575757] text-xl ">Impulsionando o Sucesso da Sua Empresa com Soluções Estratégicas e Personalizadas em Marketing Digital para Cada Negócio</h3>
                            <div className="flex gap-2 w-full h-14">
                                <Input placeholder="Seu email" className="h-auto" />
                                <Button className="bg-corPrimariaAnjoz px-6 h-auto">Enviar</Button>
                            </div>
                        </div>
                        <div className="w-[50%]">
                            <img src="src\assets\computador-anjoz.svg" alt="computador-anjoz-productions" />
                        </div>
                    </section>
                </div>
                <div className="px-10 h-screen flex justify-center items-center">
                    <section className="flex justify-between gap-10 p-10 rounded-tl-3xl rounded-br-3xl bg-corPrimariaAnjoz rounded">
                        <div className="flex flex-col gap-12  w-[50%] ">
                            <h2 className="text-white font-semibold text-6xl ">QUEM SOMOS</h2>
                            <h3 className="text-white text-2xl ">
                                A Anj0z.Productions nasceu com o propósito de oferecer soluções estratégicas e inovadoras para empresas que buscam fortalecer sua presença no mercado digital. Desde o início, entendemos que uma boa estratégia é a base para o sucesso de qualquer campanha, por isso, nos dedicamos a desenvolver planejamentos detalhados que garantem resultados sustentáveis e alinhados aos objetivos de nossos clientes.
                            </h3>

                        </div>
                        <div className="w-[50%] flex justify-center items-center">
                            <img src="src\assets\anjoz-anjoz.png" alt="kauã-anjos" />
                        </div>
                    </section>
                </div>
                <div className="px-10 h-screen flex justify-center items-center">
                    <section className="flex justify-between gap-10 p-10 rounded-tl-3xl rounded-br-3xl bg-corPrimariaAnjoz rounded">
                        <div>
                            <div></div>
                        </div>
                        <div className="flex flex-col gap-12  w-[50%] ">
                            <h2 className="text-white font-semibold text-6xl ">QUEM SOMOS</h2>
                            <h3 className="text-white text-2xl ">
                                A Anj0z.Productions nasceu com o propósito de oferecer soluções estratégicas e inovadoras para empresas que buscam fortalecer sua presença no mercado digital. Desde o início, entendemos que uma boa estratégia é a base para o sucesso de qualquer campanha, por isso, nos dedicamos a desenvolver planejamentos detalhados que garantem resultados sustentáveis e alinhados aos objetivos de nossos clientes.
                            </h3>

                        </div>
                        <div className="w-[50%] flex justify-center items-center">
                            <img src="src\assets\anjoz-anjoz.png" alt="kauã-anjos" />
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
