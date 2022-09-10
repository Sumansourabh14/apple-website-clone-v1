import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Offer(props) {
    return (
        <div className="bg-stone-100">
            <div className={props.classes + " container mx-auto text-center py-2"}>
                <p className="">
                    Get 5% instant Cashback up to ₹6000 with qualifying HDFC Bank credit cards on orders over ₹54900.‡ <a href="https://www.apple.com/in/shop/goto/ways_to_buy" 
                    className="text-blue-500 hover:underline">Learn more
                        <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Offer;