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
                // onClick={(e) => {this.onItemChange(e)}}
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