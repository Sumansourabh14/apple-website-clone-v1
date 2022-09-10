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
                                className="w-100 h-screen bg-no-repeat bg-center bg-auto"
                            >
                                <p className="text-center text-black">{carouselEl.subtitle}</p>
                            </div>

                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Carousel;