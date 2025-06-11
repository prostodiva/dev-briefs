import Hero from '../components/Hero';
import Navbar from "../components/Navbar.jsx";

const HomePage = () => {
    return (
        <div className="relative">
            <Navbar />
            <main>
                <Hero />
            </main>
        </div>
    );
};

export default HomePage;

