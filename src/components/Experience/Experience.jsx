import React from 'react'
import styles from "./Experience.module.css"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
        <h2 className={styles.title}>Experience</h2>
        <VerticalTimeline> 
            <VerticalTimelineElement
                className={styles.timelineElement}
                iconStyle={{ background: "#fff", color: "#fff" }}
                date="May 2025 - Aug 2025"
            >
                <h3 className="vertical-timeline-element-title">AI Engineer</h3>
                <h4 className="vertical-timeline-element-subtitle">RBC Capital Markets</h4>
                <p>Applied machine learning for predictive modeling in stock market applications</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className={styles.timelineElement}
                iconStyle={{ background: "#fff", color: "#fff" }}
                date="Aug 2024 - Apr 2025"
            >
                <h3 className="vertical-timeline-element-title">Quantitative Trading Analyst</h3>
                <h4 className="vertical-timeline-element-subtitle">RBC Capital Markets</h4>
                <p>Research, develop, and implement quantitative trading strategies</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className={styles.timelineElement}
               iconStyle={{ background: "#fff", color: "#fff" }}
                date="May 2024 - Aug 2024"
            >
                <h3 className="vertical-timeline-element-title">Undergraduate Research Assistant</h3>
                <h4 className="vertical-timeline-element-subtitle">University of Alberta</h4>
                <p>Explored how deep reinforcement learning agents can learn to optimize compute</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className={styles.timelineElement}
                iconStyle={{ background: "#fff", color: "#fff" }}
                date="May 2023 - Aug 2023"
            >
                <h3 className="vertical-timeline-element-title">Undergraduate Research Assistant</h3>
                <h4 className="vertical-timeline-element-subtitle">University of Alberta</h4>
                <p>Contributed to DreamerV3 by implementing deterministic seeding across components</p>
            </VerticalTimelineElement>

        </VerticalTimeline>

    </section>
  )
}
