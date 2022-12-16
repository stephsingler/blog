import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.scss';

const NavComponent = () => {
    // This styling will be applied to a <NavLink> when the
    // route that it links to is currently selected.
    let activeStyle = {
        color: '#a68b80'
    };

    let activeClassName = "#a68b80";

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
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    >
                        ARTICLES
                    </NavLink>
                </li>
                <li>
                    <NavLink to="safe-swaps">
                        {({ isActive }) => (
                            <span
                                className={
                                    isActive ? activeClassName : undefined
                                }
                            >
               SAFE SWAPS
              </span>
                        )}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="ingredient-education"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    >
                       INGREDIENT EDUCATIONS
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavComponent;
