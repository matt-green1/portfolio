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
                
                
                    <Grid divided='vertically' >
                    <Grid.Row columns={3} id="linkiconrow">
                        <Grid.Column className="linkicons">
                        <Image src={linkedin} alt="linkedin" className="hvr-skew" id="linkedin" href="https://linkedin.com/in/matthewgreen123" target="_blank" />
                        </Grid.Column>
                        <Grid.Column className="linkicons">
                        <Image src={github} alt="github" className="hvr-skew" id="github" href="https://github.com/matt-green1" target="_blank"/>
                        </Grid.Column>
                        <Grid.Column className="linkicons">
                        <Header as="h1" id="emailsymbol" className="hvr-skew">@</Header>
                        {/* <Image src={email} alt="email" className="hvr-skew" id="email" href="https://google.com" target="_blank"/> */}
                        </Grid.Column>
                    </Grid.Row>
                    </Grid>
                
    
                <br/>
                <div id="aboutsection">
                    <Grid divided='vertically' stackable={true} id="aboutgrid">
                    <Grid.Row columns={2} centered={true} >
                        <Grid.Column width={6.} id="blurbcolumn">
                        <Header as="h1" id="greeting">
                            <span id="wave">
                            ✋
                            </span>&nbsp;
                            Hey, I'm Matt!              
                        </Header>
                        
                        
                        <Header as="h4" id="blurb">
                                I'm a full-stack developer based in nyc. I'm passionate about using new technologies to build delightful, intuitive web apps. I'm a jack of all trades, ready to use my swiss-army-knife-like skillset to tackle tough problems and implement user focused, visually pleasant solutions.
                        </Header>


                        </Grid.Column>
                        <Grid.Column width={5} id="interestscolumn">
                            <div className="box">
                                    <div className="spin-container">
                                        <div className="shape">
                                            <div className="bgnowimage"></div>
                                                {/* <Image src={currentPicture} alt="currentpic"/> */}
                                        </div>
                                    </div>
                            </div>

                        
                            <br/>
                            
                        </Grid.Column>
                    </Grid.Row>
                    </Grid>
                </div>
            
                <br/><br/><br/><br/>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={70}
                    duration={790}
                >
                    <Button name="triangle down" className="scrollbutton"> ↓ &nbsp;&nbsp;&nbsp;P&nbsp; r&nbsp; o&nbsp; j&nbsp; e&nbsp; c&nbsp; t&nbsp; s&nbsp;&nbsp;&nbsp; ↓</Button>
                </Link>

                <br/><br/><br/>
                

            </div>
        )
    }
}

export default About
