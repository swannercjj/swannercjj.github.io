import styles from "./Intro.module.css"
import { CardDeck } from "./CardDeck"

export const Intro = () => {
  return (
    <section className={styles.container} id="about">
        <div className={styles.content}>
            <h1 className={styles.title}>Hey, I'm Jessica!</h1>
            <p className={styles.description}>I am a game developer and machine learning researcher passionate about dance, music, and game design.  Currently I am technical design intern working on Call of Duty at Sledgehammer Games.</p>
            <p className={styles.description}>I recently finished my undergraduate studies in Computer Science at the University of Toronto. Soon, I will be heading to University of Alberta to pursue my graduate studies supervised by Dr. Michael Bowling.</p>
          <ul className={styles.links}>
              <li>
                <a className={styles.primary} href="https://www.linkedin.com/in/jessicachen-cjj/" target="_blank">LinkedIn</a>
              </li>
              <li>
                <a href={"/jessica_chen_resume.pdf"} target="_blank" rel="noopener noreferrer">Resume</a>
              </li>
              <li>
                <a href="https://github.com/swannercjj" target="_blank">GitHub</a>
              </li>
            </ul>
        </div>
        <CardDeck />
    </section>
  );
};
