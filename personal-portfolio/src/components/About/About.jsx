import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./About.module.css"

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About Me</h2>
            <div className={styles.content}>
            <img src={getImageUrl("about/img.png")} alt="cherry blossoms" className={styles.aboutImg}/>
            <div className={styles.aboutList}>
                <p className={styles.aboutItem}>I am Jessica Chen, a computer science student at the University of Toronto and an aspiring game developer. My journey in tech started with a love for games and the joy they can bring to people. The story really started taking off when I decided to apply to computer science for university with no prior experience. I took that leap of faith and never looked back. </p>
                <p className={styles.aboutItem}>I was awarded NSERC USRA scholarship and worked on reinforcement learning research at the University of Alberta supervised by Michael Bowling. Through various machine learning projects, I have gained experience in data analysis, deep learning networks, and even some visualizations using Unity! This year, I am eager to continue diversifying my skill set further with computer graphics research in physics-based animation at the University of Toronto with David Levin.</p>
            </div>
        </div>
    </section>
  )
};
