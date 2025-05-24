import React, { useState } from "react";
import { SinglyLinkedListEx } from "../data/index.js";

function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const LinkedListEx = () => {
    const [lines, setLines] = useState(SinglyLinkedListEx);
    const [selected, setSelected] = useState(null);
    const [shuffled, setShuffled] = useState(false);
    const [showCorrect, setShowCorrect] = useState(false);

    // Enhanced drag and drop handlers
    const handleDragStart = (e, index) => {
        e.dataTransfer.effectAllowed = 'move';
        setSelected(index);
    };

    const handleDragOver = (e, index) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };

    const handleDrop = (e, index) => {
        e.preventDefault();
        if (selected === null) return;
        
        const newLines = [...lines];
        const [moved] = newLines.splice(selected, 1);
        newLines.splice(index, 0, moved);
        setLines(newLines);
        setSelected(null);
    };

    const handleDragEnd = () => {
        setSelected(null);
    };

    // Shuffle handler
    const handleShuffle = () => {
        setLines(shuffle(SinglyLinkedListEx));
        setShuffled(true);
    };

    // Check if the order is correct
    const isCorrect = JSON.stringify(lines) === JSON.stringify(SinglyLinkedListEx);

    return (
        <div className="max-w-4xl mx-auto mt-16 p-6 bg-white rounded-lg shadow-lg border border-gray-200 relative z-10">
            <h1 className="text-lg font-bold mb-4">Singly Linked List practice exercise</h1>
            <h2 className="text-lg font-bold mb-4">Create and Display Singly Linked. Insert Nodes At Front.</h2>
            <h2 className="text-lg font-bold mb-4">Part 1: Arrange the pseudocode in the correct order:</h2>
            {!shuffled ? (
                <>
                    <ul className="space-y-2">
                        {SinglyLinkedListEx.map((line, idx) => (
                            <li
                                key={idx}
                                className="p-4 bg-gray-100 border border-gray-300 rounded font-mono"
                            >
                                {line}
                            </li>
                        ))}
                    </ul>
                    <button
                        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        onClick={handleShuffle}
                    >
                        Shuffle
                    </button>
                </>
            ) : showCorrect ? (
                <>
                    <ul>
                        {SinglyLinkedListEx.map((line, idx) => (
                            <li
                                key={idx}
                                className="p-2 my-1 bg-green-100 border border-green-300 rounded font-mono"
                            >
                                {line}
                            </li>
                        ))}
                    </ul>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                        onClick={() => setShowCorrect(false)}
                    >
                        Back to Exercise
                    </button>
                </>
            ) : (
                <>
                    <ul className="space-y-2">
                        {lines.map((line, idx) => (
                            <li
                                key={idx}
                                draggable
                                onDragStart={(e) => handleDragStart(e, idx)}
                                onDragOver={(e) => handleDragOver(e, idx)}
                                onDrop={(e) => handleDrop(e, idx)}
                                onDragEnd={handleDragEnd}
                                className={`p-4 border rounded font-mono cursor-move transition-all duration-200 hover:shadow-md ${
                                    selected === idx 
                                        ? 'bg-blue-100 border-blue-300 shadow-lg scale-[1.02]' 
                                        : 'bg-gray-100 border-gray-300 hover:bg-gray-50'
                                }`}
                            >
                                <div className="flex items-center">
                                    <span className="mr-2 text-gray-500">⋮⋮</span>
                                    {line}
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="flex gap-4 mt-4">
                        <button
                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                            onClick={() => setShowCorrect(true)}
                        >
                            Show Correct Order
                        </button>
                        {isCorrect && (
                            <div className="text-green-600 font-semibold self-center">Correct!</div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default LinkedListEx;