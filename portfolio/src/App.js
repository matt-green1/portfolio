import './App.css';
import React, {Component} from "react"
import NavBar from './Components/NavBar'
import About from './Components/About'
import ProjectContainer from './Containers/ProjectContainer'

// https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react

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
