import React, { useState } from "react";
import { questions } from "../data/index.js";

const CardModel = ({ question, answer }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="relative h-48 w-full cursor-pointer perspective-1000"
            onClick={() => setIsFlipped(!isFlipped)}>
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

const BasicQuestCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const BasicQuestions = questions.filter((question) => question.category === "Basic");

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? BasicQuestions.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === BasicQuestCard.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section className="max-w-xl mx-auto px-3 py-4 sm:p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-center">Basic Interview Questions</h2>
                <div className="w-20"></div> {/* Spacer for alignment */}
            </div>

            <div className="relative">
                <div className="mb-4">
                    <CardModel
                        question={BasicQuestions[currentIndex].question}
                        answer={BasicQuestions[currentIndex].answer}
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
                        Question {currentIndex + 1} of {BasicQuestions.length}
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

export default BasicQuestCard;