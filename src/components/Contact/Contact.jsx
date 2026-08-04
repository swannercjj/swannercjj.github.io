import React from 'react'

import styles from "./Contact.module.css"

export const Contact = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <ul className={styles.links}>
        <li>
          <a href="mailto:jesschen.cjj@gmail.com">
            jesschen.cjj@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://github.com/swannercjj"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jessicachen-cjj/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  )
}
