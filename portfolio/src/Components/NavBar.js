import React from 'react'

function NavBar(props) {
  console.log(props)
 
  return(
     
     <div>
        "NavBar reporting for duty!" will eventually be aligned in right corner
        <ul>
        <li>
          <button>Home</button>
        </li>
        <li>
          <button>About</button>
        </li>
        <li>
          <button>Projects</button>
        </li>
        <li >
          <button>Contact</button>
        </li>
      </ul>
    </div>

    )
}

export default NavBar