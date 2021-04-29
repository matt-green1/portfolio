import React from 'react'
import { Link } from "react-scroll"
import lifeletter from "../images/lifeletter_static.png"
import quiz from "../images/quiz_still.png"
import tamo from "../images/tamo_still.png"
import { Header, Button, Segment, Grid, Image, List } from 'semantic-ui-react'
import javascript from "../images/tech_logos/javascript.png"
import postgres from "../images/tech_logos/postgres.png"
import rails from "../images/tech_logos/rails.png"
import react from "../images/tech_logos/react.png"
import zapier from "../images/tech_logos/zapier.png"

function ProjectContainer(){
    return(
        <div id="projects">
            
            <Segment id="projectcontainer">
                <Grid divided='vertically' id="projectgrid" stackable={true} >
                  <Grid.Row columns={3} id="projectrow">
                    <Grid.Column className="projectcolumn" >
                      <Image src={lifeletter} alt="lifeletter" id="lifeletterimage" />
                      <Header as="h2" className="projecttitle" >LifeLetter</Header>
                        <p className="projectblurb">
                          A will for your feelings. Letter writing app that allows users to write and store notes to be sent to loved ones in the event they pass away. Once finalized, letters are converted to pdfs and stored securely in a dropbox folder whose password is emailed to user-chosen 'executors' along with distribution instructions.                            
{/* 
                        put this in for all tech sections */}
                            {/* <Grid divided='vertically' >
                    <Grid.Row columns={3} id="linkiconrow">
                        <Grid.Column className="linkicons">
                        <Image src={linkedin} alt="linkedin" className="hvr-skew" id="linkedin" href="https://linkedin.com/in/matthewgreen123" target="_blank" />
                        </Grid.Column>
                        <Grid.Column className="linkicons">
                        <Image src={github} alt="github" className="hvr-skew" id="github" href="https://github.com/matt-green1" target="_blank"/>
                        </Grid.Column>
                        <Grid.Column className="linkicons">
                        <Header as="h1" id="emailsymbol" className="hvr-skew">
                            @
                        </Header>
                        </Grid.Column>
                    </Grid.Row>
                    </Grid> */}

                          <span className="techused">
                            <img src={react}/>
                            React.js | Javascript | Zapier | Semantic UI & CSS | Ruby on Rails | PostgreSQL
                          </span>
                        </p>
                        <div className="projectdiv">
                          <a href="https://www.youtube.com/watch?v=pYok3fufeUI&feature=youtu.be&ab_channel=MatthewGreen" target="_blank" rel="noreferrer" className="projectlink">Demo </a>
                          | 
                          <a href="https://github.com/matt-green1/capstone_frontend" target="_blank" rel="noreferrer" className="projectlink"> Github</a>
                        </div>
                    </Grid.Column>
                    <Grid.Column className="projectcolumn">
                        <Image src={quiz} alt="quiz" id="quizimage"/>
                        <Header as="h2" className="projecttitle" >Over / Under</Header>
                            <p className="projectblurb">
                              Trivia app featuring themed games that involve guessing if an answer is above or below a provided number. Users can create an account, customize their profile, and track their average score against other users on a leaderboard. 
                                <br/>
                                <span className="techused">
                                  React.js | Javascript | Semantic UI | Ruby on Rails | PostgreSQL
                                </span>
                            </p>
                        <div className="projectdiv">
                          <a href="https://www.youtube.com/watch?v=JCH6onb_iUg&ab_channel=MatthewGreen" target="_blank" rel="noreferrer" className="projectlink">Demo </a>
                          | 
                          <a href="https://github.com/matt-green1/overunder_frontend" target="_blank" rel="noreferrer" className="projectlink"> Github</a>
                        </div>
                    </Grid.Column>
                    <Grid.Column className="projectcolumn">
                    <Image src={tamo} centered={true} id="tamoimage"/>
                      <Header as="h2" className="projecttitle">Flatogatchi</Header>
                        <p className="projectblurb" >
                          Virtual pet app inspired by the 90's Tamagotchi toys. Users can create an account, adopt a monster, and save its progress. Users can feed, discipline, and train their monster to alter its attributes and mood.
                          <br/>
                          <span className="techused">
                            Javascript | HTML | Bootstrap | Ruby on Rails | PostgreSQL
                          </span>
                        </p>
                        <div className="projectdiv">
                          <a href="https://www.youtube.com/watch?v=_1SBHhtt6L4&ab_channel=MatthewGreen" target="_blank" rel="noreferrer" className="projectlink">Demo </a>
                          | 
                          <a href="https://github.com/brandongubitosa/FlatoGochi_FrontEnd" target="_blank" rel="noreferrer" className="projectlink"> Github</a>
                        </div>
                
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                
            </Segment>
        </div>
    )
}

export default ProjectContainer

