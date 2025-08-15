import { useState } from "react";
import CircularList from "../components/CircularList.jsx";
import Navbar from "../components/Navbar.jsx";
import SinglyLinkedList from "../components/SinglyLinkedList.jsx";

const PracticeCard = ({ title, onSelect }) => {
    return (
        <div 
            className="p-4 m-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow h-40 flex flex-col items-center justify-center  hover:shadow-blue-900  hover:-translate-y-2 duration-300 cursor-pointer"
            onClick={onSelect}
        >
            <h3 className="text-black text-xl font-bold mb-2 font-inter">{title}</h3>
        </div>
    );
};

const exercises = [
    {
        title: "Singly Linked List",
        category: "Linked List",
        component: "SinglyLinkedList"
    },
    {
        title: "Doubly Linked List",
        category: "Linked List",
        component: "DoublyLinkedList"
    },
    {
        title: "Circular Linked List",
        category: "Linked List",
        component: "CircularList"
    }
]

const PracticePage = () => {
    const [selectedExercise, setSelectedExercise] = useState(null);

    const renderExercise = () => {
        switch (selectedExercise) {
            case "SinglyLinkedList":
                return <SinglyLinkedList />;
            case "CircularList":
                return <CircularList />;
            case "DoublyLinkedList":
                return <div className="text-center py-8">
                    <h3 className="text-xl font-bold text-gray-700">Doubly Linked List Exercise</h3>
                    <p className="text-gray-500 mt-2">Coming soon...</p>
                </div>;
            default:
                return null;
        }
    };

    return (
        <div className="w-full px-4 py-30 pb-32">
            <div>
                <Navbar />
            </div>
            
            {selectedExercise ? (
                <div className="mt-5">
                    <button 
                        className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                        onClick={() => setSelectedExercise(null)}
                    >
                        ← Back to Exercises
                    </button>
                    {renderExercise()}
                </div>
            ) : (
                <>
                    <h2 className="text-black text-4xl font-bold mb-8 text-center">Linked List</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
                        {exercises
                            .filter(exercise => exercise.category === "Linked List")
                            .map((exercise, idx) => (
                                <PracticeCard 
                                    key={idx} 
                                    title={exercise.title}
                                    onSelect={() => setSelectedExercise(exercise.component)}
                                />
                            ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default PracticePage;