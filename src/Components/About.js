import React from 'react'
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"
import circle from "../images/circle.png"
import blob from "../images/blob.png"
import { Grid, Image, Header, Checkbox } from 'semantic-ui-react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
class About extends React.Component {
    state = {
        blurbStatus: false,
        blobValue: 100,
        value: "magreen118@gmail.com",
        copied: false
    }

    switchBlurb = () => {   
        if(this.state.blurbStatus === false) {
            this.setState({blurbStatus: true})
        } else {
            this.setState({blurbStatus: false})
        }
    }

    blobHelper = (e) => {
        this.setState({blobValue: e.target.value})
    }

    emailCopyHelper = () => {
        this.setState({copied: true})
        setTimeout(() => {
            this.setState({copied: false});
            }, 800);
          };
    
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
                            <CopyToClipboard text={this.state.value} onCopy={() => this.emailCopyHelper()}>
                                <Header as="h1" id="emailsymbol" className="hvr-skew">
                                    @
                                </Header>
                            </CopyToClipboard>
                        </Grid.Column>
                        {this.state.copied ? <span id="emailcopytext">Email Copied!</span> : null}
                    </Grid.Row>
                    </Grid>
    
                {/* PREVIOUSLY:  <div id="aboutsection" style={ {'--spin': `${this.state.blobValue}` + 's'} }> */}
                <div id="aboutsection" style={ {'--spin': `${this.state.blobValue}s`} }>
                    <Grid divided='vertically' stackable={true} id="aboutgrid">
                        <Grid.Row columns={2} centered={true} >
                            <Grid.Column width={7} id="blurbcolumn">
                            <Header as="h1" id="greeting">
                                
                                <span id="wave">
                                    {
                                    !this.state.blurbStatus
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
                                    !this.state.blurbStatus
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
                            

                            {
                                !this.state.blurbStatus
                                
                                ?
                                    <Header as="h4" id="blurb">
                                        I'm a full-stack developer based in nyc. I'm passionate about using new technologies to build delightful, intuitive web apps. I'm a jack of all trades, ready to use my swiss-army-knife-like skillset to tackle tough problems and implement user focused, visually pleasant solutions.
                                        <br/><br/><br/>
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
                                                <div className="bgnowimage" ></div>
                                            </div>
                                        </div>
                                </div>
                                
                                <div id="sliderspanholder">
                                    <span id="sliderholder">
                                        <Image src={circle} alt="circle" className="blobmeter" />
                                        <input type="range" min="3" max="103" id="blobslider" step="10" value={this.state.blobValue} onChange={(e) => {this.blobHelper(e)}}></input>
                                        <Image src={blob} alt="blob" className="blobmeter" />
                                    </span>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            
            </div>
        )
    }
}

export default About
