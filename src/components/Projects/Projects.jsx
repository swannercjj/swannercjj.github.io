import React from 'react';
import styles from "./Projects.module.css";
import { ProjectCard } from './ProjectCard';

import PaperPlateParanoiaImg from "../../assets/projects/paper_plate_paranoia.png"
import DisbandedImg from "../../assets/projects/disbanded.png"


export const Projects = () => {
    const projects = [
        {
            "title": "Paper Plate Paranoia",
            "image": PaperPlateParanoiaImg,
            "description": "Bullet hell game made for GDDC Fall 2024 Game Jam",
            "link": "https://jason121301.itch.io/paper-plate-paranoia"
        },
        {
            "title": "Disbanded",
            "image": DisbandedImg,
            "description": "First person shooter rhythm game made for Game making Detahmatch 2024/25",
            "link": "https://recnats.itch.io/disbanded"
        },
    ];

    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {
                    projects.map((project, id) => {
                        return <ProjectCard key={id} project={project}/>
                    })
                }
            </div>
        </section>
    )
}
