import React from 'react'
import { Link } from "react-scroll"
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"
import email from "../images/email.png"
import youngPicture from "../images/youngPicture.jpg"
import currentPicture from "../images/currentPicture.jpg"
import { Grid, Image, Header, Button, Checkbox } from 'semantic-ui-react'

class About extends React.Component {
    state = {
        blurbStatus: null
    }

    // switchBlurbToPig = () => {   
    //     if(this.state.blurbStatus === null) {this.setState({blurbStatus: "pig"})}
    // }
    // switchBlurbToEnglish = () => {
    //     if(this.state.blurbStatus === "pig") {this.setState({blurbStatus: null})}
    // }

    switchBlurb = () => {   
        if(this.state.blurbStatus === null) {
            this.setState({blurbStatus: "pig"})
        } else {
            this.setState({blurbStatus: null})
        }
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
                        <Grid.Column width={6} id="blurbcolumn">
                        <Header as="h1" id="greeting">
                            
                            <span id="wave">
                                {
                                this.state.blurbStatus === null
                                ?
                                <>
                                ✋
                                </>
                                :
                                <>
                                🐽
                                </>
                                }
                            </span>&nbsp;
                                {
                                this.state.blurbStatus === null
                                ?
                                <>
                                Hey, I'm Matt!  
                                </>
                                :
                                <>
                                Eyhay, I'mway Attmay! 
                                </>
                                }
                            <span id="pigspan">
                                <Checkbox 
                                            className="pigtoggle"
                                            toggle
                                            onChange={this.switchBlurb}
                                            checked={this.state.blurbStatus}
                                        >
                                                    
                                </Checkbox>
                                <span id="pigemoji">
                                    🐖
                                </span>
                            </span>
                        </Header>
                        

                        {/* PL Translator: http://www.snowcrest.net/donnelly/piglatin.html */}
                        {
                            this.state.blurbStatus === null
                            
                            ?
                                <Header as="h4" id="blurb">
                                    I'm a full-stack developer based in nyc. I'm passionate about using new technologies to build delightful, intuitive web apps. I'm a jack of all trades, ready to use my swiss-army-knife-like skillset to tackle tough problems and implement user focused, visually pleasant solutions.
                                </Header>
                            :
                                <Header as="h4" id="blurb">
                                    I'mway away ullfay-ackstay eveloperday asedbay inway ycnay. I'mway assionatepay aboutway usingway ewnay echnologiestay otay uildbay elightfulday, intuitiveway ebway appsway. I'mway away ackjay ofway allway adestray, eadyray otay useway ymay isssway-armyway-ifeknay-ikelay illsetskay otay ackletay oughtay oblemspray andway implementway userway ocusedfay, isuallyvay easantplay olutionssay.                                
                                </Header>
                            }
                        
                    

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
                            <input type="range" min="1" max="100"></input>
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
