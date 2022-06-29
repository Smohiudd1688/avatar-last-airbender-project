import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/characters">Characters</NavLink>
            <NavLink to="/nations">Nations</NavLink>
        </nav>
    );
}

export default NavBar;