import React, { useState } from 'react'
import styles from "./Experience.module.css"

import ShgLogo from "../../assets/experience/shg.png"
import RbcLogo from "../../assets/experience/rbc.png"
import UofaLogo from "../../assets/experience/uofa.png"

const experiences = [
    {
        role: "Tech Design Intern",
        company: "Sledgehammer Games (Activision)",
        date: "May 2025 - Aug 2025",
        description: "Design and program features for a future Call of Duty release with proprietary tools",
        logo: ShgLogo,
        logoBg: "#283337",
        monogram: "SG",
    },
    {
        role: "AI Engineer",
        company: "RBC Capital Markets",
        date: "May 2025 - Aug 2025",
        description: "Applied machine learning for predictive modeling in stock market applications",
        logo: RbcLogo,
        monogram: "RBC",
    },
    {
        role: "Quantitative Trading Analyst",
        company: "RBC Capital Markets",
        date: "Aug 2024 - Apr 2025",
        description: "Research, develop, and implement quantitative trading strategies",
        logo: RbcLogo,
        monogram: "RBC",
    },
    {
        role: "Undergraduate Research Assistant",
        company: "University of Alberta",
        date: "May 2024 - Aug 2024",
        description: "Explored how deep reinforcement learning agents can learn to optimize compute, paper submission to ICLR 2026",
        logo: UofaLogo,
        monogram: "UA",
    },
    {
        role: "Undergraduate Research Assistant",
        company: "University of Alberta",
        date: "May 2023 - Aug 2023",
        description: "Contributed to DreamerV3 by implementing deterministic seeding across components",
        logo: UofaLogo,
        monogram: "UA",
    },
]

const Logo = ({ src, alt, monogram }) => {
    const [failed, setFailed] = useState(false)

    if (failed || !src) {
        return <span className={styles.monogram}>{monogram}</span>
    }

    return (
        <img
            className={styles.logo}
            src={src}
            alt={`${alt} logo`}
            loading="lazy"
            onError={() => setFailed(true)}
        />
    )
}

export const Experience = () => {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.timeline}>
                {experiences.map((exp, id) => (
                    <div
                        key={id}
                        className={`${styles.item} ${id % 2 === 0 ? styles.left : styles.right}`}
                    >
                        <span className={styles.dot} aria-hidden="true" />
                        <article className={styles.card}>
                            <div className={styles.header}>
                                <div className={styles.logoWrap}>
                                    <Logo src={exp.logo} alt={exp.company} monogram={exp.monogram} />
                                </div>
                                <div className={styles.heading}>
                                    <h3 className={styles.role}>{exp.role}</h3>
                                    <h4 className={styles.company}>{exp.company}</h4>
                                </div>
                            </div>
                            <span className={styles.date}>{exp.date}</span>
                            <p className={styles.description}>{exp.description}</p>
                        </article>
                    </div>
                ))}
            </div>
        </section>
    )
}
