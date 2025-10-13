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
            "caption": "Titlecard Art Credits: Ivan Mora",
            "description": "Multiplayer game where tiny ailens need to pilot a \"human\" spaceship as a disguise.",
            "link": "https://tycelm.itch.io/fitting-in",
            "details": [
                "Developed as part of the University of Toronto CSC404 course, Fitting In was a semester-long collaboration with the Faculty of Music and the Art and Animation Program at Centennial College. The goal was to create a complete, playable game that brought together students across disciplines to explore game, art, and audio design.", 
                "I worked on various aspects of the game, including designing the mechanics, level tasks, and implementing the gameplay. I gave my input on the art style and overall theme of the game as well. This project has been a great opportunity to collaborate with people from different disciplines and learn how to integrate various elements into a cohesive game experience.",
                "One of the primary focuses is designing systems and specific level tasks that encourage player interaction and cooperation. A challenge we face is that since this game is designed to be multiplayer, we want to make sure that cooperation is necessary and engage all players. An example is that for operating the robot arm, there are controls that are given to a different terminal and players in different locations must coordinate to utilize it effectively.",
                "I am also the project manager, organizing meetings and communicating effectively to relay messages from the course coordinator to our team. This game is still in development and should be finished around the end of November 2025. We have had great feedback from global industry professionals, and the experience has been amazing and it is exciting to see how the features I implemented and designed come to life.",
            ],
        },
        {
            "title": "Paper Plate Paranoia",
            "image": PaperPlateParanoiaImg,
            "caption": "Art Credits: Joshua Li",
            "description": "Bullet hell game where paper plate must collect friends and escape the diner.",
            "link": "https://jason121301.itch.io/paper-plate-paranoia",
            "details": [
                "This is the first game I built! I participated in the 2024 utGDDC Fall Game Jam where the theme was \"one-time use\". When brainstorming ideas, my team of 4 focused on working that theme into our main character, a disposable paper plate. A bullet hell game seemed fitting for the theme, as the paper plate would be dodging food and drink items while collecting friends to escape the diner. I worked on designing food enemies.",
                "The first enemy I designed was an exploding popcorn delayed seeker. It moves to a player's previous location after a short delay. After three movements, it explodes and damages the player if they get caught in its vicinity. Each phase of enemy behaviour is visually shown through different states of animations. This enemy encourages the player to move to new locations. The second enemy I designed is a ketchup bottle laser shooter that spawns and stays in the corner of a player's screen for a short time, before locking onto a final position and firing.",
                "Out of the 8 submissions to the game jam, our game won second place. I had always thought about pursuing game development as a career but took a detour into machine learning for a bit. This game jam helped me realize that this is something that I wanted to pursue."
            ],
        },
        {
            "title": "Disbanded",
            "image": DisbandedImg,
            "caption": "Titlecard Art Credits: Jessica Chen",
            "description": "First person shooter rhythm game made for Game making Deathmatch 2024/25.",
            "link": "https://recnats.itch.io/disbanded",
            "details": [
                "I have a lot of programming experience so I was thrilled to see the other side of game design through art and music. My roles in this project were 3D artist, animator, and sound designer. It was definitely a challenge at first, learning how the Blender animator works and how to rig models. However, I was able to learn quickly and create a variety of assets such as weapons, character, and environment models. I also created first-person shooter animations such as walking and shooting. As this is a rhythm game, I also composed a simple soundtrack and sound effects for the game. Although I have been performing in orchestras my entire life, this was my first time composing digital music.",
                "As a computer science student, there are not many cases where I have time to explore other aspects of game design. I was studying how different games showcase character personality in animations, an example being how each character in Overwatch has a unique reload animation. I am definitely no where near professional level but it was great to apply the rigging techniques I learned in a computer graphics class and see it in action.",
            ],
        },
        {
            "title": "Heart Beatz",
            "image": HeartBeatzImg,
            "description": "Heart beat tracker that personalizes workout music based on heart rate.",
            "link": "https://devpost.com/software/heart-beatz",
            "details": ["As I started computer science in university with no prior experience, I went into many hackathons in my second year with the goal of exploring a new area. I worked with 3 other teammates to build a heart rate monitor that plays music based on heart rate. Have you ever walked around listening to music and noticed that your steps matched the tempo of the song you were listening to? My team did some research and found that the tempo of music has an affect on heart rate. In other words, studies showed that faster music correlated to an increase in heart rate. Part of exercising is achieving a target heart rate, so we wanted to build a device that would help users achieve that with music.",
                "My main role was with the hardware, working with the Arduino and a sensor to read data. This was my first time using an Arduino so half of the time was spent on getting the correct hardware setup, and the second half of the time was spent making sure that the data is being correctly read and processed. Challenges came when we had insufficient hardware such as an SD card reader and we tried improvising with the pieces we had, using an SD card reader from an attachable screen.",
            ],
        },
        {
            "title": "Neom",
            "image": NeomImg,
            "caption": "Thumbnail Art Credits: Jessica Chen",
            "description": "Agentic digital audio workstation that uses AI to help producers create music.",
            "link": "https://devpost.com/software/neom",
            "details": ["This project was built during Hack the North 2025, my second time attending. My first time at Hack the North was in 2022, when I only had one year of programming experience. Needless to say, the project I built was not very functional but I had a great time. My friend and I were in the same boat where we only had data analysis experience and lacked project experience, so we essentially turned the weekend into a learning opportunity of how to properly use GitHub. Fast forward three years and I am extremely grateful for the second chance to attend where I was able to contribute to a more polished project.",
                "I worked with 3 other teammates to build an AI-powered digital audio workstation that would help make music production more accessible to beginners. I set up the backend database on Microsoft Azure and connected it to the frontend. I also worked on implementing a save projects feature for users to save their work.",
                "Although our project did not win any prizes, many of the judges and mentors we spoke to were very interested in the product and gave great feedback. It was a great experience and I learned a lot about working with databases and cloud services. I was also very happy being there supporting my friends, many of which made it as finalists or won sponsored prizes!",
            ],
        },
        // {
        //     "title": "Predicting RNA Reactivity",
        //     "image": RNAImg,
        //     "description": "Designed and evaluated machine learning models to predict RNA chemical reactivity.",
        //     "link": "https://github.com/chenikabukes/413NeuralNetworks",
        //     "details": ["A lot of my machine learning experience has been with reinforcement learning"],
        // },
    ];

    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {
                    projects.map((project, id) => {
                        return <ProjectCard key={id} project={project} defaultOpen={id < 2}/>
                    })
                }
            </div>
        </section>
    )
}
