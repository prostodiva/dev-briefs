import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../data/index.js";

const Navbar = () => {
    const [active, setActive] = useState("home");

    return (
            <nav className="w-full fixed top-0 right-0 bg-transparent p-8 sm:px-20 sm:py-8 flex justify-end m-2">
                <div>
                    <ul className="flex flex-row flex-wrap gap-2 sm:gap-5 justify-center sm:justify-end">
                        {navLinks.map((nav) => (
                            <li key={nav.id}
                                className={`relative flex items-center pl-3 font-inter ${
                                    active === nav.id ? "text-gray-800" : "text-slate-500"
                                } hover:text-blue-950 text-xs sm:text-xl lg:text-2xl font-bold pointer-events-auto cursor-pointer font-inter`}
                                onClick={() => setActive(nav.id)}>
                                {active === nav.id}
                                <Link to={`/${nav.id}`}>{nav.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
    );
};

export default Navbar;