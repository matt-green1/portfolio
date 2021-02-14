import React from 'react'
import { Link, animateScroll } from "react-scroll"

function NavBar() {
 
  return(
     
     <div>
        "NavBar reporting for duty!" will eventually be aligned in right corner
        <ul>
          <li>
            <button onClick={() => console.log("about")}>About</button>
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

export default NavBar