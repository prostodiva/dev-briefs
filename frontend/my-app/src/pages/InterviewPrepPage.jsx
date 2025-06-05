import Navbar from "../components/Navbar.jsx";
import Interview from "../components/Interview.jsx";
import Flashcards from "../components/Flashcards.jsx"

const InterviewPrepPage = () => {
    return (
        <section>
            <div className="px-4 py-20 pb-12 mt-12">
                <Navbar />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
                <div>
                    <Interview />
                </div>
                <div>
                    <Flashcards />
                </div>
            </div>
        </section>
    );
};

export default InterviewPrepPage;