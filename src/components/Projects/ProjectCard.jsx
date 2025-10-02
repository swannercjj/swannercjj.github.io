import React, { useState } from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project }) => {
  const { title, image, description, link, details } = project;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={styles.container}
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={0}
      >
        <img
          src={image}
          alt={`Image of ${title}`}
          className={styles.image}
        />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>

      {isOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsOpen(false)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            <h2>{title}</h2>
            <img src={image} alt={`Image of ${title}`} />
            <p>{details}</p>
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer">
                Visit Project
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
};
