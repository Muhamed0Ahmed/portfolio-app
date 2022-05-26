import { faBehanceSquare,  faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faHome, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.scss";



const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <h1>M</h1>
            </Link>
            <nav>
                
                <NavLink  exact ="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#88888d"/>
                </NavLink>

                <NavLink  exact ="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#88888d"/>
                </NavLink>

                <NavLink  exact ="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#88888d"/>
                </NavLink>
                <NavLink  exact ="true" activeclassname="active" className="skills-link" to="/skills">
                    <FontAwesomeIcon icon={faLayerGroup} color="#88888d"/>
                </NavLink>
            </nav>

            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/mohamed-ahmed-011559219" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} color="#d4d4de"/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Muhamed0Ahmed" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} color="#d4d4de"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.behance.net/mohamedahmed699" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faBehanceSquare} color="#d4d4de"/>
                    </a>
                </li>
            </ul>
         
        </div>
    )
}

export default Sidebar