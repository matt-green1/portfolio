import React from 'react'
import { Link, animateScroll } from "react-scroll"
import { List, Button } from 'semantic-ui-react'

//come back to teh active section logic - I'm not sure it's capturing a scroll and not a click
class NavBar extends React.Component {
  
  aboutActivator = () => {
     let aboutStatus = this.props.currentSection === "about" ? true : null  
     return aboutStatus
  }

  projectsActivator = () => {
    let projectsStatus = this.props.currentSection === "projects" ? true : null  
    return projectsStatus
 }

  render() {   
    console.log(`Console Logged: ${this.props.currentSection}`)
    
    return(
      
      <div>
          <List link>
            <List.Item active={this.aboutActivator()} onClick={this.props.handleNavSection}>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={70}
                duration={790}
               >
                  About
              </Link>
            </List.Item>
            <List.Item active={this.projectsActivator()} onClick={this.props.handleNavSection}>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={790}
                // delay={100}
               >
                  Projects
              </Link>
            </List.Item>
          </List>
          
          <ul>
            <li>
              <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={70}
                  duration={790}
                  >
                    <button>About</button>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={790}
                // delay={100}
                >
                  <button>Projects</button>
              </Link>
            </li>
          </ul>
      </div>
      )
    }
  }

export default NavBar