import React from 'react'
import { Link } from "react-scroll"
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"
import email from "../images/email.png"
import youngPicture from "../images/youngPicture.jpg"
import currentPicture from "../images/currentPicture.jpg"
import { Grid, Image, Header, Button, List } from 'semantic-ui-react'

class About extends React.Component {
    state = {
        mattStatus: null
    }

    switchPicToCurrent = () => {   
        if(this.state.mattStatus === null) {this.setState({mattStatus: "mattNow"})}
    }
    switchPicToYoung = () => {
        if(this.state.mattStatus === "mattNow") {this.setState({mattStatus: null})}
    }

    render () {
        return (
            <div id="about">
                <Header as="h1" id="name">
                    Matt Green
                </Header>
                
                <Grid divided='vertically'>
                  <Grid.Row columns={3}>
                    <Grid.Column >
                      <Image src={linkedin} alt="linkedin" className="icons" id="linkedin" href="https://linkedin.com/in/matthewgreen123" target="_blank" />
                    </Grid.Column>
                    <Grid.Column>
                      <Image src={github} alt="github" className="icons" id="github" href="https://github.com/matt-green1" target="_blank"/>
                    </Grid.Column>
                    <Grid.Column>
                      <Image src={email} alt="email" className="icons" id="email" href="https://google.com" target="_blank"/>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>

    
                <br/>

                <Grid divided='vertically'>
                  <Grid.Row columns={2}>
                    <Grid.Column>
                      <Header as="h1" id="greeting">
                          <span id="wave">
                          ✋
                          </span>&nbsp;
                           Hey, I'm Matt!
                      </Header>
                      <Header as="h4" id="blurb">
                            I'm a full-stack developer based in nyc. I'm passionate about using new technologies creatively to build delightful, intuitive experiences. I'm a jack of all trades, ready to use my varied experience/swissarmy like skillset to implement user focused, visually pleasant solutions.
                      </Header>
                    </Grid.Column>
                    <Grid.Column>
                    {
                        this.state.mattStatus === null
                
                        ?

                        <div>
                            <Image src={youngPicture} alt="youngpic" circular={true} size={"medium"}/>
                            <Header as="h4" className="interestsheader">Interests</Header>
                        
                            <List bulleted={true}>
                                <List.Item className="interestsbullets">
                                    Dinosaurs
                                </List.Item>
                                <List.Item className="interestsbullets">
                                    Bike Riding / Legos
                                </List.Item>
                                <List.Item className="interestsbullets">
                                    <a href="https://www.youtube.com/watch?v=cxqpcG01jcc&t=5s&ab_channel=MSGNetworks" target="_blank">The Knicks</a>
                                </List.Item>
                            </List>
                        </div>
                        
                        :
                        
                        <div>
                            <Image src={currentPicture} alt="currentpic" circular={true} size={"medium"}/>
                            <Header as="h4" className="interestsheader">Interests</Header>
                            <List bulleted={true}>
                                <List.Item className="interestsbullets">
                                    Audio Storytelling / Collaging
                                </List.Item>
                                <List.Item className="interestsbullets">
                                    Cooking
                                </List.Item>
                                <List.Item className="interestsbullets">
                                    Still, <a href="https://clutchpoints.com/knicks-news-new-york-has-worst-record-in-nba-over-the-last-20-seasons/" target="_blank">sadly</a>, the Knicks
                                </List.Item>
                            </List>
                        </div>
                        }
                        <br/>
                        <Button onClick={this.switchPicToYoung}>Matt Then</Button>
                        <Button onClick={this.switchPicToCurrent}>Matt Now</Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>

            
                <br/><br/><br/><br/>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={70}
                    duration={790}
                >
                    <Button name="triangle down" color="teal" centered="something"> ▼ ▼ ▼ Projects ▼ ▼ ▼</Button>
                </Link>
                
                <br/><br/><br/>
                <p>
                    {/* Add this if you can make it stick together and be movable around the screen + jiggly */}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;👨 <br/>
                    &nbsp;&nbsp;&nbsp;🤟 👕 👍<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;👖 <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;👟👟
                </p>

            </div>
        )
    }
}

export default About
