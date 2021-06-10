import React from 'react'
import lifeletter from "../images/projects_images/lifeletter_static.png"
import quiz from "../images/projects_images/quiz_still.png"
import tamo from "../images/projects_images/tamo_still.png"
import { Header, Segment, Grid, Image } from 'semantic-ui-react'
import javascript from "../images/projects_images/tech_logos/javascript.png"
import rails from "../images/projects_images/tech_logos/rails.png"
import react from "../images/projects_images/tech_logos/react.png"
import zapier from "../images/projects_images/tech_logos/zapier.png"

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
                          A will for your feelings in which users can write and store letters to be sent in the event they pass away. Letters are converted to pdfs and stored securely in dropbox along with distribution instructions for user-chosen 'executors'.
                        </p>

                          <Grid divided='vertically' >
                              <Grid.Row columns={3} className="techiconrow">
                                <Grid.Column className="techicons">
                                  <Image src={react} alt="react" />
                                </Grid.Column>
                                <Grid.Column className="techicons">
                                  <Image src={rails} alt="rails"  />
                                </Grid.Column>
                                <Grid.Column className="techicons">
                                  <Image src={zapier} alt="zapier" />
                                </Grid.Column>
                            </Grid.Row>
                          </Grid>

                        
                        <div className="projectdiv">
                          <a href="https://www.youtube.com/watch?v=pYok3fufeUI&feature=youtu.be&ab_channel=MatthewGreen" target="_blank" rel="noreferrer" className="projectlink">Demo </a>
                          <span className="linkdivider">|</span> 
                          <a href="https://github.com/matt-green1/capstone_frontend" target="_blank" rel="noreferrer" className="projectlink"> Github</a>
                        </div>
                    </Grid.Column>
                    <Grid.Column className="projectcolumn">
                        <Image src={quiz} alt="quiz" id="quizimage"/>
                        <Header as="h2" className="projecttitle" >Over / Under</Header>
                            <p className="projectblurb">
                              Trivia app featuring themed games where users guess if obscure facts and figures are above or below a provided number. Users can create and customize their account, and track their scores against other users on a leaderboard.
                            </p>
                            <Grid divided='vertically' >
                              <Grid.Row columns={2} className="techiconrow">
                                <Grid.Column className="techicons">
                                  <Image src={react} alt="react" />
                                </Grid.Column>
                                <Grid.Column className="techicons">
                                  <Image src={rails} alt="rails"  />
                                </Grid.Column>
                            </Grid.Row>
                          </Grid>

                        <div className="projectdiv">
                          <a href="https://www.youtube.com/watch?v=JCH6onb_iUg&ab_channel=MatthewGreen" target="_blank" rel="noreferrer" className="projectlink">Demo </a>
                          <span className="linkdivider">|</span> 
                          <a href="https://github.com/matt-green1/overunder_frontend" target="_blank" rel="noreferrer" className="projectlink"> Github</a>
                        </div>
                    </Grid.Column>
                    <Grid.Column className="projectcolumn">
                    <Image src={tamo} centered={true} id="tamoimage"/>
                      <Header as="h2" className="projecttitle">Flatogatchi</Header>
                        <p className="projectblurb" >
                          Virtual pet app inspired by the 90's-famous Tamagotchi toys. Users can choose a monster type to adopt and name. Once adopted they can save its progress as they feed, discipline, and train it to alter its attributes and mood.
                        </p>
                          <Grid divided='vertically' >
                              <Grid.Row columns={2} className="techiconrow">
                                <Grid.Column className="techicons">
                                  <Image src={javascript} alt="javascript" />
                                </Grid.Column>
                                <Grid.Column className="techicons">
                                  <Image src={rails} alt="rails"  />
                                </Grid.Column>
                            </Grid.Row>
                          </Grid>
                        <div className="projectdiv">
                          <a href="https://www.youtube.com/watch?v=_1SBHhtt6L4&ab_channel=MatthewGreen" target="_blank" rel="noreferrer" className="projectlink">Demo </a>
                          <span className="linkdivider">|</span> 
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

