import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    return (
        <div className="home-page bg-gray-light flex flex-col space-y-5 justify-center p-12">
            <h1>Welcome to Wordle</h1>
            <div className="space-y-3">
                <h3 className="font-bold text-lg">Play Game</h3>
                <div>
                    <Link to="/game/normal">
                        <button className="difficulty-btn">Normal</button>
                    </Link>
                    <Link to="/game/hard">
                        <button className="difficulty-btn">Hard</button>
                    </Link>
                </div>
            </div>
            <div>
                <h3 className="font-bold text-lg">Game Rules</h3>
                <p className="italic mb-1">Wordle is a word game that challenges to figure out a word within only a certain number of guesses.</p>
                <Link to="/rules">Read the detailed rules</Link>
            </div>
        </div>
    );
}

export default Home;
