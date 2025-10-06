import React, { useState } from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project, defaultOpen = false }) => {
  const { title, image, description, link, details } = project;
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={styles.container}>
      <button
        className={styles.header}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className={styles.headerLeft}>
          <img src={image} alt={title} className={styles.image} />
          <div className={styles.textBlock}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
        <span className={`${styles.icon} ${isOpen ? styles.rotate : ""}`}>
          ▼
        </span>
      </button>

      <div className={`${styles.panel} ${isOpen ? styles.open : ""}`}>
        <div className={styles.panelContent}>
          {details && details.map((paragraph, i) => (
              <p key={i} className={styles.details}>
                {paragraph}
              </p>
            ))}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              View Project →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
