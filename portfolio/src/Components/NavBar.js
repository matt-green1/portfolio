import React from 'react'

function NavBar(props) {
  console.log(props)
 
  return(
     
     <div>
        "NavBar reporting for duty!" will eventually be aligned in right corner
        <ul>
        <li>
          <button onClick={() => props.setActiveSection("home")}>Home</button>
        </li>
        <li>
          <button onClick={() => props.setActiveSection("about")}>About</button>
        </li>
        <li>
          <button onClick={() => props.setActiveSection("projects")}>Projects</button>
        </li>
        <li >
          <button onClick={() => props.setActiveSection("contact")}>Contact</button>
        </li>
      </ul>
    </div>

    )
}

export default NavBar