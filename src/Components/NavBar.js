import React from 'react'
import { Link } from "react-scroll"
import { List, Button } from 'semantic-ui-react'

//come back to the active section logic - I'm not sure it's capturing a scroll and not a click
class NavBar extends React.Component {
  state= {
    currentNavSection: "projects"
  }

  aboutActivator = () => {
     let aboutStatus = this.props.currentSection === "about" ? true : null  
     return aboutStatus
  }

  projectsActivator = () => {
    let projectsStatus = this.props.currentSection === "projects" ? true : null  
    return projectsStatus
 }

  onItemChange = (e) => {
    console.log(e.target.name)
    // debugger
    this.props.handleNavSection(e.target.name)
  }

  render() {   
    return(
      <div id="nav">
          <List link >
            <List.Item link="about" active={this.props.currentSection === "about"} className="navButton"  >
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={790}
                name="about"
                onClick={(e) => {this.onItemChange(e)}}
               >
                  About
              </Link>
            </List.Item>

            <List.Item active={this.props.currentSection === "projects"} className="navButton" >
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={790}
                name="projects"
                onClick={(e) => {this.onItemChange(e)}}
                // delay={100}
               >
                  Projects
              </Link>
            </List.Item>
          </List>
          {/* <Button name="about" onClick={() => {this.onItemChange()}}>Sample button</Button> */}
      </div>
      )
    }
  }

export default NavBar