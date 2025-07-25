import React from 'react'

import styles from "./Intro.module.css"
// import resume from "../../../public/jiajing_chen_resume.pdf"
import profileImg from "../../assets/intro/profile_img.jpg"

export const Intro = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hey, I'm Jessica!</h1>
            <p className={styles.description}>I am computer science student at the University of Toronto passionate about machine learning, game development, and computer graphics.</p>
            <ul className={styles.links}>
              <li>
                <a href="mailto:jiajing.chen@mail.utoronto.ca">Email</a>
              </li>
              <li>
                <a href={"/jiajing_chen_resume.pdf"} target="_blank" rel="noopener noreferrer">Resume</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jessicachen-cjj/" target="_blank">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/swannercjj" target="_blank">GitHub</a>
              </li>
            </ul>
        </div>
          <img src={profileImg} alt="professional photo" className={styles.profileImg}/>
    </section>
  );
};
