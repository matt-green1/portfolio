import React from 'react'
//import Project from '../Components/Project'
import { Link, animateScroll } from "react-scroll"
import lifeletter from "../images/lifeletter.png"
import quiz from "../images/quiz.png"
import tamo from "../images/tamogatchi.png"

function ProjectContainer(){
    return(
        <div id= "projects">
            <h3>
                -------------------Projects--------------------
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
            
            <div>
            <h4>
                Lifeletter                
            </h4>
            <img src={lifeletter} alt="lifeletter" />
            <p>This is an image of the muppet chef, who I just love. That's why I centered a whole project around him</p>
            <ul>
                <li>
                    Demo or Deployed Site
                </li>
                <li>
                    Front end Link
                </li>
                <li>
                    Back end Link
                </li>
            </ul>
            <br/>
        </div>

        <div>
            <h4>
                Over/Under
                
            </h4>
            <img src={quiz} alt="quiz" />
            <p>This is an image of the muppet chef, who I just love. That's why I centered a whole project around him</p>
            <ul>
                <li>
                    Demo or Deployed Site
                </li>
                <li>
                    Front end Link
                </li>
                <li>
                    Back end Link
                </li>
            </ul>
            <br/>
        </div>

        <div>
            <h4>
                Flatogatchi                
            </h4>
            <img src={tamo} alt="tamogatchi" />
            <p>This is an image of the muppet chef, who I just love. That's why I centered a whole project around him</p>
            <ul>
                <li>
                    Demo or Deployed Site
                </li>
                <li>
                    Front end Link
                </li>
                <li>
                    Back end Link
                </li>
            </ul>
            <br/>
        </div>
            
            {/* <Project/>
                <Project/>
                <Project/> */}

        </div>
    )
}

export default ProjectContainer