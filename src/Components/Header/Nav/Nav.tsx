import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.scss';

const NavComponent = () => {
    let activeStyle = {
        color: '#a68b80'
    };

    return (
        <nav className="NavComponent">
            <ul>
                <li>
                    <NavLink
                        to="/"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="articles"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        ARTICLES
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="safe-swaps"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
               SAFE SWAPS
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="ingredient-education"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                       INGREDIENT EDUCATION
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavComponent;
