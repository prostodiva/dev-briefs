import Navbar from "../components/Navbar.jsx";
import Interview from "../components/Interview.jsx";
import Flashcards from "../components/Flashcards.jsx"
import Layout from "../components/Layout.jsx";

const InterviewPrepPage = () => {
    return (
        <section>
            <Layout>
                <div className="px-4 py-20 pb-12">
                    <Navbar />
                </div>
                <h2 className="text-black text-4xl font-bold mb-8 text-center">Interview Questions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
                    <div>
                        <Interview />
                    </div>
                    <div>
                        <Flashcards />
                    </div>
                </div>
            </Layout>
        </section>
    );
};

export default InterviewPrepPage;