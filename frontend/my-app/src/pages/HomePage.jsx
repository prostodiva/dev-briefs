import Hero from '../components/Hero';
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

