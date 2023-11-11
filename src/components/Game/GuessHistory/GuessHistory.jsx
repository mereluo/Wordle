import React from "react";
import { useGameContext } from "../../../contexts/GameContext";
import GuessItem from "../GuessItem/GuessItem";
import "./GuessHistory.css";

function GuessHistory() {
    const { history } = useGameContext();
    return (
        <div>
            <ul className="history">
                {history.map((word, index) => (
                    <GuessItem index={index} word={word} />
                ))}
            </ul>
        </div>
    );
}

export default GuessHistory;
