import './App.css';
import React, {useState} from "react"
import NavBar from './Components/NavBar'
import About from './Components/About'
import Home from './Components/Home'
import ProjectContainer from './Containers/ProjectContainer'
import Contact from './Components/Contact'

/// Next steps: Get basic swapping functionality set up for sections - on the Nav Bar
//NOTE 2/3/21 -- will need to have the atate hold a "scroll" location and we move window to that location when you hgit home about etc
//currently set up to mimic a routing but we may want to just scroll

// NOTE: can't conditionally render hooks - so need ro refactor as a class based component
// check this link out: https://linguinecode.com/post/4-techniques-conditional-render-react-props-state

function App() {
  const [activeSection, setActiveSection] = useState("home")
  // active sections will be home, about, projects, contact (which is right below projects - maybe this should just be always visible - don't make people scroll...)

  console.log(activeSection)
 

  return (
    <div>
      {console.log(`inside reutnr:" ${activeSection}`)}
      <NavBar setActiveSection={setActiveSection} />
      {() => {if(activeSection === "home"){
         console.log("home is working!!!")
         return <Home/>;
      } else if (activeSection === "about") {
        console.log("about is working!!!") 
        return <About/>;
      } else if (activeSection === "projects") {
        console.log("projects is working!!!")  
        return <ProjectContainer/> ;
     } else if (activeSection === "contacts") {
      console.log("contacts is working!!!")  
        return <Contact/>;
     }
      
    
      }}
      
      {/*switch statement currently not actually returning correct section */}
      {/* { (() => {
        switch(activeSection) {
          case 'home':
            return <Home/>
            // break;
          case 'about':
            <About/>
            break;
          case 'projects':
            <ProjectContainer/>            
            break
          case 'contacts':
            <Contact/>
            break
          default:
            return <p>something is not working...</p>
        }
        })
      } */}

    </div>
  );
}

export default App;
