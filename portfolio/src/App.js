import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"

function App() {
  const [activeSection, setActiveSection] = useState("home")
  // active sections wil,l be home, about projects, contact (which is right below projects - maybe this should just be always visible - don't make people scroll...)

  return (
    <div>
      <h1 id="name">
        Matt Green
      </h1>
      <h2>
        Full Stack Developer
      </h2>
      <ul>
      <li>
        Home? section -- should I start on home and then you click about
        </li>
        <li>
        About
        </li>
        <li>
        Projects
        </li>
        <li>
        Contact
        </li>
      </ul>
      
      <p>
         👀 <br/>
        🤟 👍<br/>
        👟👟
      </p>
      
      <h3>
        About
      </h3>
      <h4>
      Hi, I'm Matt!
      </h4>
      <p>
      I'm a full stack software engineer in New York City. I draw on my love for art and design and... fun, to build interesting, user friendly projects.
      </p>
      <h3>
        Projects
      </h3>
      <p>
        a jaw dropping display of... my... one good project...
      </p>
      <h3>
        Contact
      </h3>
      <p>
        You can find me on linked in (LINK) or drop me a note. Looking forward to hearing from you!
      </p>

    </div>
  );
}

export default App;
