import React, { useState } from "react";
import { questions } from "../data/index.js";

const CardModel = ({ question, answer }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div 
            className="relative h-64 w-full cursor-pointer perspective-1000"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                {/* Front of card */}
                <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg p-6 flex flex-col justify-center items-center text-center">
                    <h3 className="text-xl font-bold text-blue-600 mb-4">{question}</h3>
                    <p className="text-gray-500">Click to see answer</p>
                </div>
                
                {/* Back of card */}
                <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg p-6 rotate-y-180 overflow-y-auto">
                    <p className="text-gray-700 whitespace-pre-line">{answer}</p>
                </div>
            </div>
        </div>
    );
};

const Card = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const backendQuestions = questions.filter((question) => question.category === "Backend");

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? backendQuestions.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === backendQuestions.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section className="max-w-2xl mx-auto px-4 py-6 sm:p-6 mt-20 sm:mt-32">
            <div className="flex justify-between items-center mb-8">
                <button
                    onClick={() => window.history.back()}
                    className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 text-sm transition-colors"
                >
                    Back to Interview
                </button>
                <h2 className="text-2xl font-bold text-center">Backend Interview Questions</h2>
                <div className="w-24"></div> {/* Spacer for alignment */}
            </div>
            
            <div className="relative">
                <div className="mb-8">
                    <CardModel 
                        question={backendQuestions[currentIndex].question} 
                        answer={backendQuestions[currentIndex].answer} 
                    />
                </div>

                <div className="flex justify-between items-center">
                    <button
                        onClick={handlePrevious}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                    >
                        Previous
                    </button>
                    
                    <span className="text-gray-600 font-medium">
                        Question {currentIndex + 1} of {backendQuestions.length}
                    </span>

                    <button
                        onClick={handleNext}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                    >
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Card;