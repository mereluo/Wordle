import { useEffect, useState } from "react";
import { useGameContext } from "../../../contexts/GameContext";
import "./GuessItem.css";

function GuessItem({ word, index }) {
    const { currentWord } = useGameContext();
    const [resultMap, setResultMap] = useState(Array.from({ length: currentWord.length }, () => "gray-letter "));

    useEffect(() => {
        setResultMap(mapLetterStyle(word));
    }, [word]);

    function buildLetterFrequencyMap(goal) {
        const freqMap = new Map();
        for (const char of goal) {
            const lowercaseChar = char.toLowerCase();
            if (!freqMap.get(lowercaseChar)) {
                freqMap.set(lowercaseChar, 1);
            } else {
                freqMap.set(lowercaseChar, freqMap.get(lowercaseChar) + 1);
            }
        }
        return freqMap;
    }
    function mapLetterStyle(word) {
        let freqMap = buildLetterFrequencyMap(currentWord);
        const goal = currentWord.toLowerCase();
        const item = word.toLowerCase();
        let updatedResult = Array.from({ length: currentWord.length }, () => "gray-letter ");
        for (let i = 0; i < item.length; i++) {
            if (item[i] === goal[i]) {
                updatedResult[i] = "green-letter";
                freqMap.set(item[i], freqMap.get(item[i]) - 1);
            }
        }
        for (let i = 0; i < item.length; i++) {
            if (item[i] !== goal[i] && goal.includes(item[i])) {
                const char = item[i];
                if (freqMap.get(char) > 0) {
                    updatedResult[i] = "yellow-letter";
                    freqMap.set(char, freqMap.get(char) - 1);
                }
            }
        }
        return updatedResult;
    }

    return (
        <div>
            <div className="guess-item">
                {word.split("").map((letter, letterIndex) => (
                    <div key={letterIndex} className={`letter-box ${resultMap[letterIndex]}`}>
                        <span className="letter">{letter}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GuessItem;
