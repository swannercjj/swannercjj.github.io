import styles from "./ProjectCard.module.css";
import { FiLink2 } from "react-icons/fi"


export const ProjectCard = ({ project, onOpen }) => {
  const { title, image, description, link } = project;

  return (
    <button className={styles.card} onClick={onOpen} aria-label={`View details for ${title}`}>
      <div className={styles.imageWrap}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.more}>
          <span className={styles.details}>View details →</span>
          <a
            href={link}
            className={styles.link}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label={`${title} on GitHub`}
          >
            <FiLink2 />
          </a>
        </div>
      </div>
    </button>
  );
};
