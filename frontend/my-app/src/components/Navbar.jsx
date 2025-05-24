import React, { useEffect, useState } from "react";
import {navLinks} from "../data/index.js";

const Navbar = () => {
    const [active, setActive] = useState("hero");

    return (
        <section>
            <nav>
                <div>
                    <ul>
                        {navLinks.map((nav) => (
                            <li key={nav.id} onClick={() => setActive(nav.id)}>
                                {active === nav.id}
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;