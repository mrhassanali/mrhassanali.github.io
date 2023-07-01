import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./Style.css";

const Navbar = () => {
    const [isDarkMode, setDarkMode] = useState(
        localStorage.getItem("darkmode") === "enable"
    );

    useEffect(() => {
        localStorage.setItem("darkmode", isDarkMode ? "enable" : "");
    }, [isDarkMode]);

    useEffect(() => {
        let navbar = document.querySelector('header .navbar');
        document.querySelector('#menu-btn').onclick = () => {
            navbar.classList.toggle('active');
        };
    });
    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode);
    };

    let location = useLocation();


    return (
        <>
            <header>
                <Link to="/" className="logo">Cheat<span>Sheet</span></Link>
                <nav className="navbar">
                    <Link to="/" className={`${location.pathname === "/" ? "active" : ""}`}><i className="fa-sharp fa-solid fa-house"></i> Home</Link>
                    <Link to="/html" className={`${location.pathname === "/html" ? "active" : ""}`}>HTML</Link>
                    <Link to="/javascript" className={`${location.pathname === "/javascript" ? "active" : ""}`}>JavaScript</Link>
                    <Link to="/ReactSheet" className={`${location.pathname === "/ReactSheet" ? "active" : ""}`}>React</Link>

                    <button id="btn-dark" onClick={toggleDarkMode}>
                        {isDarkMode ? "Dark Mode ON" : "Dark Mode off"}
                    </button>
                    {isDarkMode && (
                        <style>
                            {`
            body {
            background-color: black;
            color:white;
            }
            span.output {
            color: white;
            }
            pre.output,
            .sub-item{
                color:black;
            }
            .syntax {
            color: white;
            }
            .size {
            color: white;
            }
            .alert-success {
            color: black;
            }
            table{
                background:white
            }
        `}
                        </style>
                    )}
                </nav>
                <div className="icons">
                    <div id="menu-btn" className="fas fa-bars"></div>
                </div>
            </header>
            <Outlet />
        </>
    );
}

export default Navbar;