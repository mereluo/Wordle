import { useGameContext } from "../../../contexts/GameContext";
import "./InputGuess.css";

function InputGuess() {
    const { currentWord, userInput, attempts, feedback, setAttempts, setFeedback, setUserInput, setHistory, history, isCorrect, setIsCorrect } = useGameContext();

    const handleGuess = () => {
        setFeedback("");
        // Check if the user input matches the current word
        if (userInput.toLowerCase() === currentWord.toLowerCase()) {
            setFeedback("Congratulations! You guessed the word!");
            setAttempts(attempts - 1);
            setHistory([userInput.toLowerCase(), ...history]);
            setIsCorrect(true);
        } else if (userInput.length != currentWord.length) {
            setFeedback(`The correct word has ${currentWord.length} characters.`);
        } else {
            // Wrong guess
            setHistory([userInput.toLowerCase(), ...history]);
            setAttempts(attempts - 1);
            if (attempts === 1) {
                setFeedback(`Sorry, you're out of attempts. The correct word was "${currentWord}".`);
            }
        }
    };
    return (
        <div className="input flex flex-col space-y-4">
            <div className="input-area">
                <input
                    type="text"
                    id="userInput"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    disabled={attempts === 0 || isCorrect} // Disable input if the game is over
                    className="border rounded py-2 px-3 leading-tight"
                    placeholder="Enter your word here..."
                />
                <button className="guess-btn" onClick={handleGuess} disabled={attempts === 0 || isCorrect}>
                    Guess
                </button>
            </div>
            <p>{feedback}</p>
        </div>
    );
}

export default InputGuess;
