import { useEffect, useState } from "react"
import AnimatedLetters from "../Animations/AnimatedLetters"

import "./projects.scss"

const Projects = () => {
    const [letter, setLetter] = useState("text-animate");
    useEffect(() => {
        setTimeout(() => {
            setLetter("text-animate-hover")
        }, 4000)
    }, [])
    return (
        <div className="container projects-page">
            <h1>
                <AnimatedLetters lettersClass={letter} strArray={["P", "R", "O", "J", "E", "C", "T", "s"]} idx={3}/>
            </h1>
        </div>
    )
}

export default Projects;