import './App.css';
import React, {Component} from "react"
import NavBar from './Components/NavBar'
import About from './Components/About'
import Home from './Components/Home'
import ProjectContainer from './Containers/ProjectContainer'
import Contact from './Components/Contact'

// https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react

function App() {
 
    return (
      <div>
        <NavBar/>
        <Home/>
        <About/>
        <Contact/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <ProjectContainer/>
      </div>
    );

}

export default App;
