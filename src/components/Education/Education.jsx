import React, { useState } from 'react'
import styles from "./Education.module.css"

import UofaLogo from "../../assets/experience/uofa.png"
import UoftLogo from "../../assets/experience/uoft.png"


const education = [
    { 
        logo: UofaLogo, 
        date: "2026 - Present", 
        degree: "MSc in Computing Science", 
        school: "University of Alberta", 
        bullets: [] 
    },
    { 
        logo: UoftLogo, 
        date: "2021 - 2026", 
        degree: "BSc in Computer Science", 
        school: "University of Toronto", 
        bullets: [
            "High Disctinction w/ focus in AI, minor in Mathematics, minor in Statistical Science",
            "NSERC Undergraduate Student Research Award",
            "Konrad Group Women in Technology Scholarship",
            "Ubisoft Award in Video Game Design",
            "Department of Computer Science Engagement Award",
            "VP Academics of UTMIST",
        ] 
    },
]

const EduLogo = ({ src, alt }) => {
    const [failed, setFailed] = useState(false)

    return (
        <img
            className={styles.eduLogo}
            src={src}
            alt={`${alt} logo`}
            loading="lazy"
            onError={() => setFailed(true)}
        />
    )
}

export const Education = () => {
    return (
        <section className={styles.container} id="education">
            <h2 className={styles.title}>Education</h2>
            <div className={styles.eduTimeline}>
                <div className={styles.eduItems}>
                    {education.map((edu, i) => (
                        <div key={i} className={styles.eduEntry}>
                            <span className={styles.eduNode}>
                                <EduLogo src={edu.logo} alt={edu.school} />
                            </span>
                            {(
                                <div className={styles.eduContent}>
                                    <span className={styles.eduDate}>{edu.date}</span>
                                    <h3 className={styles.eduDegree}>{edu.degree}</h3>
                                    <p className={styles.eduSchool}>{edu.school}</p>
                                    {edu.bullets && edu.bullets.length > 0 && (
                                        <ul className={styles.eduBullets}>
                                            {edu.bullets.map((bullet, j) => (
                                                <li key={j}>{bullet}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
