import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <nav>
            <NavLink>Home</NavLink>
            <NavLink>Characters</NavLink>
            <NavLink>Nations</NavLink>
        </nav>
    );
}

export default NavBar;