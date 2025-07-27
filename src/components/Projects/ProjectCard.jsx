import React from 'react'
import styles from "./ProjectCard.module.css"


export const ProjectCard = ({ 
    project: { title, image, description, link }
}) => {
  return (
        <div className={styles.container}>
            <img 
                src={image} 
                alt={`Image of ${title}`} 
                className={styles.image}
            />
            <h3 className={styles.title}><a href={link}>{title}</a></h3>
            <p className={styles.description}>{description}</p>
        </div>
    )
}