
import {Link} from "react-router-dom";

const Flashcards = () => {
    return (
        <section>
            <Link to="/card">
                <div className="p-4 m-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow h-40 flex flex-col items-center justify-center  hover:shadow-blue-900  hover:-translate-y-2 duration-300">
                    <h3 className="text-black text-xl font-bold mb-2">Flashcards</h3>
                    <p className="text-black text-sm">Test Yourself</p>
                </div>
            </Link>
        </section>
    );
}

export default Flashcards;