import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function WhiteBg(props) {
    return (
        <section className="bg-white text-black py-3">
            <a href={props.mainLink} className="text-center pt-12 flex flex-col gap-2 bg-stone-100">
                <h2 className="text-4xl lg:text-6xl font-semibold md:font-bold">{props.title}</h2>
                <h3 className="text-xl lg:text-3xl">{props.subtitle}</h3>
                <p className="text-stone-600 text-lg lg:text-xl">{props.description}</p>
                <div className="text-sky-600 flex justify-center gap-8">
                    <a href={props.learnMoreLink} className="text-lg lg:text-xl hover:underline">Learn more
                        <FontAwesomeIcon icon={faChevronRight} className="text-xs pl-1" />
                    </a>
                    <a href={props.orderLink} className="text-lg lg:text-xl hover:underline">{props.orderLinkText}
                        <FontAwesomeIcon icon={faChevronRight} className="text-xs pl-1" />
                    </a>
                </div>
                <div className="pt-8 lg:pt-10">
                    <img 
                        src={props.imageSrc}
                        alt={props.imageAlt}
                        className="max-w-xs lg:max-w-lg mx-auto" 
                    />
                </div>
            </a>
        </section>
    )
}

export default WhiteBg;