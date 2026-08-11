import React, { useEffect, useState } from "react"
import { FiSun, FiMoon } from "react-icons/fi"

import styles from "./Navbar.module.css";
import menuIcon from "../../assets/nav/menu_icon.png"
import menuClose from "../../assets/nav/menu_close.png"


const getInitialTheme = () => {
    if (typeof document !== "undefined") {
        const current = document.documentElement.getAttribute("data-theme");
        if (current) return current;
    }
    return "light";
};

export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        try {
            localStorage.setItem("theme", theme);
        } catch { /* ignore */ }
    }, [theme]);

    const toggleTheme = () =>
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">
                Portfolio
            </a>
            <div className={styles.menu}>
                <div className={styles.bar}>
                    <button
                        type="button"
                        className={styles.themeToggle}
                        onClick={toggleTheme}
                        aria-label={
                            theme === "dark"
                                ? "Switch to light mode"
                                : "Switch to dark mode"
                        }
                        title={
                            theme === "dark"
                                ? "Switch to light mode"
                                : "Switch to dark mode"
                        }
                    >
                        {theme === "dark" ? <FiSun /> : <FiMoon />}
                    </button>
                    <img
                        className={styles.menuBtn}
                        src={
                            menuOpen
                                ? menuClose
                                : menuIcon
                        }
                        alt="menu-button"
                        onClick={() => setMenuOpen(!menuOpen)}
                    />
                </div>
                <ul
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <a href="#about">About Me</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact Me</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
