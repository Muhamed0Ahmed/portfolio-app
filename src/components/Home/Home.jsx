import React, {useEffect, useState} from "react";
import AnimatedLetters from "../Animations/AnimatedLetters";
import Cube from "../Animations/Cube";
import "./Home.scss";
const Home = () => {
    const [lettersClass, setLettersClass] = useState("text-animate");

    const lettersName = ["M","o", "h", "a", "m", "e", "d", " ", "A", "h", "m" , "e", "d"];
    const lettersjop = ["F","r", "o", "n", "t", " ", "E", "n", "d", "D", 'e',"v", "e", "l", "o", "p", "e", "r"];

    useEffect(() => {
        setTimeout(() => {
            setLettersClass("text-animate-hover")
        }, 4000)

    }, [])
    return ( 
        <div className="container">
        <div className="home-page ">
            <div className="d-flex-center-height">
                <div className="content">
                <h1>
                 <span  className="text-animate _1">H</span>
                 <span className="text-animate _2">i</span>   
                     <br/> 
                     <span  className="text-animate _3">I'</span>
                 <span className="text-animate _4">m</span>  
                <AnimatedLetters lettersClass={lettersClass}
                strArray={lettersName} idx={5}/> 
                <br/>
                <AnimatedLetters lettersClass={lettersClass} 
                strArray={lettersjop} idx={5 +lettersName.length} />
                </h1>
                <h3>JavaScript / React Developer</h3>
                
                </div>
            </div>
            <div className="cube-animate">
                <Cube/>
            </div>
        </div>
        </div>
     );
}

export default Home;