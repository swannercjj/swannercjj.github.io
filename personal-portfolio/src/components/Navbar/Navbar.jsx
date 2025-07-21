import React, { useState } from "react"

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (<nav className={styles.navbar}>
        <a className={styles.title} href="/">
            Portfolio
        </a>
        <div className={styles.menu}>
            <img 
                className={styles.menuBtn} 
                src={
                    menuOpen 
                        ? getImageUrl("nav/menu_close.png")
                        : getImageUrl("nav/menu_icon.png")
                } 
                alt="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul 
                className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(false)}
            >
                <li>
                    <a href="#About Me">About Me</a>
                </li>
                <li>
                    <a href="#Experience">Experience</a>
                </li>
                <li>
                    <a href="#Projects">Projects</a>
                </li>
                <li>
                    <a href="#Contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    );
};
