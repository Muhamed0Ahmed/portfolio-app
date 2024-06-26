import { faBootstrap, faCss3, faGithub, faHtml5, faJs, faReact } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Cube.scss";

const Cube = () => {
    return (
        <div className="container">
            <div className=" cube-animate">
                <div className="cube">
                    <div className="face front html"><FontAwesomeIcon icon={faHtml5}/></div>
                    <div className="face back css"><FontAwesomeIcon icon={faCss3}/>Css</div>
                    <div className="face right js"><FontAwesomeIcon icon={faJs}/></div>
                    <div className="face left react"><FontAwesomeIcon icon={faReact}/></div>
                    <div className="face top bootstrap"><FontAwesomeIcon icon={faBootstrap}/></div>
                    <div className="face bottom git"><FontAwesomeIcon icon={faGithub}/></div>
                
                </div>

            </div>
        </div>
    )
}
export default Cube;