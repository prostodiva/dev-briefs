import Hero from '../components/Hero';
import Navbar from "../components/Navbar.jsx";
import Subscription from '../components/Subscription';

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

