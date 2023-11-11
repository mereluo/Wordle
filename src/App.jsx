import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Game from "./components/Game/Game";
import Rules from "./components/Rules/Rules";
import NavBar from "./components/NavBar/NavBar";
import { GameProvider } from "./contexts/GameContext";

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rules" element={<Rules />} />
                <Route
                    path="/game/:difficulty"
                    element={
                        <GameProvider>
                            <Game />
                        </GameProvider>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
