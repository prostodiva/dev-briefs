import { back4 } from "../assets/images";
import Navbar from "./Navbar.jsx";

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen">
            <div className="fixed inset-0 z-0">
                <img src={back4} alt="Background" className="w-full h-full object-cover"/>
            </div>
            <div className="relative z-40">
                <Navbar />
                <main>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout; 