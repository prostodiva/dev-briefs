import Hero from '../components/Hero';
import Navbar from "../components/Navbar.jsx";
import Layout from "../components/Layout.jsx";

const HomePage = () => {
    return (
        <Layout>
            <div className="relative">
                <main>
                    <Hero />
                </main>
            </div>
        </Layout>
    );
};

export default HomePage;

