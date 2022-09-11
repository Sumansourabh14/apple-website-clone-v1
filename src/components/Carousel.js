import CarouselData from "./CarouselData";

function Carousel() {
    return (
        <section>
            {/* <div className="container mx-auto">
                {CarouselData.map(carouselEl => {
                    return (
                        <div key={carouselEl.id}>
                            <div 
                                style={{backgroundImage: `url(${carouselEl.img})`}} 
                                className="w-100 h-screen bg-no-repeat bg-center bg-auto opacity-95"
                            >
                                <div className="text-white flex flex-col gap-4 p-8 items-center">
                                    <strong>{carouselEl.title}</strong>
                                    <p>{carouselEl.subtitle}</p>
                                    <div>
                                        <a href={carouselEl.link}
                                            className="bg-stone-100 text-black px-10 py-3 rounded-3xl font-bold hover:bg-stone-300"
                                        >
                                            Stream now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div> */}

            <div className="container mx-auto">
                <div className="carousel">
                    {CarouselData.map(item => {
                        return (
                            <div key={item.id} id={item.slide} className="carousel-item relative w-full py-48 bg-center bg-contain bg-no-repeat" style={{backgroundImage: `url(${item.img})`}}>
                                <div className="text-white flex flex-col gap-4 p-8 items-center">
                                    {/* <strong>{item.title}</strong>
                                    <p>{item.subtitle}</p>
                                    <div>
                                        <a href={item.link} className="bg-stone-100 text-black px-10 py-3 rounded-3xl font-bold hover:bg-stone-300">
                                            Stream now
                                        </a>
                                    </div> */}
                                </div>
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-10 right-10 top-1/2">
                                    <a href={item.prev} className="btn btn-circle">❮</a> 
                                    <a href={item.next} className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div> */}
        </section>
    )
}

export default Carousel;