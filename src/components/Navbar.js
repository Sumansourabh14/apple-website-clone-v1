import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faBagShopping, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Navbar() {
    const navElements = [
        {
            id: 1,
            name: "Store",
            link: ""
        },
        {
            id: 2,
            name: "Mac",
            link: ""
        },
        {
            id: 3,
            name: "iPad",
            link: ""
        },
        {
            id: 4,
            name: "iPhone",
            link: ""
        },
        {
            id: 5,
            name: "Watch",
            link: ""
        },
    ];

    const [navUl, setNavUl] = useState(false);

    function handleClick() {
        setNavUl(!navUl);
    }

    return (
        <header className="fixed left-0 right-0 bg-stone-700">
            <nav className="container px-4 py-2 text-white mx-auto flex justify-between items-center">
                {!navUl ? (
                    <button onClick={handleClick} className="md:hidden text-xl">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    ) : (
                    <button onClick={handleClick} className="md:hidden text-xl">
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                    )
                }
                
                {/* <a onClick={handleClick} className="md:hidden">
                    <FontAwesomeIcon icon={faBars} />
                </a>
                <a className="md:hidden">
                    <FontAwesomeIcon icon={faXmark} />
                </a> */}
                <a href="https://www.apple.com/in/">
                    <FontAwesomeIcon icon={faApple} className="text-xl" />
                </a>
                <ul className={(navUl ? "flex" : "hidden") + " flex-col md:flex md:flex-row md:gap-4 md:text-sm absolute top-10 left-0 px-10 right-0 md:static bg-stone-700"}>
                    {navElements.map(navEl => {
                        return (
                            <li key={navEl.id} className="py-3 border-b md:px-0 md:py-0 md:border-none">
                                <a href={navEl.link}>{navEl.name}</a>
                            </li>
                        )
                    })}
                </ul>
                <a href="https://www.apple.com/in/shop/goto/bag">
                    <FontAwesomeIcon icon={faBagShopping} />
                </a>
            </nav>
        </header>
    )
}

export default Navbar;