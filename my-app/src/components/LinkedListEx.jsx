import React, { useState } from "react";
import {
    SinglyLLInsertAtEnd,
    SinglyLLInsertAtEndCode,
    SinglyLLInsertAtFront,
    SinglyLLInsertAtFrontCode, SinglyLLInsertAtIndex, SinglyLLInsertAtIndexCode
} from "../data/index.js";

function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const exercises = [
    {
        id: 1,
        title: "InsertAtFront/Display Pseudocode Exercise",
        description: "Create and Display Singly Linked List. Insert Nodes At Front.",
        type: "pseudocode",
        data: SinglyLLInsertAtFront
    },
    {
        id: 2,
        title: "InsertAtFront/Display Code Exercise",
        description: "Create and Display Singly Linked List. Insert Nodes At Front.",
        type: "code",
        data: SinglyLLInsertAtFrontCode
    },
    {
        id: 3,
        title: "InsertAtEnd/Reverse Pseudocode Exercise",
        description: "Insert Node At End of Linked List and display in reverse order",
        type: "pseudocode",
        data: SinglyLLInsertAtEnd
    },
    {
        id: 4,
        title: "InsertAtEnd/Reverse Code Exercise",
        description: "Insert Node At End of Linked List and display in reverse order",
        type: "code",
        data: SinglyLLInsertAtEndCode
    },
    {
        id: 5,
        title: "InsertAtIndex Function Pseudocode Exercise",
        description: "Create a Function to insert node at Nth index",
        type: "pseudocode",
        data: SinglyLLInsertAtIndex
    },
    {
        id: 6,
        title: "InsertAtIndex Code Exercise",
        description: "Using a template create: InsertAtFront/InsertAtIndex/Print Code Exercise",
        type: "code",
        data: SinglyLLInsertAtIndexCode
    }

];

const ExerciseNavigation = ({ exercises, activeExercise, onExerciseSelect }) => {
    return (
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
            {exercises.map((exercise) => (
                <button
                    key={exercise.id}
                    onClick={() => onExerciseSelect(exercise.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeExercise === exercise.id
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                    {exercise.title}
                </button>
            ))}
        </div>
    );
};

const ExerciseSection = ({ title, description, lines, onShuffle, shuffled, showCorrect, setShowCorrect, selected, setSelected, handleDragStart, handleDragOver, handleDrop, handleDragEnd, isCorrect }) => {
    // Get the original correct order from the data source
    const correctOrder = title.includes("Pseudocode") 
        ? (title.includes("End") ? SinglyLLInsertAtEnd : SinglyLLInsertAtFront)
        : (title.includes("Index") ? SinglyLLInsertAtIndexCode : SinglyLLInsertAtFrontCode);
    
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
    const [activeExercise, setActiveExercise] = useState(1);

    // State for first pseudocode exercise
    const [pseudoLines, setPseudoLines] = useState(SinglyLLInsertAtFront);
    const [pseudoSelected, setPseudoSelected] = useState(null);
    const [pseudoShuffled, setPseudoShuffled] = useState(false);
    const [pseudoShowCorrect, setPseudoShowCorrect] = useState(false);

    // State for first code exercise
    const [codeLines, setCodeLines] = useState(SinglyLLInsertAtFrontCode);
    const [codeSelected, setCodeSelected] = useState(null);
    const [codeShuffled, setCodeShuffled] = useState(false);
    const [codeShowCorrect, setCodeShowCorrect] = useState(false);

    // State for second pseudocode exercise
    const [pseudo2Lines, setPseudo2Lines] = useState(SinglyLLInsertAtEnd);
    const [pseudo2Selected, setPseudo2Selected] = useState(null);
    const [pseudo2Shuffled, setPseudo2Shuffled] = useState(false);
    const [pseudo2ShowCorrect, setPseudo2ShowCorrect] = useState(false);

    // State for second code exercise
    const [code2Lines, setCode2Lines] = useState(SinglyLLInsertAtEndCode);
    const [code2Selected, setCode2Selected] = useState(null);
    const [code2Shuffled, setCode2Shuffled] = useState(false);
    const [code2ShowCorrect, setCode2ShowCorrect] = useState(false);

    // State for InsertAtIndex pseudocode exercise
    const [pseudo3Lines, setPseudo3Lines] = useState(SinglyLLInsertAtIndex);
    const [pseudo3Selected, setPseudo3Selected] = useState(null);
    const [pseudo3Shuffled, setPseudo3Shuffled] = useState(false);
    const [pseudo3ShowCorrect, setPseudo3ShowCorrect] = useState(false);

    // State for InsertAtIndex code exercise
    const [code3Lines, setCode3Lines] = useState(SinglyLLInsertAtIndexCode);
    const [code3Selected, setCode3Selected] = useState(null);
    const [code3Shuffled, setCode3Shuffled] = useState(false);
    const [code3ShowCorrect, setCode3ShowCorrect] = useState(false);

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

    // Enhanced drag and drop handlers for second pseudocode
    const handlePseudo2DragStart = (e, index) => {
        e.dataTransfer.effectAllowed = 'move';
        setPseudo2Selected(index);
    };

    const handlePseudo2DragOver = (e, index) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };

    const handlePseudo2Drop = (e, index) => {
        e.preventDefault();
        if (pseudo2Selected === null) return;
        
        const newLines = [...pseudo2Lines];
        const [moved] = newLines.splice(pseudo2Selected, 1);
        newLines.splice(index, 0, moved);
        setPseudo2Lines(newLines);
        setPseudo2Selected(null);
    };

    const handlePseudo2DragEnd = () => {
        setPseudo2Selected(null);
    };

    // Enhanced drag and drop handlers for second code exercise
    const handleCode2DragStart = (e, index) => {
        e.dataTransfer.effectAllowed = 'move';
        setCode2Selected(index);
    };

    const handleCode2DragOver = (e, index) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };

    const handleCode2Drop = (e, index) => {
        e.preventDefault();
        if (code2Selected === null) return;
        
        const newLines = [...code2Lines];
        const [moved] = newLines.splice(code2Selected, 1);
        newLines.splice(index, 0, moved);
        setCode2Lines(newLines);
        setCode2Selected(null);
    };

    const handleCode2DragEnd = () => {
        setCode2Selected(null);
    };

    // Enhanced drag and drop handlers for InsertAtIndex exercise
    const handlePseudo3DragStart = (e, index) => {
        e.dataTransfer.effectAllowed = 'move';
        setPseudo3Selected(index);
    };

    const handlePseudo3DragOver = (e, index) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };

    const handlePseudo3Drop = (e, index) => {
        e.preventDefault();
        if (pseudo3Selected === null) return;
        
        const newLines = [...pseudo3Lines];
        const [moved] = newLines.splice(pseudo3Selected, 1);
        newLines.splice(index, 0, moved);
        setPseudo3Lines(newLines);
        setPseudo3Selected(null);
    };

    const handlePseudo3DragEnd = () => {
        setPseudo3Selected(null);
    };

    // Enhanced drag and drop handlers for InsertAtIndex code exercise
    const handleCode3DragStart = (e, index) => {
        e.dataTransfer.effectAllowed = 'move';
        setCode3Selected(index);
    };

    const handleCode3DragOver = (e, index) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };

    const handleCode3Drop = (e, index) => {
        e.preventDefault();
        if (code3Selected === null) return;
        
        const newLines = [...code3Lines];
        const [moved] = newLines.splice(code3Selected, 1);
        newLines.splice(index, 0, moved);
        setCode3Lines(newLines);
        setCode3Selected(null);
    };

    const handleCode3DragEnd = () => {
        setCode3Selected(null);
    };

    // Check if the order is correct for all exercises
    const isPseudoCorrect = JSON.stringify(pseudoLines) === JSON.stringify(SinglyLLInsertAtFront);
    const isCodeCorrect = JSON.stringify(codeLines) === JSON.stringify(SinglyLLInsertAtFrontCode);
    const isPseudo2Correct = JSON.stringify(pseudo2Lines) === JSON.stringify(SinglyLLInsertAtEnd);
    const isCode2Correct = JSON.stringify(code2Lines) === JSON.stringify(SinglyLLInsertAtEndCode);
    const isPseudo3Correct = JSON.stringify(pseudo3Lines) === JSON.stringify(SinglyLLInsertAtIndex);
    const isCode3Correct = JSON.stringify(code3Lines) === JSON.stringify(SinglyLLInsertAtIndexCode);

    const currentExercise = exercises.find(ex => ex.id === activeExercise);

    return (
        <div className="max-w-3xl mx-auto p-3 bg-white rounded-lg shadow-lg border border-gray-200 relative z-10">
            <ExerciseNavigation 
                exercises={exercises}
                activeExercise={activeExercise}
                onExerciseSelect={setActiveExercise}
            />
            
            {currentExercise.type === "pseudocode" ? (
                currentExercise.id === 1 ? (
                    <ExerciseSection
                        title={currentExercise.title}
                        description={currentExercise.description}
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
                ) : currentExercise.id === 3 ? (
                    <ExerciseSection
                        title={currentExercise.title}
                        description={currentExercise.description}
                        lines={pseudo2Lines}
                        onShuffle={() => {
                            setPseudo2Lines(shuffle(SinglyLLInsertAtEnd));
                            setPseudo2Shuffled(true);
                        }}
                        shuffled={pseudo2Shuffled}
                        showCorrect={pseudo2ShowCorrect}
                        setShowCorrect={setPseudo2ShowCorrect}
                        selected={pseudo2Selected}
                        setSelected={setPseudo2Selected}
                        handleDragStart={handlePseudo2DragStart}
                        handleDragOver={handlePseudo2DragOver}
                        handleDrop={handlePseudo2Drop}
                        handleDragEnd={handlePseudo2DragEnd}
                        isCorrect={isPseudo2Correct}
                    />
                ) : (
                    <ExerciseSection
                        title={currentExercise.title}
                        description={currentExercise.description}
                        lines={pseudo3Lines}
                        onShuffle={() => {
                            setPseudo3Lines(shuffle(SinglyLLInsertAtIndex));
                            setPseudo3Shuffled(true);
                        }}
                        shuffled={pseudo3Shuffled}
                        showCorrect={pseudo3ShowCorrect}
                        setShowCorrect={setPseudo3ShowCorrect}
                        selected={pseudo3Selected}
                        setSelected={setPseudo3Selected}
                        handleDragStart={handlePseudo3DragStart}
                        handleDragOver={handlePseudo3DragOver}
                        handleDrop={handlePseudo3Drop}
                        handleDragEnd={handlePseudo3DragEnd}
                        isCorrect={isPseudo3Correct}
                    />
                )
            ) : (
                currentExercise.id === 2 ? (
                    <ExerciseSection
                        title={currentExercise.title}
                        description={currentExercise.description}
                        lines={codeLines}
                        onShuffle={() => {
                            setCodeLines(shuffle(SinglyLLInsertAtFrontCode));
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
                ) : currentExercise.id === 4 ? (
                    <ExerciseSection
                        title={currentExercise.title}
                        description={currentExercise.description}
                        lines={code2Lines}
                        onShuffle={() => {
                            setCode2Lines(shuffle(SinglyLLInsertAtEndCode));
                            setCode2Shuffled(true);
                        }}
                        shuffled={code2Shuffled}
                        showCorrect={code2ShowCorrect}
                        setShowCorrect={setCode2ShowCorrect}
                        selected={code2Selected}
                        setSelected={setCode2Selected}
                        handleDragStart={handleCode2DragStart}
                        handleDragOver={handleCode2DragOver}
                        handleDrop={handleCode2Drop}
                        handleDragEnd={handleCode2DragEnd}
                        isCorrect={isCode2Correct}
                    />
                ) : (
                    <ExerciseSection
                        title={currentExercise.title}
                        description={currentExercise.description}
                        lines={code3Lines}
                        onShuffle={() => {
                            setCode3Lines(shuffle(SinglyLLInsertAtIndexCode));
                            setCode3Shuffled(true);
                        }}
                        shuffled={code3Shuffled}
                        showCorrect={code3ShowCorrect}
                        setShowCorrect={setCode3ShowCorrect}
                        selected={code3Selected}
                        setSelected={setCode3Selected}
                        handleDragStart={handleCode3DragStart}
                        handleDragOver={handleCode3DragOver}
                        handleDrop={handleCode3Drop}
                        handleDragEnd={handleCode3DragEnd}
                        isCorrect={isCode3Correct}
                    />
                )
            )}
        </div>
    );
};

export default LinkedListEx;