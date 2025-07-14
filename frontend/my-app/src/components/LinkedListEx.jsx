import React, { useState } from "react";
import { exercises } from "../data/index.js";

function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Function to group lines that should be treated together (e.g., closing braces)
function groupLines(lines) {
    const groups = [];
    let currentGroup = [];
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmedLine = line.trim();
        
        // If line starts with just a closing brace, add it to the previous group
        if (trimmedLine === '}' || trimmedLine.startsWith('}')) {
            if (currentGroup.length > 0) {
                currentGroup.push(line);
            } else {
                // If no previous group, create a new one
                groups.push([line]);
            }
        } else {
            // If we have a current group, finalize it
            if (currentGroup.length > 0) {
                groups.push(currentGroup);
            }
            // Start a new group
            currentGroup = [line];
        }
    }
    
    // Don't forget the last group
    if (currentGroup.length > 0) {
        groups.push(currentGroup);
    }
    
    return groups;
}

// Function to flatten groups back to lines
function flattenGroups(groups) {
    return groups.flat();
}


function compareWithFlexibleBraces(userLines, correctLines) {
    let i = 0, j = 0;
    while (i < userLines.length && j < correctLines.length) {
        // If both are standalone closing braces
        if (userLines[i].trim() === '}' && correctLines[j].trim() === '}') {
            // Count consecutive } in both
            let userCount = 0, correctCount = 0;
            while (userLines[i + userCount] && userLines[i + userCount].trim() === '}') userCount++;
            while (correctLines[j + correctCount] && correctLines[j + correctCount].trim() === '}') correctCount++;
            if (userCount !== correctCount) return false;
            i += userCount;
            j += correctCount;
        } else {
            // Compare lines as usual
            if (userLines[i].trim() !== correctLines[j].trim()) return false;
            i++;
            j++;
        }
    }
    // Both arrays should be fully traversed
    return i === userLines.length && j === correctLines.length;
}

const ExerciseNavigation = ({ exercises, activeExercise, onExerciseSelect }) => {
    return (
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
            {exercises.map((exercise) => (
                <button
                    key={exercise.id}
                    onClick={() => onExerciseSelect(exercise.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeExercise === exercise.id
                            ? 'bg-gray-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                    {exercise.title}
                </button>
            ))}
        </div>
    );
};

const ExerciseSection = ({ title, description, lines, onShuffle, shuffled, showCorrect, setShowCorrect, selected, handleDragStart, handleDragOver, handleDrop, handleDragEnd, isCorrect }) => {
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
                        className="mt-1 px-2 py-1 bg-gray-800 text-white rounded hover:bg-gray-600 text-sm"
                        onClick={onShuffle}
                    >
                        Shuffle
                    </button>
                </>
            ) : showCorrect ? (
                <>
                    <ul className="space-y-0.5">
                        {lines.map((line, idx) => (
                            <li
                                key={idx}
                                className="p-1.5 my-0.5 bg-green-100 border border-green-300 rounded font-jetbrains text-sm"
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
                                onDragOver={handleDragOver}
                                onDrop={(e) => handleDrop(e, idx)}
                                onDragEnd={handleDragEnd}
                                className={`p-1.5 border rounded font-jetbrains cursor-move transition-all duration-200 hover:shadow-md text-sm ${
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
    const [exerciseStates, setExerciseStates] = useState(() => {
        // Initialize state for all exercises
        const states = new Map();
        exercises.forEach(exercise => {
            states.set(exercise.id, {
                lines: exercise.data,
                shuffledLines: exercise.data, // Store shuffled lines separately
                selected: null,
                shuffled: false,
                showCorrect: false
            });
        });
        return states;
    });

    const currentExercise = exercises.find(ex => ex.id === activeExercise);
    const currentState = exerciseStates.get(currentExercise.id);

    const handleDragStart = (e, index) => {
        e.dataTransfer.effectAllowed = 'move';
        setExerciseStates(prev => {
            const newStates = new Map(prev);
            newStates.set(currentExercise.id, {
                ...currentState,
                selected: index
            });
            return newStates;
        });
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };

    const handleDrop = (e, index) => {
        e.preventDefault();
        if (currentState.selected === null) return;

        const newLines = [...currentState.lines];
        const [moved] = newLines.splice(currentState.selected, 1);
        newLines.splice(index, 0, moved);

        setExerciseStates(prev => {
            const newStates = new Map(prev);
            newStates.set(currentExercise.id, {
                ...currentState,
                lines: newLines,
                shuffledLines: newLines, // Update shuffled lines when user reorders
                selected: null
            });
            return newStates;
        });
    };

    const handleDragEnd = () => {
        setExerciseStates(prev => {
            const newStates = new Map(prev);
            newStates.set(currentExercise.id, {
                ...currentState,
                selected: null
            });
            return newStates;
        });
    };

    const handleShuffle = () => {
        // Group the lines first, then shuffle the groups
        const groups = groupLines(currentExercise.data);
        const shuffledGroups = shuffle(groups);
        const shuffledLines = flattenGroups(shuffledGroups);
        
        setExerciseStates(prev => {
            const newStates = new Map(prev);
            newStates.set(currentExercise.id, {
                ...currentState,
                lines: shuffledLines,
                shuffledLines: shuffledLines,
                shuffled: true
            });
            return newStates;
        });
    };

    const handleShowCorrect = (show) => {
        setExerciseStates(prev => {
            const newStates = new Map(prev);
            newStates.set(currentExercise.id, {
                ...currentState,
                showCorrect: show,
                // When showing correct order, show the correct order, otherwise show shuffled lines
                lines: show ? currentExercise.data : currentState.shuffledLines
            });
            return newStates;
        });
    };

    const isCorrect = currentState.shuffled && compareWithFlexibleBraces(currentState.shuffledLines, currentExercise.data);

    return (
        <div className="max-w-3xl mx-auto p-3 bg-white rounded-lg shadow-lg border border-gray-200 relative z-10 mt-16">
            <ExerciseNavigation
                exercises={exercises}
                activeExercise={activeExercise}
                onExerciseSelect={setActiveExercise}
            />

            <ExerciseSection
                title={currentExercise.title}
                description={currentExercise.description}
                lines={currentState.lines}
                onShuffle={handleShuffle}
                shuffled={currentState.shuffled}
                showCorrect={currentState.showCorrect}
                setShowCorrect={handleShowCorrect}
                selected={currentState.selected}
                handleDragStart={handleDragStart}
                handleDragOver={handleDragOver}
                handleDrop={handleDrop}
                handleDragEnd={handleDragEnd}
                isCorrect={isCorrect}
            />
        </div>
    );
};

export default LinkedListEx;