import React, { useState } from "react";
import { SinglyLLInsertAFrontCode, SinglyLLInsertAtFront } from "../data/index.js";

function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const ExerciseSection = ({ title, description, lines, onShuffle, shuffled, showCorrect, setShowCorrect, selected, setSelected, handleDragStart, handleDragOver, handleDrop, handleDragEnd, isCorrect }) => {
    // Get the original correct order from the data source
    const correctOrder = title.includes("Pseudocode") ? SinglyLLInsertAtFront : SinglyLLInsertAFrontCode;
    
    return (
        <div className="mb-4">
            <h1 className="text-base font-bold mb-1">{title}</h1>
            <h2 className="text-sm font-light mb-2">{description}</h2>
            {!shuffled ? (
                <>
                    <ul className="space-y-0.5">
                        {lines.map((line, idx) => (
                            <li
                                key={idx}
                                className="p-1.5 bg-gray-100 border border-gray-300 rounded font-mono text-sm"
                            >
                                {line}
                            </li>
                        ))}
                    </ul>
                    <button
                        className="mt-1 px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                        onClick={onShuffle}
                    >
                        Shuffle
                    </button>
                </>
            ) : showCorrect ? (
                <>
                    <ul className="space-y-0.5">
                        {correctOrder.map((line, idx) => (
                            <li
                                key={idx}
                                className="p-1.5 my-0.5 bg-green-100 border border-green-300 rounded font-mono text-sm"
                            >
                                {line}
                            </li>
                        ))}
                    </ul>
                    <button
                        className="mt-1 px-2 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 text-sm"
                        onClick={() => setShowCorrect(false)}
                    >
                        Back to Exercise
                    </button>
                </>
            ) : (
                <>
                    <ul className="space-y-1">
                        {lines.map((line, idx) => (
                            <li
                                key={idx}
                                draggable
                                onDragStart={(e) => handleDragStart(e, idx)}
                                onDragOver={(e) => handleDragOver(e, idx)}
                                onDrop={(e) => handleDrop(e, idx)}
                                onDragEnd={handleDragEnd}
                                className={`p-1.5 border rounded font-mono cursor-move transition-all duration-200 hover:shadow-md text-sm ${
                                    selected === idx 
                                        ? 'bg-blue-100 border-blue-300 shadow-lg scale-[1.02]' 
                                        : 'bg-gray-100 border-gray-300 hover:bg-gray-50'
                                }`}
                            >
                                <div className="flex items-center">
                                    <span className="mr-1 text-gray-500 text-xs">⋮⋮</span>
                                    {line}
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="flex gap-2 mt-1 items-center">
                        <button
                            className="px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
                            onClick={() => setShowCorrect(true)}
                        >
                            Show Correct Order
                        </button>
                        {isCorrect && (
                            <>
                                <div className="text-green-600 font-semibold text-sm">Correct!</div>
                                <button
                                    className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                                    onClick={onShuffle}
                                >
                                    Shuffle
                                </button>
                            </>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

const LinkedListEx = () => {
    // State for pseudocode exercise
    const [pseudoLines, setPseudoLines] = useState(SinglyLLInsertAtFront);
    const [pseudoSelected, setPseudoSelected] = useState(null);
    const [pseudoShuffled, setPseudoShuffled] = useState(false);
    const [pseudoShowCorrect, setPseudoShowCorrect] = useState(false);

    // State for code exercise
    const [codeLines, setCodeLines] = useState(SinglyLLInsertAFrontCode);
    const [codeSelected, setCodeSelected] = useState(null);
    const [codeShuffled, setCodeShuffled] = useState(false);
    const [codeShowCorrect, setCodeShowCorrect] = useState(false);

    // Enhanced drag and drop handlers for pseudocode
    const handlePseudoDragStart = (e, index) => {
        e.dataTransfer.effectAllowed = 'move';
        setPseudoSelected(index);
    };

    const handlePseudoDragOver = (e, index) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };

    const handlePseudoDrop = (e, index) => {
        e.preventDefault();
        if (pseudoSelected === null) return;
        
        const newLines = [...pseudoLines];
        const [moved] = newLines.splice(pseudoSelected, 1);
        newLines.splice(index, 0, moved);
        setPseudoLines(newLines);
        setPseudoSelected(null);
    };

    const handlePseudoDragEnd = () => {
        setPseudoSelected(null);
    };

    // Enhanced drag and drop handlers for code
    const handleCodeDragStart = (e, index) => {
        e.dataTransfer.effectAllowed = 'move';
        setCodeSelected(index);
    };

    const handleCodeDragOver = (e, index) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };

    const handleCodeDrop = (e, index) => {
        e.preventDefault();
        if (codeSelected === null) return;
        
        const newLines = [...codeLines];
        const [moved] = newLines.splice(codeSelected, 1);
        newLines.splice(index, 0, moved);
        setCodeLines(newLines);
        setCodeSelected(null);
    };

    const handleCodeDragEnd = () => {
        setCodeSelected(null);
    };

    // Check if the order is correct for both exercises
    const isPseudoCorrect = JSON.stringify(pseudoLines) === JSON.stringify(SinglyLLInsertAtFront);
    const isCodeCorrect = JSON.stringify(codeLines) === JSON.stringify(SinglyLLInsertAFrontCode);

    return (
        <div className="max-w-3xl mx-auto p-3 bg-white rounded-lg shadow-lg border border-gray-200 relative z-10">
            <ExerciseSection
                title="Singly Linked List Pseudocode Exercise"
                description="Create and Display Singly Linked List. Insert Nodes At Front."
                lines={pseudoLines}
                onShuffle={() => {
                    setPseudoLines(shuffle(SinglyLLInsertAtFront));
                    setPseudoShuffled(true);
                }}
                shuffled={pseudoShuffled}
                showCorrect={pseudoShowCorrect}
                setShowCorrect={setPseudoShowCorrect}
                selected={pseudoSelected}
                setSelected={setPseudoSelected}
                handleDragStart={handlePseudoDragStart}
                handleDragOver={handlePseudoDragOver}
                handleDrop={handlePseudoDrop}
                handleDragEnd={handlePseudoDragEnd}
                isCorrect={isPseudoCorrect}
            />

            <div className="border-t border-gray-200 my-2"></div>

            <ExerciseSection
                title="Singly Linked List Code Exercise"
                description="Arrange the C++ implementation in the correct order"
                lines={codeLines}
                onShuffle={() => {
                    setCodeLines(shuffle(SinglyLLInsertAFrontCode));
                    setCodeShuffled(true);
                }}
                shuffled={codeShuffled}
                showCorrect={codeShowCorrect}
                setShowCorrect={setCodeShowCorrect}
                selected={codeSelected}
                setSelected={setCodeSelected}
                handleDragStart={handleCodeDragStart}
                handleDragOver={handleCodeDragOver}
                handleDrop={handleCodeDrop}
                handleDragEnd={handleCodeDragEnd}
                isCorrect={isCodeCorrect}
            />
        </div>
    );
};

export default LinkedListEx;