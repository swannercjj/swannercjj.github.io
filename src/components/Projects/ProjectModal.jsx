import { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./ProjectModal.module.css";

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  const { title, image, caption, link, details } = project;

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.close} onClick={onClose} aria-label="Close">
          ×
        </button>

        <h3 className={styles.title}>{title}</h3>

        <figure className={styles.figure}>
          <img src={image} alt={title} className={styles.image} />
          {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
        </figure>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            View Project ↗
          </a>
        )}

        {details &&
          details.map((paragraph, i) => (
            <p key={i} className={styles.details}>
              {paragraph}
            </p>
          ))}
      </div>
    </div>,
    document.body
  );
};
