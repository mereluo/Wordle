import React, { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
    const [currentWord, setCurrentWord] = useState("");
    const [attempts, setAttempts] = useState(0);
    const [userInput, setUserInput] = useState("");
    const [feedback, setFeedback] = useState("");
    const [history, setHistory] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);

    const contextValue = {
        currentWord,
        setCurrentWord,
        attempts,
        setAttempts,
        userInput,
        setUserInput,
        feedback,
        setFeedback,
        history,
        setHistory,
        isCorrect,
        setIsCorrect,
    };

    return <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>;
};
