import React from 'react'
import styles from "./ProjectCard.module.css"


export const ProjectCard = ({ 
    project: { title, image, description, link }
}) => {
  return (
    <a href={link} className={styles.container}>
        <img 
        src={image} 
        alt={`Image of ${title}`} 
        className={styles.image}
        />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
    </a>
  )
}