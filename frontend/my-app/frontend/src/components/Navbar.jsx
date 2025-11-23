import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../data/index.js";

const Navbar = () => {
    const location = useLocation();
    const [active, setActive] = useState(location.pathname.slice(1) || "home");

    return (
        <nav className="w-full fixed top-0 right-0 p-5 sm:px-14 sm:py-4 flex justify-end m-2 z-50">
            <div>
                <ul className="flex flex-row flex-wrap gap-2 sm:gap-5 justify-center sm:justify-end">
                    {navLinks.map((nav) => (
                        <li key={nav.id}
                            className={`relative flex items-center pl-3 font-inter ${
                                active === nav.id ? "text-black" : "text-black/80"
                            } hover:text-gray-500 text-xs sm:text-l lg:text-xl font-bold pointer-events-auto cursor-pointer font-inter`}
                            onClick={() => setActive(nav.id)}>
                            <Link to={`/${nav.id}`}>{nav.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;