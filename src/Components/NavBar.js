import React from 'react'
import { Link } from "react-scroll"
import { List, Button } from 'semantic-ui-react'

//come back to the active section logic - I'm not sure it's capturing a scroll and not a click
class NavBar extends React.Component {
  // state= {
  //   currentNavSection: "projects"
  // }

//   aboutActivator = () => {
//      let aboutStatus = this.props.currentSection === "about" ? true : null  
//      return aboutStatus
//   }

//   projectsActivator = () => {
//     let projectsStatus = this.props.currentSection === "projects" ? true : null  
//     return projectsStatus
//  }

//   onItemChange = (e) => {
//     this.props.handleNavSection(e.target.name)
//   }

  render() {   
    return(
      <div id="nav">
          <List link >
            <List.Item link="about" className="navButton"  >
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={490}
                name="about"
                // onClick={(e) => {this.onItemChange(e)}}
                id="aboutnav"
               >
                  About
              </Link>
            </List.Item>

            <List.Item className="navButton" >
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={490}
                name="projects"
                // onClick={(e) => {this.onItemChange(e)}}
                id="projectsnav"
                // delay={100}
               >
                  Projects
              </Link>
            </List.Item>
          </List>
      </div>
      )
    }
  }

export default NavBar

/*
List before trying to simplify it - still has active semantic property
<List link >
            <List.Item link="about" active={this.props.currentSection === "about"} className="navButton"  >
              <Link
                activeClass="active"
                to="about"
                spy={false}
                smooth={true}
                offset={0}
                duration={790}
                name="about"
                onClick={(e) => {this.onItemChange(e)}}
                id="aboutnav"
               >
                  About
              </Link>
            </List.Item>

            <List.Item active={this.props.currentSection === "projects"} className="navButton" >
              <Link
                activeClass="active"
                to="projects"
                spy={false}
                smooth={true}
                offset={0}
                duration={790}
                name="projects"
                onClick={(e) => {this.onItemChange(e)}}
                id="projectsnav"
                // delay={100}
               >
                  Projects
              </Link>
            </List.Item>
          </List>


*/