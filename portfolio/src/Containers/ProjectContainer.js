import React from 'react'
//import Project from '../Components/Project'
import { Link } from "react-scroll"
import lifeletter from "../images/lifeletter.png"
import quiz from "../images/quiz.png"
import tamo from "../images/tamogatchi.png"
import { Header, Button, Segment, Grid, Image, List } from 'semantic-ui-react'

function ProjectContainer(){
    return(
        <div id= "projects">
            <Header as="h2" textAlign="center">  = = = = = = = = = = = = = =  Projects = = = = = = = = = = = = =</Header>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={70}
              duration={790}
              >
                <Button name="triangle up" color="teal" centered="something"> ▲ ▲ ▲ About ▲ ▲ ▲</Button>
            </Link>
            
            <Segment>
                <Grid divided='vertically'>
                  <Grid.Row columns={3}>
                    <Grid.Column>
                      <Image src={lifeletter} alt="lifeletter" />
                      <Header as="h2" >LifeLetter</Header>
                        <p>
                            Letter writing app that allows users to write and store notes to be sent in the event they pass away.
                            A will for your feelings. Utilized webhooks via Zapier and FromStack to automate PDF creation and email notification.
                            Designed app to store finished letters in Dropbox for added security and version control. Created and implemented style guide with CSS and Semantic UI.
                        </p>
                      <List>
                        <List.Item href="https://www.youtube.com/watch?v=pYok3fufeUI&feature=youtu.be&ab_channel=MatthewGreen">Video Demo</List.Item>
                        <List.Item href="https://github.com/matt-green1/capstone_frontend">Github Frontend</List.Item>
                        <List.Item href="https://github.com/matt-green1/capstone_backend">Github Backend</List.Item>
                      </List>
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={quiz} alt="quiz"/>
                        <Header as="h2" >Over / Under</Header>
                            <p>
                                Trivia app in which users can select themed games, track high scores over time, and customize their profile.
                                Developed Rails API backend with endpoints for users, games, rounds, and questions.
                                Used JSON Web Tokens and localStorage to store encrypted user information client-side.
                                Utilized Semantic UI React and React Sky for styling.
                            </p>
                        <List>
                            <List.Item href="https://over-under-app.herokuapp.com/">Live Site (Eventually video)</List.Item>
                            <List.Item href="https://github.com/elandau91/mod4-game-frontend">Github Frontend</List.Item>
                            <List.Item href="https://github.com/elandau91/mod4-game-backend">Github Backend</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column>
                    <Image src={tamo} centered={true} />
                      <Header as="h2" >Flatogatchi</Header>
                        <p>
                        Virtual Pet app modeled after the 90's-famous Tomogatchis. Users can create and account, 'adopt' and name a monster, and save their new pet's progress.
                        The frontend was built with Vanilla Javascript and the backend was ruby on Rails.
                        </p>
                      <List>
                        <List.Item href="https://www.youtube.com/watch?v=phURZL6HX50&feature=emb_logo&ab_channel=LuisReyes">Luis' Demo (eventually replace)</List.Item>
                        <List.Item href="https://github.com/brandongubitosa/FlatoGochi_FrontEnd">Github Frontend</List.Item>
                        <List.Item href="https://github.com/brandongubitosa/FlatoGachi">Github Backend</List.Item>
                      </List>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                {/* <div id="landingspacingdiv"></div> */}
            </Segment>
        </div>
    )
}

export default ProjectContainer


//Backup of non semantic react
// /* <div>
// <h3>
//     Lifeletter                
// </h3>
// <img src={lifeletter} alt="lifeletter" />
// <p>Letter writing app that allows users to write and store notes to be sent in the event they pass away.<br />
// A will for your feelings. Utilized webhooks via Zapier and FromStack to automate PDF creation and email notification.<br />
// Designed app to store finished letters in Dropbox for added security and version control. Created and implemented style guide with CSS and Semantic UI.

// </p>
// <ul>
//     <li>
//         <a href="https://www.youtube.com/watch?v=pYok3fufeUI&feature=youtu.be&ab_channel=MatthewGreen">Demo</a>
//     </li>
//     <li>
//         <a href="https://github.com/matt-green1/capstone_frontend"> Github Frontend</a>
//     </li>
//     <li>
//         <a href="https://github.com/matt-green1/capstone_backend"> Github Backend</a>
//     </li>
// </ul>
// <br/>
// </div>

// <div>
// <h3>
//     Over/Under
    
// </h3>
// <img src={quiz} alt="quiz" />
// <p>Trivia app in which users can select themed games, track high scores over time, and customize their profile.<br/>
// Developed Rails API backend with endpoints for users, games, rounds, and questions.<br/>
// Used JSON Web Tokens and localStorage to store encrypted user information client-side.
// Utilized Semantic UI React and React Sky for styling.

// </p>
// <ul>
//     <li>
//         <a href="https://over-under-app.herokuapp.com/">Live site (Eventually replace)</a>
//     </li>
//     <li>
//         <a href="https://github.com/elandau91/mod4-game-frontend">Github Frontend</a>
//     </li>
//     <li>
//         <a href="https://github.com/elandau91/mod4-game-backend">Github Backend</a>
//     </li>
// </ul>
// <br/>
// </div>

// <div>
// <h3>
//     Flatogatchi                
// </h3>
// <img src={tamo} alt="tamogatchi" />
// <p>Virtual Pet app modeled after the 90's-famous Tomogatchis. Users can create and account, 'adopt' and name a monster, and save their new pet's progress.<br/>
// The frontend was built with Vanilla Javascript and the backend was ruby on Rails.
// </p>
// <ul>
//     <li>
//         <a href="https://www.youtube.com/watch?v=phURZL6HX50&feature=emb_logo&ab_channel=LuisReyes">Luis' Demo (Eventually replace)</a>
//     </li>
//     <li>
//         <a href="https://github.com/brandongubitosa/FlatoGochi_FrontEnd">Github Frontend</a>
//     </li>
//     <li>
//         <a href="https://github.com/brandongubitosa/FlatoGachi">Github Backend</a>
//     </li>
// </ul>
// <br/>
// </div>