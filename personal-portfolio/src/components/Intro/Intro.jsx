import React from 'react'

import styles from "./Intro.module.css"
import { getImageUrl } from '../../utils';


export const Intro = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hello there, I'm Jessica</h1>
            <p className={styles.description}>Here is a brief summary of my experience</p>
            {/* cv/resume, github, linkedin, email */}
        </div>
          <img src={getImageUrl("intro/profile_img.jpg")} alt="professional photo" className={styles.profileImg}/>
        <div className={styles.topBlur} ></div>
        <div className={styles.botBlur} ></div>
    </section>
  );
};
