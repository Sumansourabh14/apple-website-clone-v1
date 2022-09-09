import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faBagShopping, faBars } from "@fortawesome/free-solid-svg-icons";
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
            <nav className="border-2 container px-4 py-2 text-white mx-auto flex justify-between">
                <a onClick={handleClick} className="md:hidden">
                    <FontAwesomeIcon icon={faBars} />
                </a>
                <a>
                    <FontAwesomeIcon icon={faApple} />
                </a>
                <ul className={(navUl ? "flex" : "hidden") + " flex-col md:flex md:flex-row md:gap-4 md:text-sm absolute top-5 left-0 md:static"}>
                    {navElements.map(navEl => {
                        return (
                            <li key={navEl.id}>
                                <a href={navEl.link}>{navEl.name}</a>
                            </li>
                        )
                    })}
                </ul>
                <a href="">
                    <FontAwesomeIcon icon={faBagShopping} />
                </a>
            </nav>
        </header>
    )
}

export default Navbar;