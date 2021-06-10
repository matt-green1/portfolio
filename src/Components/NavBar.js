import React from 'react'
import { Link } from "react-scroll"
import { List } from 'semantic-ui-react'
class NavBar extends React.Component {

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
                duration={480}
                name="about"
                id="aboutnav"
               >
                  About
              </Link>
            </List.Item>

            <List.Item link="projects" className="navButton" >
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={175}
                duration={480}
                name="projects"
                id="projectsnav"
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