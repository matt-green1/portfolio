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
                      <Image src={linkedin} alt="linkedin" className="hvr-skew" id="linkedin" href="https://linkedin.com/in/matthewgreen123" target="_blank" />
                    </Grid.Column>
                    <Grid.Column>
                      <Image src={github} alt="github" className="hvr-skew" id="github" href="https://github.com/matt-green1" target="_blank"/>
                    </Grid.Column>
                    <Grid.Column>
                      <Image src={email} alt="email" className="hvr-skew" id="email" href="https://google.com" target="_blank"/>
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

                        // from image below: circular={true} size={"medium"}
                        <div>
                            <div className="box">
                                <div className="spin-container">
                                    <div className="shape">
                                        <div className="bgthenimage"></div>
                                        {/* <Image src={youngPicture} alt="youngpic" className="mattpic"/> */}
                                    </div>
                                </div>
                            </div>
                            <Header as="h4" className="interestsheader">Interests</Header>
                        
                            <List bulleted={true}>
                                <List.Item className="interestsbullets">
                                    Dinosaurs
                                </List.Item>
                                <List.Item className="interestsbullets">
                                    Legos / "Collecting" shiny objects from the sidewalk
                                </List.Item>
                                <List.Item className="interestsbullets">
                                    <a href="https://www.youtube.com/watch?v=cxqpcG01jcc&t=5s&ab_channel=MSGNetworks" target="_blank">The Knicks</a>
                                </List.Item>
                            </List>
                        </div>
                        
                        :
                        
                        <div>
                            <div className="box">
                                <div className="spin-container">
                                    <div className="shape">
                                        <div className="bgnowimage"></div>
                                            {/* <Image src={currentPicture} alt="currentpic"/> */}
                                        </div>
                                    </div>
                            </div>
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
                        <Button onClick={this.switchPicToYoung} className="interestsbutton">Matt Then</Button>
                        <Button onClick={this.switchPicToCurrent} className="interestsbutton">Matt Now</Button>
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
                    <Button name="triangle down" centered="something" className="scrollbutton"> ▼ ▼ ▼ Projects ▼ ▼ ▼</Button>
                </Link>
                
                <br/><br/><br/>
                

            </div>
        )
    }
}

export default About
