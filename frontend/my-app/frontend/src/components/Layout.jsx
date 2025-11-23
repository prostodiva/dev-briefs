import { back4 } from "../assets/images";
import Navbar from "./Navbar.jsx";

const Layout = ({ children }) => {
    return (
        <div className="relative min-h-screen">
            <div className="fixed inset-0 -z-10">
                <img src={back4} alt="Background" className="w-full h-full object-cover"/>
            </div>
            <div className="relative z-50">
                <Navbar />
            </div>
            <main className="relative z-10">
                {children}
            </main>
        </div>
    );
};

export default Layout; 