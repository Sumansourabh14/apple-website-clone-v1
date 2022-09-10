import CarouselData from "./CarouselData";

function Carousel() {
    return (
        <section>
            <div className="container mx-auto">
                {CarouselData.map(carouselEl => {
                    return (
                        <div key={carouselEl.id}>
                            <div 
                                style={{backgroundImage: `url(${carouselEl.img})`}} 
                                className="w-100 h-screen bg-no-repeat bg-center bg-auto bg-blend-overlay bg-stone-800"
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
            </div>
        </section>
    )
}

export default Carousel;