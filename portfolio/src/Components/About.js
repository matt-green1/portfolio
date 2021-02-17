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
                    I'm a full stack developer based in nyc. I'm passionate about learning new technologies in service of building apps that explroe the intersection of creativity and techlogy. I love building delightful, visually pleasant, intuitive apps. Finding new ways... 
                </h4>
                
                <p>
            
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;👨 <br/>
                &nbsp;&nbsp;&nbsp;🤟 👕 👍<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;👖 <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;👟👟
                </p>
                
                {
                this.state.mattStatus === null
                
                ?
                <div>
                    <img src={youngPicture} alt="youngpic"/>
                    <h4> Interests</h4>
                    <ul>
                        <li>
                            Dinosaurs
                        </li>
                        <li>
                            Bike Riding / Legos
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
                            Audio Storytelling / Collaging
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