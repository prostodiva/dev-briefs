import { useState } from "react";
import LinkedListEx from "../components/LinkedListEx";
import Navbar from "../components/Navbar.jsx";

const PracticeCard = ({ title, onSelect }) => {
    return (
        <div 
            className="p-4 m-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow h-40 flex flex-col items-center justify-center  hover:shadow-blue-900  hover:-translate-y-2 duration-300"
            onClick={onSelect}
        >
            <h3 className="text-black text-xl font-bold mb-2 font-inter">{title}</h3>
        </div>
    );
};

const exercises = [
    {
        title: "Singly Linked List",
        category: "Linked List"
    },
    {
        title: "Doubly Linked List",
        category: "Linked List"
    }
]

const PracticePage = () => {
    const [showExercise, setShowExercise] = useState(false);

    if (showExercise) {
        return (
            <div className="mt-5">
                <button 
                    className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => setShowExercise(false)}
                >
                    ← Back to Exercises
                </button>
                <LinkedListEx />
            </div>
        );
    }

    return (
        <div className="w-full px-4 py-30 pb-32 ">
            <div>
                <Navbar />
            </div>
            <h2 className="text-black text-4xl font-bold mb-8 text-center">Linked List</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
                {exercises
                    .filter(exercise => exercise.category === "Linked List")
                    .map((exercise, idx) => (
                        <PracticeCard 
                            key={idx} 
                            title={exercise.title}
                            onSelect={() => {
                                if (exercise.title === "Singly Linked List") {
                                    setShowExercise(true);
                                }
                            }}
                        />
                    ))}
            </div>
        </div>
    );
};

export default PracticePage;