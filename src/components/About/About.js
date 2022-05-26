import "./About.scss";

import React, {useEffect, useState} from "react";
import AnimatedLetters from "../Animations/AnimatedLetters";

const About = () => {
    
    const aboutStr = "About Me";
    const aboutArr = aboutStr.split("");
    const [letter, setLetter] = useState("text-animate");

    useEffect(() => {
        setTimeout(() => {
            setLetter("text-animate-hover");
        },2000)
    },[])
    return (
        <div className="about-page">
            <div className="container">
                <h1>
                    <AnimatedLetters lettersClass={letter} strArray={aboutArr} idx={5}/>
                </h1>
                <h4>
                    <span>I'm a front-end developer specializing in website design. My duties include determining the structure and design of web pages, striking a balance between functional and aesthetic design, and ensuring web design is optimized for smartphones</span>
                </h4>
               

            </div>
        </div>
    )
}

export default About;