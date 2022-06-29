import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <nav>
            <NavLink className="link" exact to="/">Home</NavLink>
            <NavLink className="link" to="/characters">Characters</NavLink>
            <NavLink className="link" to="/nations">Nations</NavLink>
        </nav>
    );
}

export default NavBar;