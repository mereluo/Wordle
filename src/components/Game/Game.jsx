import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { hardWords, normalWords } from "../../data/words";
import "./Game.css";
import InputGuess from "./InputGuess/InputGuess";
import GuessHistory from "./GuessHistory/GuessHistory";
import { useGameContext } from "../../contexts/GameContext";

function Game() {
    const { difficulty } = useParams();
    const { attempts, setAttempts, setFeedback, setUserInput, setCurrentWord, currentWord, setHistory, setIsCorrect } = useGameContext();

    const setUp = () => {
        // Fetch a random word based on the selected difficulty
        if (difficulty === "normal") {
            const randomIndex = Math.floor(Math.random() * normalWords.length);
            setCurrentWord(normalWords[randomIndex]);
            setAttempts(6);
        } else if (difficulty === "hard") {
            const randomIndex = Math.floor(Math.random() * hardWords.length);
            setCurrentWord(hardWords[randomIndex]);
            setAttempts(5);
        }
    };
    const handleReset = () => {
        // Reset the game by generating a new word and resetting attempts
        setUserInput("");
        setFeedback("");
        setHistory([]);
        setUp();
        setIsCorrect(false);
    };
    useEffect(() => {
        handleReset();
    }, [difficulty]);

    return (
        <div className="game space-y-4 bg-gray-light">
            <h1>Wordle - {difficulty} level </h1>
            <p>
                Current Word: {currentWord.length}-Character Long {currentWord}
            </p>
            <p className="attempt">
                Attempts Remaining: <span className="attempt-num">{attempts}</span>
            </p>
            <InputGuess />
            <GuessHistory />
            <button className="reset-btn" onClick={handleReset}>
                Reset
            </button>
        </div>
    );
}

export default Game;
