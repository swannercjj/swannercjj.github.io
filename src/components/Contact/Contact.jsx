import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMail, IoCodeSlashSharp } from "react-icons/io5";

import styles from "./Contact.module.css"

export const Contact = () => {
  const links = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/jessicachen-cjj/",
      icon: <FaLinkedin />
    },
    {
      name: "Github",
      href: "https://github.com/swannercjj",
      icon: <FaGithub />
    },
    {
      name: "Email",
      href: "mailto:jiajing.chen@mail.utoronto.ca",
      icon: <IoMail />
    },
    {
      name: "Repo",
      href: "https://github.com/swannercjj/swannercjj.github.io",
      icon: <IoCodeSlashSharp />
    }
  ]

  return (
    <footer id="contact">
      <div className={styles.container}>
        <ul className={styles.linksList}>
            {links.map((link, index) => (
              <li>
                <a 
                  className={styles.linkItem}
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </footer>
  )
}
