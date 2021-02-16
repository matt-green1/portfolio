import React from 'react'
import { Link, animateScroll } from "react-scroll"
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"
import resume from "../images/resume.png"
import youngPicture from "../images/youngPicture.jpg"
import currentPicture from "../images/currentPicture.jpg"

class About extends React.Component {
    state = {
        mattStatus: null
    }

    picChangeHandler = () => {
        this.state.mattStatus === null ? this.setState({mattStatus: "mattNow"}) : this.setState({mattStatus: null})
    }

    render () {
        console.log(`This is the current state in the render: ${this.state.mattStatus}`)
        return (
            <div id="about">
                <h3>---------------HOME -----------------------</h3>
                
                <h1 id="name">
                    Matt Green
                </h1>
                
                <div id="infobar">
                    <h4>
                        Ny, Ny
                    </h4>
                    <a href="https://linkedin.com/in/matthewgreen123" target="_blank">
                        <img src={linkedin} alt="linkedin" className="icons"/>
                    </a>
                    <h3>LinkedIn</h3>
                    
                    <a href="https://github.com/matt-green1" target="_blank">
                        <img src={github} alt="github" className="icons"/>
                    </a>
                    <h3>
                        Github
                    </h3>

                    <a href="https://google.com" target="_blank">
                        <img src={resume} alt="resume" className="icons"/>
                    </a>
                    <h3>
                        Resume
                    </h3>
                </div>
                
                <br/>
                
                <h1>
                🤟 Hey, I'm Matt!
                </h1>

                <h4>
                    I'm a full stack software engineer in New York City. I draw on my love for art and design and... fun, to build interesting, user friendly projects.
                </h4>
                
                <p>
            
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;👨 <br/>
                &nbsp;&nbsp;&nbsp;🤟 👕 👍<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;👖 <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;👟👟
                </p>
                
                {
                this.state.mattStatus === null
                // 
                //../images/youngPicture.jpg
                ?
                <div>
                    <img src={youngPicture} alt="youngpic"/>
                    <h4> Interests</h4>
                    <ul>
                        <li>
                            Dinosaurs
                        </li>
                        <li>
                            Bike Riding
                        </li>
                        <li>
                            The Knicks
                        </li>
                    </ul>
                </div>
                :
                
                <div>
                    <img src={currentPicture} alt="currentpic"/>
                    <h4> Interests</h4>
                    <ul>
                        <li>
                            Building Apps
                        </li>
                        <li>
                            Cooking
                        </li>
                        <li>
                            Still the Knicks, sadly
                        </li>
                    </ul>
                </div>
                }

                <button onClick={this.picChangeHandler}>Matt Then</button>
                <button onClick={this.picChangeHandler}>Matt Now</button>
                
                <br/><br/><br/><br/>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={70}
                    duration={790}
                >
                    <button>Scroll down</button>
                </Link>

            </div>
        )
    }
}

export default About