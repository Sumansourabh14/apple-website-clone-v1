import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BlackBg(props) {
    return (
        <section className="bg-black text-white">
            {/* <a href="https://www.apple.com/in/iphone-14-pro/" className="text-center pt-12 flex flex-col gap-2">
                <h2 className="text-4xl lg:text-6xl font-bold">iPhone 14 Pro</h2>
                <h3 className="text-xl lg:text-3xl">Pro. Beyond.</h3>
                <p className="text-stone-400 text-lg">Available starting from 16 September</p>
                <div className="text-sky-400 flex justify-center gap-8">
                    <a href="" className="text-lg">Learn more <FontAwesomeIcon icon={faChevronRight} className="text-xs" /></a>
                    <a href="" className="text-lg">Pre-order <FontAwesomeIcon icon={faChevronRight} className="text-xs" /></a>
                </div>
                <div className="border-2 pt-10">
                    <img src="https://www.apple.com/v/iphone-14-pro/a/images/overview/hero/hero_iphone_14_pro__kzr001ge0262_large.jpg"
                        alt="iPhone 14 Pro"
                        className="max-w-xs lg:max-w-lg mx-auto" />
                </div>
            </a> */}

            <a href={props.mainLink} className="text-center pt-12 flex flex-col gap-2">
                <h2 className="text-4xl lg:text-6xl font-bold">{props.title}</h2>
                <h3 className="text-xl lg:text-3xl">{props.subtitle}</h3>
                <p className="text-stone-400 text-lg lg:text-xl">{props.description}</p>
                <div className="text-sky-600 flex justify-center gap-8">
                    <a href={props.learnMoreLink} className="text-lg lg:text-xl hover:underline">Learn more
                        <FontAwesomeIcon icon={faChevronRight} className="text-xs pl-2" />
                    </a>
                    <a href={props.orderLink} className="text-lg lg:text-xl hover:underline">{props.orderLinkText}
                        <FontAwesomeIcon icon={faChevronRight} className="text-xs pl-2" />
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

export default BlackBg;