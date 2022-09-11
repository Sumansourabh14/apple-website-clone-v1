import { useState } from "react";
import { AboutApple, AppleStore, Services, ShopAndLearn } from "./FooterData";

function FooterAccordion() {
    const [accordion1, setAccordion1] = useState(false);

    function handleClick1() {
        setAccordion1(!accordion1);
    }

    const [accordion2, setAccordion2] = useState(false);

    function handleClick2() {
        setAccordion2(!accordion2);
    }

    const [accordion3, setAccordion3] = useState(false);

    function handleClick3() {
        setAccordion3(!accordion3);
    }

    const [accordion4, setAccordion4] = useState(false);

    function handleClick4() {
        setAccordion4(!accordion4);
    }

    return (
        <div className="mt-4 text-stone-600">
            <div className="py-2 border-b border-stone-300">
                <div onClick={handleClick1} className="flex justify-between cursor-pointer hover:text-black">
                    <h2>Shop and Learn</h2>
                    {accordion1 ? <span>x</span> : <span>+</span>}
                </div>
                <div className={(accordion1 ? "flex" : "hidden") + " flex-col gap-2 px-8 py-2 text-sm"}>
                    {ShopAndLearn.map(item => {
                        return (
                            <ul>
                                <li key={item.id}>
                                    <a className="hover:underline" href={item.link}>{item.name}</a>
                                </li>
                            </ul>
                        )
                    })}
                </div>
            </div>

            <div className="py-2 border-b border-stone-300">
                <div onClick={handleClick2} className="flex justify-between cursor-pointer hover:text-black">
                    <h2>Services</h2>
                    {accordion2 ? <span>x</span> : <span>+</span>}
                </div>
                <div className={(accordion2 ? "flex" : "hidden") + " flex-col gap-2 px-8 py-2 text-sm"}>
                    {Services.map(item => {
                        return (
                            <ul>
                                <li key={item.id}>
                                    <a className="hover:underline" href={item.link}>{item.name}</a>
                                </li>
                            </ul>
                        )
                    })}
                </div>
            </div>

            <div className="py-2 border-b border-stone-300">
                <div onClick={handleClick3} className="flex justify-between cursor-pointer hover:text-black">
                    <h2>Apple Store</h2>
                    {accordion3 ? <span>x</span> : <span>+</span>}
                </div>
                <div className={(accordion3 ? "flex" : "hidden") + " flex-col gap-2 px-8 py-2 text-sm"}>
                    {AppleStore.map(item => {
                        return (
                            <ul>
                                <li key={item.id}>
                                    <a className="hover:underline" href={item.link}>{item.name}</a>
                                </li>
                            </ul>
                        )
                    })}
                </div>
            </div>

            <div className="py-2 border-b border-stone-300">
                <div onClick={handleClick4} className="flex justify-between cursor-pointer hover:text-black">
                    <h2>About Apple</h2>
                    {accordion4 ? <span>x</span> : <span>+</span>}
                </div>
                <div className={(accordion4 ? "flex" : "hidden") + " flex-col gap-2 px-8 py-2 text-sm"}>
                    {AboutApple.map(item => {
                        return (
                            <ul>
                                <li key={item.id}>
                                    <a className="hover:underline" href={item.link}>{item.name}</a>
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