import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav className="bg-gray-dark pl-5 top-0 left-0 right-0 ">
            <ul className="flex p-5 justify-end space-x-5 flex-row">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/game/normal">Normal</Link>
                </li>
                <li>
                    <Link to="/game/hard">Hard</Link>
                </li>
                <li>
                    <Link to="/rules">Rules</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
