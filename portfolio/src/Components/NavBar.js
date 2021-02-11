import React from 'react'

function NavBar() {
 
  return(
     
     <div>
        "NavBar reporting for duty!" will eventually be aligned in right corner
        <ul>
        <li>
          <button onClick={() => console.log("home")}>Home</button>
        </li>
        <li>
          <button onClick={() => console.log("about")}>About</button>
        </li>
        <li>
          <button onClick={() => console.log("projects")}>Projects</button>
        </li>
        <li >
          <button onClick={() => console.log("contact")}>Contact</button>
        </li>
      </ul>
    </div>

    )
}

export default NavBar