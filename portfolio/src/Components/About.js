import React from 'react'
import { Link, animateScroll } from "react-scroll"
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"
import resume from "../images/resume.png"
import youngPicture from "../images/youngPicture.jpg"
import currentPicture from "../images/currentPicture.jpg"
import { Grid, Image, Header, List } from 'semantic-ui-react'

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
                <h1 id="name">
                    Matt Green
                </h1>
                
                <Grid divided='vertically'>
                  <Grid.Row columns={3}>
                    <Grid.Column>
                      <Image src={linkedin} alt="linkedin" className="icons" href="https://linkedin.com/in/matthewgreen123" target="_blank"/>
                      <Header as="h4">Linkedin</Header>
                    </Grid.Column>
                    <Grid.Column>
                      <Image src={github} alt="github" className="icons" href="https://github.com/matt-green1" target="_blank"/>
                      <Header as="h4">Github</Header>
                    </Grid.Column>
                    <Grid.Column>
                      <Image src={resume} alt="resume" className="icons" href="https://google.com" target="_blank"/>
                      <Header as="h4">Resume</Header>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>

    
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