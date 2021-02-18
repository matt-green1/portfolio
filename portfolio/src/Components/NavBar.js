import React from 'react'
import { Link, animateScroll } from "react-scroll"
import { List, Button } from 'semantic-ui-react'


class NavBar extends React.Component {
  
  state = { 
    activeNav: "about" 
  }
 
  
  handleNav = () => {
    
  }

  render() {   
    let activeTest = this.handleNav()
    console.log(`Console Logged: ${this.props.handleNavSection}`)
    return(
      
      <div>
          <List link>
            <List.Item active={activeTest}>
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
            <List.Item as='a'>
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