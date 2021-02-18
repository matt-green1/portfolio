import './App.css';
import React, {Component} from "react"
import NavBar from './Components/NavBar'
import About from './Components/About'
import ProjectContainer from './Containers/ProjectContainer'

class App extends React.Component {
  state = {
    currentSection: "about"
  }  
  
  handleNavSection = () => {
    if(this.state.currentSection === "about"){
      this.setState({currentSection:"projects"})
    } else {
      this.setState({currentSection:"about"})
    }

  }

  render() {
      return (
        <div>
          <NavBar handleNavSection={this.handleNavSection} currentSection={this.state.currentSection}/>
          <About handleNavSection={this.handleNavSection}/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <ProjectContainer handleNavSection={this.handleNavSection}/>
        </div>
      );
    }
}

export default App;
