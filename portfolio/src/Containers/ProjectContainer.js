import React from 'react'
import Project from '../Components/Project'
import { Link, animateScroll } from "react-scroll"

function ProjectContainer(){
    return(
        <div id= "projects">
            <h3>
                -------------------Project Container --------------
            </h3>
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
            <Project/>
            <Project/>
            <Project/>

        </div>
    )
}

export default ProjectContainer