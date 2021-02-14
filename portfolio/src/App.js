import './App.css';
import React, {Component} from "react"
import NavBar from './Components/NavBar'
import About from './Components/About'
import ProjectContainer from './Containers/ProjectContainer'

function App() {
 
    return (
      <div>
        <NavBar/>
        <About/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <ProjectContainer/>
      </div>
    );

}

export default App;
