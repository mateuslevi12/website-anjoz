import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

interface ICarrossel {
    video: {
        url: string
        titulo: string
        descricao: string
    }[]
}

export function Carrossel({ video }: ICarrossel) {

    return (
        <Carousel className="w-full" opts={{
            loop: true,
            align: 'start',
            active: true,
        }}>
            <CarouselContent>
                {video.map((vd, index) => (
                    <CarouselItem key={index} className="sm:basis-1/3">
                        <div className="p-1 flex flex-col gap-2">

                            <video controls className="w-full  h-72 object-cover rounded-lg">
                                <source src={vd.url} type="video/mp4" />
                                Seu navegador não suporta o formato de vídeo.
                            </video>
                            <h2 className="font-bold">{vd.titulo}</h2>
                            <p>{vd.descricao}</p>

                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
