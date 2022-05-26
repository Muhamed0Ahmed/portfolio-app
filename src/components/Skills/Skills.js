import React ,{useEffect, useState}from "react";
import AnimatedLetters from "../Animations/AnimatedLetters";
import Chart from "../Animations/Chart";
import "./Skills.scss";

const Skills = () => {
    const [letterClass, setLetterClass] = useState("text-animate");
    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 4000)

    },[])
    return (
        <div className="skills-page container">
            <div className="content">
                <h1>
                    <AnimatedLetters lettersClass={letterClass}
                    strArray={["S", "k", "i", "l","l", "s"]}
                    idx={1}/>
                </h1>
                <div className="skills-chart">
                <Chart label={"HTML"} presentage="0.90"/>
                <Chart label={"CSS"} presentage="0.85"/>
                <Chart label={"JavaScript"} presentage="0.75"/>
                <Chart label={"React"} presentage="0.75"/>
                <Chart label={"Sass"} presentage="0.8"/>
                <Chart label={"Bootstarp"} presentage="0.85"/>
                </div>

                
            </div>
        </div>
    )
}
 export default Skills;