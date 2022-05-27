import { useEffect, useState } from "react"
import AnimatedLetters from "../Animations/AnimatedLetters"

const Projects = () => {
    const [letter, setLetter] = useState("text-animate");
    useEffect(() => {
        setTimeout(() => {
            setLetter("text-animate-hover")
        }, 4000)
    }, [])
    return (
        <div className="container projects-page">
            <AnimatedLetters lettersClass={letter} strArray={["P", "R", "O", "J", "E", "C", "T", "s"]} idx={3}/>
        </div>
    )
}

export default Projects;