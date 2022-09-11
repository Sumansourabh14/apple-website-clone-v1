import CarouselData from "./CarouselData";

function Carousel() {
    return (
        <section>
            <div className="container mx-auto">
                <div className="carousel">
                    {CarouselData.map(item => {
                        return (
                            <a href={item.link} key={item.id} id={item.slide} className="carousel-item relative w-full py-48 lg:py-64 bg-center bg-contain bg-no-repeat" style={{backgroundImage: `url(${item.img})`}}>
                                {/* <div className="text-white flex flex-col justify-end items-center border-2">
                                    <strong>{item.title}</strong>
                                    <p>{item.subtitle}</p>
                                    <div>
                                        <a href={item.link} className="bg-stone-100 text-black px-10 py-3 rounded-3xl font-bold hover:bg-stone-300">
                                            Stream now
                                        </a>
                                    </div>
                                </div> */}
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-10 right-10 top-1/2">
                                    <a href={`#${item.prev}`} className="text-black hover:text-stone-500 duration-150 font-bold text-3xl md:text-5xl">❮</a> 
                                    <a href={`#${item.next}`} className="text-black hover:text-stone-500 duration-150 font-bold text-3xl md:text-5xl">❯</a>
                                </div>
                            </a>
                        )
                    })}
                </div>
                
            </div>
        </section>
    )
}

export default Carousel;