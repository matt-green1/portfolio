import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"
import NavBar from './Components/NavBar'
import About from './Components/About'
import Home from './Components/Home'
import ProjectContainer from './Containers/ProjectContainer'
import Contact from './Components/Contact'

/// Next steps: figure out fonts, get basic swapping functionality set up for sections

function App() {
  const [activeSection, setActiveSection] = useState("home")
  // active sections will be home, about, projects, contact (which is right below projects - maybe this should just be always visible - don't make people scroll...)

  return (
    <div>
      
      <NavBar/>
      <Home/>
      <About/>
      <ProjectContainer/>
      <Contact/>

    </div>
  );
}

export default App;
