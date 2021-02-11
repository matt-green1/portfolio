import './App.css';
import React, {Component} from "react"
import NavBar from './Components/NavBar'
import About from './Components/About'
import Home from './Components/Home'
import ProjectContainer from './Containers/ProjectContainer'
import Contact from './Components/Contact'
import { Link, animateScroll } from "react-scroll"

// https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react

class App extends Component {
 
  

  render() {
    return (
      <div>
        <NavBar/>
        <Home/>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
  >       </Link>
        <About/>
        <ProjectContainer/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Contact/>
      </div>
    );
  }
}

export default App;
