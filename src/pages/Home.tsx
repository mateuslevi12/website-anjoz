import { Depoimento } from "@/components/Depoimento";
import { Solucao } from "@/components/Solucao";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, Grid2x2Plus, ShieldCheck } from "lucide-react";
import { planos } from "./planos";
import { Plano } from "@/components/Plano";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Carrossel } from "@/components/Carrossel";

export function Home() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const videos = [
        {
            url: '/assets/video-1-anjoz.mp4',
            titulo: 'Brasilidade Urbanismo',
            descricao: 'Uma descrição incrível para Brasilidade Urbanismo.',
        },
        {
            url: '/assets/Caio-Thai Terra Brasilis .mp4',
            titulo: 'Caio Thai Terra Brasilis',
            descricao: 'Veja como o projeto Terra Brasilis foi desenvolvido.',
        },
        {
            url: '/assets/THAI-TERRA BRASILIS.mp4',
            titulo: 'THAI Terra Brasilis',
            descricao: 'Um vídeo detalhado sobre o THAI Terra Brasilis.',
        },
        {
            url: '/assets/Decorado-Sensia.mp4',
            titulo: 'Decorado Sensia',
            descricao: 'Explore o incrível decorado do projeto Sensia.',
        },
    ];
    

    return (
        <>
            <div className="flex flex-col gap-14 p-4 justify-center  w-full">
                <div className="sm:h-screen w-full">
                    <header className="w-full flex items-center justify-between px-4 py-3 sm:py-0 ">

                        <div>
                            <img src="/assets/logo-anjoz.svg" alt="logo-anjoz-productions" className="h-14 sm:h-auto" />
                        </div>

                        <div className="sm:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir Menu">
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>

                        <nav
                            className={`${isMenuOpen ? "block" : "hidden"
                                } absolute top-20 left-0 w-full sm:static ${isMenuOpen ? 'bg-white p-4 shadow-xl' : ''}  sm:flex sm:items-center sm:gap-12 sm:w-auto`}
                        >
                            <ul className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                                <li className="text-xl cursor-pointer">
                                    <a href="#home">Home</a>
                                </li>
                                <li className="text-xl cursor-pointer">
                                    <a href="#servicos">Serviços</a>
                                </li>
                                <li className="text-xl cursor-pointer">
                                    <a href="#ajuda">Ajuda</a>
                                </li>
                                <li>
                                    <Button className="bg-corPrimariaAnjoz">Contato</Button>
                                </li>
                            </ul>
                        </nav>
                    </header>
                    <section className="flex-col sm:flex-row flex justify-between items-center sm:h-[80%] gap-10 ">
                        <div className="flex flex-col gap-6 sm:gap-12 sm:pl-10 justify-center items-center sm:w-[50%]">
                            <h1 className="font-semibold text-4xl md:text-6xl ">Sua marca com inovação & estratégia</h1>
                            <h3 className="text-[#575757] text-xl ">Impulsionando o Sucesso da Sua Empresa com Soluções Estratégicas e Personalizadas em Marketing Digital para Cada Negócio</h3>
                            <div className="flex gap-2 w-full h-14">
                                <Input placeholder="Seu email" className="h-auto" />
                                <Button className="bg-corPrimariaAnjoz px-6 h-auto">Enviar</Button>
                            </div>
                        </div>
                        <div className="sm:w-[50%]">
                            <img src="assets\computador-anjoz.png" alt="computador-anjoz-productions" />
                        </div>
                    </section>
                </div>
                <div className="sm:px-10 sm:h-screen flex justify-center items-center w-full">
                    <section className="flex flex-col sm:flex-row justify-between gap-10 p-10 rounded-tl-3xl rounded-br-3xl bg-corPrimariaAnjoz rounded">
                        <div className="flex flex-col gap-12  sm:w-[50%] ">
                            <h2 className="text-white font-semibold text-3xl md:text-6xl ">Quem somos</h2>
                            <h3 className="text-white md:text-2xl ">
                                A Anj0z.Productions nasceu com o propósito de oferecer soluções estratégicas e inovadoras para empresas que buscam fortalecer sua presença no mercado digital. Desde o início, entendemos que uma boa estratégia é a base para o sucesso de qualquer campanha, por isso, nos dedicamos a desenvolver planejamentos detalhados que garantem resultados sustentáveis e alinhados aos objetivos de nossos clientes.
                            </h3>

                        </div>
                        <div className="sm:w-[50%] flex justify-center items-center">
                            <img src="assets\anjoz-anjoz.png" alt="kauã-anjos" />
                        </div>
                    </section>
                </div>
                <div className="sm:px-10 sm:h-screen flex justify-center items-center w-full">
                    <section className="flex flex-col sm:flex-row justify-between gap-10 sm:p-10 ">
                        <div className="flex flex-col gap-12 sm:w-[50%]">
                            <div className="flex gap-2 items-center">
                                <p className="bg-[#20cfc644] font-semibold text-[#072668] p-1">EXPERIÊNCIA</p>
                                <Separator color="black" className="w-[10%] bg-black" />
                            </div>
                            <h2 className="font-semibold text-xl md:text-5xl ">Transformando Empresas com Soluções Estratégicas de Marketing Digital</h2>
                            <h3 className="md:text-xl ">
                                Guiamos sua marca no caminho para o sucesso digital por meio de estratégias personalizadas e inovadoras. Alavanque seus resultados com abordagens baseadas em dados e garanta uma presença digital forte e impactante, mesmo em um cenário digital em constante evolução.
                            </h3>
                            <h3>
                                Estamos comprometidos em fornecer orientações especializadas, estratégias comprovadas e uma abordagem personalizada para garantir o crescimento sustentável da sua marca.
                            </h3>
                            <Button variant='outline'>Explore os serviços</Button>
                        </div>
                        <div className="sm:w-[50%] flex justify-center items-center">
                            <img src="assets\graficos-anjoz.png" alt="kauã-anjos" />
                        </div>
                    </section>
                </div>
                <div className="px-10 sm:h-screen flex justify-center items-center w-full">
                    <section className="flex justify-between gap-10 sm:p-10 w-full ">
                        
                        <div className="flex flex-col gap-12  w-full">
                            
                            <h2 className="font-semibold text-2xl md:text-5xl">Últimos trabalhos</h2>

                           <Carrossel video={videos} />
                        </div>

                    </section>
                </div>
                <div id="servicos" className="sm:px-10 sm:h-screen flex justify-center items-center w-full">
                    <section className="flex flex-col sm:flex-row  justify-between gap-10 sm:p-10 ">
                        <div className="sm:w-[50%] flex justify-center items-center">
                            <img src="assets\camera-anjoz.png" alt="kauã-anjos" />
                        </div>
                        <div className="flex flex-col gap-6  sm:w-[50%] ">
                            <div className="flex gap-2 items-center">
                                <p className="bg-[#20cfc644] font-semibold text-[#072668] p-1">SERVIÇOS</p>
                                <Separator color="black" className="w-[10%] bg-black" />
                            </div>
                            <h2 className="font-semibold md:text-5xl ">Nossas Soluções Ajudam a Impulsionar Sua Marca e Conquistar Novos Patamares no Marketing Digital</h2>
                            <h3 className="md:text-xl ">
                                Inicie uma jornada para desbloquear novas oportunidades no marketing digital e faça sua marca crescer com nossas soluções abrangentes e especializadas.
                            </h3>
                            <div className="flex sm:flex-row flex-col gap-6 sm:gap-8">
                                <div className="flex flex-col gap-6">
                                    <div className="flex gap-2 items-center">
                                        <span className="w-4 h-4 bg-[#072668] rounded"></span>
                                        <p className="font-semibold">Vídeos de Treinamento</p>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <span className="w-4 h-4 bg-[#395186] rounded"></span>
                                        <p className="font-semibold">Vídeos Promocionais</p>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <span className="w-4 h-4 bg-[#596E9A] rounded"></span>
                                        <p className="font-semibold">Vídeos Institucionais</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <div className="flex gap-2 items-center">
                                        <span className="w-4 h-4 bg-[#8392B3] rounded"></span>
                                        <p className="font-semibold">Vídeos de Eventos</p>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <span className="w-4 h-4 bg-[#ABB5CC] rounded"></span>
                                        <p className="font-semibold">Vídeos de Produtos</p>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <span className="w-4 h-4 bg-[#D5DAE5] rounded"></span>
                                        <p className="font-semibold">Vídeos de Viagem</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
                <div className="sm:px-10 sm:h-screen flex justify-center items-center w-full">
                    <section className="flex justify-between gap-10 sm:p-10 ">

                        <div className="flex flex-col gap-12  ">
                            <div className="sm:w-[50%] flex flex-col gap-12">
                                <div className="flex gap-2 items-center">
                                    <p className="bg-[#20cfc644] font-semibold text-[#072668] p-1">TESTEMUNHAS</p>
                                    <Separator color="black" className="w-[10%] bg-black" />
                                </div>
                                <h2 className="font-semibold text-2xl md:text-5xl ">O Que Nossos Clientes Dizem</h2>
                                <h3 className="text-base md:text-xl ">
                                    Descubra as histórias de sucesso e a satisfação de empresas que impulsionaram sua presença online com nossas soluções estratégicas e personalizadas em marketing digital.
                                </h3>
                            </div>
                            <div className="flex sm:flex-row flex-col gap-4 sm:gap-0 justify-between">
                                <Depoimento nomeEmpresa={"Catunda & Fiuza"} nicho={"Imobiliária"} depoimento={"A Anj0z.Productions fez nossa marca bombar nas redes! O engajamento cresceu muito e a equipe é super atenciosa."} logo={"assets\\catunda-logo.png"} />
                                <Depoimento className="bg-corPrimariaAnjoz text-white" nomeEmpresa={"Jungle Software"} nicho={"Tecnologia"} depoimento={"Os resultados que tivemos com as campanhas digitais foram incríveis! O pessoal da Anj0z.Productions realmente sabe o que faz."} logo={"assets\\jungle-logo.png"} />
                                <Depoimento nomeEmpresa={"Crochet By Karla"} nicho={"Artesanato"} depoimento={"Com a ajuda deles, nossa presença digital decolou! Ótimas soluções e sempre pensando no que a gente precisa."} logo={"assets\\crochet-logo.png"} />
                            </div>
                        </div>

                    </section>
                </div>
                <div className="sm:px-10 sm:h-screen flex justify-center items-center w-full">
                    <section className="flex justify-between gap-10 sm:p-10 ">

                        <div className="flex flex-col gap-20  ">
                            <div className="sm:w-[60%] flex flex-col gap-12">
                                <h2 className="font-semibold text-2xl md:text-5xl ">Nossa Equipe Oferece Soluções Valiosas a Qualquer Momento e em Qualquer Situação</h2>
                            </div>
                            <div className="flex sm:flex-row flex-col gap-4 sm:gap-0 justify-between">
                                <Solucao className="bg-[#DAFAFC]" solucao={"Orientação Especializada"} descricao={"Conte com profissionais experientes para fornecer consultoria personalizada em estratégias de marketing digital, alinhadas aos seus objetivos únicos."} icone={GraduationCap} corIcone={"#072668"} />
                                <Solucao className="bg-[#FDE4E4]" solucao={"Gestão de Riscos Digitais"} descricao={"Lidamos com desafios digitais de forma proativa, garantindo a segurança da sua marca e a estabilidade das suas campanhas."} icone={ShieldCheck} corIcone={"#FF6B6B"} />
                                <Solucao className="bg-[#DAFCDF]" solucao={"Soluções Personalizadas"} descricao={"Receba soluções de marketing digital sob medida, criadas para enfrentar os desafios específicos do seu negócio e alcançar seus objetivos de crescimento."} icone={Grid2x2Plus} corIcone={"#25BA6A"} />
                            </div>
                        </div>

                    </section>
                </div>
                <div className="sm:px-10 sm:h-screen flex justify-center items-center  w-full">
                    <section className="flex justify-between gap-10 sm:p-10  w-full">
                        <div className="flex flex-col gap-12 w-full ">
                            <div className="sm:w-[60%] flex flex-col gap-2">
                                <h2 className="font-semibold text-2xl md:text-5xl ">Preços</h2>
                                <h3 className="md:text-xl ">
                                    Escolha o plano ideal para você e impulsione seus resultados!
                                </h3>
                            </div>

                            <div className="flex sm:flex-row flex-col gap-4 sm:gap-0 justify-between sm:items-center">
                                {
                                    planos.map((plano, index) => {
                                        return (
                                            <>
                                                <Plano key={index} className={plano.className} nomePlano={plano.nomePlano} valor={plano.valor} valorAntigo={plano.valorAntigo} caracteristicas={plano.caracteristicas} />
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>

                    </section>
                </div>
                <div className="sm:px-10 sm:h-screen flex flex-col gap-6 justify-center w-full">
                    <h2 className="font-semibold md:text-5xl">Contato</h2>
                    <section className="flex flex-col sm:flex-row justify-between gap-10 p-10  bg-corPrimariaAnjoz rounded-xl">
                        <div className="flex flex-col gap-10  sm:w-[50%] ">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-white font-semibold text-3xl ">Vamos conectar estratégias!</h2>
                                <h3 className="text-white text-base ">
                                    Entre em contato e deixe a magia da inovação e estratégia transformar sua presença digital. Estamos prontos para levar sua marca a novos patamares juntos!
                                </h3>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Input className="text-white bg-blue-900 border-[#d4d8ff7a] placeholder:text-[#d4d8ffab]" placeholder="Nome da empresa" />
                                <Input className="text-white bg-blue-900 border-[#d4d8ff7a] placeholder:text-[#d4d8ffab]" placeholder="Email" />
                                <Input className="text-white bg-blue-900 border-[#d4d8ff7a] placeholder:text-[#d4d8ffab]" placeholder="Telefone" />
                                <Textarea className="text-white bg-blue-900 border-[#d4d8ff7a] placeholder:text-[#d4d8ffab]" rows={5} placeholder="Breve descrição sobre sua empresa." />
                                <Button className="bg-[#0051FF]">Enviar</Button>
                            </div>
                        </div>
                        <div className="sm:w-[50%] flex justify-center items-center">
                            <img src="assets\camera-pessoa-anjoz.png" alt="kauã-anjos" />
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
