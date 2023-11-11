import { Link } from "react-router-dom";

function Rules() {
    return (
        <div className="rules bg-gray-light space-y-4 p-12">
            <h1>Wordle Game Rules</h1>
            <h2 className="text-lg font-bold">Game Objective</h2>
            <p>The objective of the game is to guess a secret word. If you correctly guess the word, you win. If you make an incorrect guess, the game provides clues to help them figure out the correct word.</p>
            <p className="font-bold">The game operates as follows:</p>
            <div>
                <ul className="list-decimal list-inside">
                    <li>
                        The game secretly selects the word <span className="text-green-600 font-bold">"Fellow."</span>
                    </li>
                    <li>The screen prompts the user to input a 6-letter word and shows that they have 6 attempts remaining.</li>
                    <li>
                        The user submits the word <span className="text-red-600 font-bold">"hat."</span>
                    </li>
                    <li>Since "hat" is too short, the game prompts a longer word and does not deduct any attempts.</li>
                    <li>
                        The user submits <span className="font-bold">"Allows."</span>
                    </li>
                    <li>
                        The game shows "<span className="bg-gray">A</span>
                        <span className="bg-[#fde047]">L</span>
                        <span className="bg-[#4ade80]">L</span>
                        <span className="bg-[#fde047]">O</span>
                        <span className="bg-[#fde047]">W</span>
                        <span className="bg-gray">S</span>," and since this is not the current word, it shows the user has 1 less attempt.
                    </li>
                    <li>
                        The user submits <span className="text-green-600 font-bold">"Fellow."</span>
                    </li>
                    <li>The game shows "Congratulations! Would you like to try again?"</li>
                </ul>
            </div>
            <h2 className="text-lg font-bold">Game Setup</h2>
            <p>The game offers two difficulty levels: "Normal" and "Hard." You can select their preferred difficulty level on the landing page.</p>
            <p>
                <strong>Normal Game</strong>
                <ul className="list-disc list-inside">
                    <li>Word Length: 6 letters.</li>
                    <li>Number of Attempts: 6.</li>
                </ul>
            </p>
            <p>
                <strong>Hard Game:</strong>
                <ul className="list-disc list-inside">
                    <li>Word Length: 7 letters.</li>
                    <li>Number of Attempts: 5.</li>
                </ul>
            </p>
            <p>The selected difficulty level directs you to the appropriate page, where you can play the game:</p>
            <div>
                <Link to="/game/normal">
                    <button className="difficulty-btn">Normal</button>
                </Link>
                <Link to="/game/hard">
                    <button className="difficulty-btn">Hard</button>
                </Link>
            </div>
        </div>
    );
}

export default Rules;
