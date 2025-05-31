import Hero from '../components/Hero';
import Navbar from "../components/Navbar.jsx";

const HomePage = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <section>
                    <Hero />
                </section>
            </main>
        </div>

    );
};

export default HomePage;

