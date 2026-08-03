import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project, onOpen }) => {
  const { title, image, description } = project;

  return (
    <button className={styles.card} onClick={onOpen} aria-label={`View details for ${title}`}>
      <div className={styles.imageWrap}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <span className={styles.more}>View details →</span>
      </div>
    </button>
  );
};
