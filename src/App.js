import './App.css';
import React from "react"
import NavBar from './Components/NavBar'
import About from './Components/About'
import ProjectContainer from './Containers/ProjectContainer'

class App extends React.Component {
  
  render() {
      return (
        <div >
          <div className="page-header"></div>
          <NavBar />
          <About />
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <ProjectContainer />
        </div>
      );
    }
}

export default App;

/*

app before you removed state and handle navsection

class App extends React.Component {
  state = {
    currentSection: "about"
  }  
    
  handleNavSection = (name) => {
    console.log("handle nav was called!!!!!!!!!!!!!")
    if(name === "about"){
      this.setState({currentSection:"about"})
    } else if (name === "projects") {
      this.setState({currentSection: "projects"})
    }
  }

  manualScrollStateKeeper = () => {
    console.log("eventually this will be somrhting that monitors where we are in the doc and changes state to match which section we're in")
  }

  render() {
      return (
        <div >
          <div className="page-header"></div>
          <NavBar handleNavSection={this.handleNavSection} currentSection={this.state.currentSection}/>
          <About handleNavSection={this.handleNavSection}/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <ProjectContainer handleNavSection={this.handleNavSection}/>
        </div>
      );
    }
}

export default App;


*/