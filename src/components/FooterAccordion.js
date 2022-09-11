import { useState } from "react";
import { ShopAndLearn } from "./FooterData";

function FooterAccordion() {
    const [accordion, setAccordion] = useState(false);

    function handleClick() {
        setAccordion(!accordion);
    }

    return (
        <div className="mt-4 text-black">
            <div className="py-2 border-b border-stone-300">
                <div onClick={handleClick} className="flex justify-between cursor-pointer">
                    <h2>Shop and Learn</h2>
                    {/* <span>+</span> */}
                    {accordion ? <span>x</span> : <span>+</span>}
                </div>
                <div className={(accordion ? "flex" : "hidden") + " flex-col gap-2 px-8 py-2 text-sm"}>
                    {ShopAndLearn.map(item => {
                        return (
                            <ul>
                                <li key={item.id}>
                                    <a href={item.link}>{item.name}</a>
                                </li>
                            </ul>
                        )
                    })}
                </div>
            </div>
        </div>  
    )
}

export default FooterAccordion;