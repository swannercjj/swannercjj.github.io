import React from 'react';
import styles from "./Projects.module.css";
import { ProjectCard } from './ProjectCard';

import FittingInImg from "../../assets/projects/fitting_in.png"
import PaperPlateParanoiaImg from "../../assets/projects/paper_plate_paranoia.png"
import DisbandedImg from "../../assets/projects/disbanded.png"
import RNAImg from "../../assets/projects/rna.jpg"
import HeartBeatzImg from "../../assets/projects/heart_beatz.jpg"
import NeomImg from "../../assets/projects/neom.png"


export const Projects = () => {
    const projects = [
        {
            "title": "Fitting In",
            "image": FittingInImg,
            "description": "Multiplayer game where tiny ailens need to pilot a \"human\" spaceship as a disguise.",
            "link": "https://tycelm.itch.io/fitting-in"
        },
        {
            "title": "Paper Plate Paranoia",
            "image": PaperPlateParanoiaImg,
            "description": "Bullet hell game where paper plate must collect friends and escape the diner.",
            "link": "https://jason121301.itch.io/paper-plate-paranoia"
        },
        {
            "title": "Disbanded",
            "image": DisbandedImg,
            "description": "First person shooter rhythm game made for Game making Detahmatch 2024/25.",
            "link": "https://recnats.itch.io/disbanded"
        },
        {
            "title": "Predicting RNA Reactivity",
            "image": RNAImg,
            "description": "Designed and evaluated machine learning models to predict RNA chemical reactivity.",
            "link": "https://github.com/chenikabukes/413NeuralNetworks"
        },
        {
            "title": "Heart Beatz",
            "image": HeartBeatzImg,
            "description": "Heart beat tracker that personalizes workout music based on heart rate.",
            "link": "https://devpost.com/software/heart-beatz"
        },
        {
            "title": "Neom",
            "image": NeomImg,
            "description": "Agentic digital audio workstation that uses AI to help producers create music",
            "link": "https://devpost.com/software/neom"
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
