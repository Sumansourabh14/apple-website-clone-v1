import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function GridGreyBg(props) {
    return (
        <section className="p-2 text-black">
            <a href={props.mainLink} className="bg-stone-50 text-center pt-12 flex flex-col gap-2">
                <h2 className="text-3xl lg:text-4xl font-bold italic w-64 md:w-80 mx-auto">
                    Get <span className="text-pink-600">supercharged</span> for university.
                </h2>
                <h3 className="text-xl lg:text-2xl">
                    {props.subtitle}   
                    <br/>
                    {props.description}
                </h3>
                <div className="text-sky-500 flex justify-center gap-8">
                    <a href={props.orderLink} className="text-lg lg:text-xl hover:underline">{props.orderLinkText}
                        <FontAwesomeIcon icon={faChevronRight} className="text-xs pl-1" />
                    </a>
                </div>
                <div className="lg:pt-2">
                    <img 
                        src={props.imageSrc}
                        alt={props.imageAlt}
                        // className="max-w-xs lg:max-w-sm mx-auto" 
                        className="w-auto h-80 mx-auto object-cover" 
                    />
                </div>
            </a>
        </section>
    )
}

export default GridGreyBg;