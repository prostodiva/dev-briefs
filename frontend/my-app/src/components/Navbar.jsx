import React, { useEffect, useState } from "react";
import {navLinks} from "../data/index.js";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [active, setActive] = useState("home");

    return (
            <nav className="w-full fixed top-0 right-0 bg-transparent p-8 sm:px-16 sm:py-6 flex justify-end m-12">
                <div>
                    <ul className="flex flex-col flex-wrap gap-2 sm:gap-5 justify-center sm:justify-end">
                        {navLinks.map((nav) => (
                            <li key={nav.id}
                                className={`relative flex items-center pl-3 ${
                                    active === nav.id ? "text-gray-800" : "text-slate-500"
                                } hover:text-blue-950 text-base sm:text-lg lg:text-xl font-bold pointer-events-auto cursor-pointer`}
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