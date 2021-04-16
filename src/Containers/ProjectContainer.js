import React from 'react'
import { Link } from "react-scroll"
import lifeletter from "../images/lifeletter_static.png"
import quiz from "../images/quiz_still.png"
import tamo from "../images/tamo_still.png"
import { Header, Button, Segment, Grid, Image, List } from 'semantic-ui-react'

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
                            <br/>
                          <span className="techused">
                            React.js | Javascript | Zapier | Semantic UI & CSS | Ruby on Rails | PostgreSQL
                          </span>
                        </p>
                      <List>
                        <List.Item href="https://www.youtube.com/watch?v=pYok3fufeUI&feature=youtu.be&ab_channel=MatthewGreen" className="projectbullet">Video Demo</List.Item>
                        <List.Item href="https://github.com/matt-green1/capstone_frontend" className="projectbullet">Github Frontend</List.Item>
                        <List.Item href="https://github.com/matt-green1/capstone_backend" className="projectbullet">Github Backend</List.Item>
                      </List>
                    </Grid.Column>
                    <Grid.Column className="projectcolumn">
                        <Image src={quiz} alt="quiz" id="quizimage"/>
                        <Header as="h2" className="projecttitle" >Over / Under</Header>
                            <p className="projectblurb">
                              Trivia app featuring themed games that involve guessing if a numerical answer is above or below a provided number. Users can create an account, customize their profile, and track their average score against other users via a leaderboard. 
                                <br/>
                                <span className="techused">
                                  React.js | Javascript | Semantic UI | Ruby on Rails | PostgreSQL
                                </span>
                            </p>
                        <List>
                            <List.Item href="https://over-under-app.herokuapp.com/" className="projectbullet">Live Site (Eventually video)</List.Item>
                            <List.Item href="https://github.com/elandau91/mod4-game-frontend" className="projectbullet">Github Frontend</List.Item>
                            <List.Item href="https://github.com/elandau91/mod4-game-backend" className="projectbullet">Github Backend</List.Item>
                        </List>
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
                      <List>
                        <List.Item href="https://www.youtube.com/watch?v=phURZL6HX50&feature=emb_logo&ab_channel=LuisReyes" className="projectbullet">Luis' Demo (eventually replace)</List.Item>
                        <List.Item href="https://github.com/brandongubitosa/FlatoGochi_FrontEnd" className="projectbullet">Github Frontend</List.Item>
                        <List.Item href="https://github.com/brandongubitosa/FlatoGachi" className="projectbullet">Github Backend</List.Item>
                      </List>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                
            </Segment>
        </div>
    )
}

export default ProjectContainer

