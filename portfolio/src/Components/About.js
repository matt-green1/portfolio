import React from 'react'
import { Link, animateScroll } from "react-scroll"

function About() {
    return (
        <div id="about">
            <h3>---------------HOME -----------------------</h3>
            
            <h1 id="name">
                Matt Green
            </h1>
            
            <div id="infobar">
                <h4>
                    Ny, Ny
                </h4>
                <a href="www.linkedin.com/in/matthewgreen123" target="_blank">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8whMEUe73f6vTl8PdBjcYuhcIogcBsoc77/f5Zmsxso88gfr5zqNOnx+Lh7faUvd3C2uy71Onu9fquzOSMt9q60ObP4fB9r9Y2isTs9PmcwN5NlcnH3OyhxeHX5/Jdns6NudsAdrtCkMcAcbl3gN63AAAD1klEQVR4nO2cfXOiMBCHJQopGF/BChQr1fv+n/Go9sVDdtvehWSy93tmOtM/ZNzHzcsmBCYTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEFeH4rn5WaV+w5kJI67xihjjFJxufEdzAgcW2V09IZWVeE7IMuku0+9q6NpZ76Dskk+N1EfHe99h2WR5l6wU0yOvuOyxkAGry1VyqC6HBbsFB9S37FZYVYRglGkHn0HZ4UdlcIuiZmEJOaaFOySuPUdngUe6RR2SZz7Ds8CJZfDKBYwnJ5Zw0jAnKhYQS2gBucNTfjzRSrecHLiDQVMFwnfDwUsMFp2LE1WvuP7d9bsjN/4Ds8Cey6HZu07PBs0jKKERjqZbOlmakrfwVkhfaCTKGQ3akpNGErMluJhuK4R0kYvFHqgoUoS7Eabqq+otYiJ4pPZ/HTrqFUloFzrsV8Yo7vW2v0ZlYkZY25J86Jss3PTLp6mErbYhknzOpdrBwAAAPgh/cB3JGNw3D51NVLbxlUVZ+3ueSNiR+Sdejs35lLnXtdlr8WuMVF58HIrqy4XNL1tjPplPczL7T2qY1mZwZ0RrePd1KnchVl1/a0H6cUzPZlhbm4WTxfDem/r6qR0vvkzi+l4kr4hdR/n4/7G3emq+0SqteNxx6rhPuG20N8/7Pi4lU3D5dCGzz06cbrCtmjIHFzpf/45SMPFtwWjSD0FaFj+QLC7Yhmc4fOPBLvOeAjLcMPepRs0rFxNGlYMdfHFuZwBnG2qWzGM6AOONMrRtGjH8G/QrZt26s8wMm4GG4+GupVuGGknBwN9GhonlY3XHJ6lG0bKxXLYq6GT6nQkQ/2tpaJ2UddYN9RGJ0mcZc3rf199tnGw+2bZ0Jj59vhWq0yL5qsLTB2YodbrP5Oyjfk0uqhNbRrq890UvsrYdaNxsGNj0VBnA72q5g4/Ojnfac+QeEyqZs/oOhhM7RkmxKixZJKoHwIyJLtUyqz/QzLUMfkVBfMAYECGzKhY018RkmHMzN0LspkGZKgXzHeQjxqHZMiuEujrQjLkbu7m5LNHARlWXAmdknVNOIaDBdsHaSbAcM7t7oowZN+/IMIQOQzfEDkM31B+DmEYviH6YfiGyGH4hsghDEcEhregH1KIMEQOwzdEDmE4ImiltyCHFCIMkcPwDeXnEIbhG6Ifhm+IHIZviBzCcERgeAv6IYUIQ+QwfEPkEIYj8h8YVsS7n17pG/5SBCf27QFpQ12nslHlLuTFkqZ38DddkbAP9Kb7DYW89xUDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+xm9wWFbk8D1jiwAAAABJRU5ErkJggg==" alt="linkedin" className="icons"/>
                </a>
                <h3>LinkedIn</h3>
                
                <a href="https://github.com/matt-green1" target="_blank">
                    <img src="https://cdn.iconscout.com/icon/free/png-256/github-brand-logo-47401.png" alt="github" className="icons"/>
                </a>
                <h3>
                    Github
                </h3>

                <a href="google.com" target="_blank">
                    <img src="https://cdn.iconscout.com/icon/free/png-256/resume-1956282-1650445.png" alt="resume" className="icons"/>
                </a>
                <h3>
                    Resume
                </h3>
            </div>

            <h1>
            🤟 Hey, I'm Matt!
            </h1>

            <h4>
                I'm a full stack software engineer in New York City. I draw on my love for art and design and... fun, to build interesting, user friendly projects.
            </h4>
            
            <p>
           
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;👨 <br/>
            &nbsp;&nbsp;&nbsp;🤟 👕 👍<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;👖 <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;👟👟
            </p>

            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={70}
              duration={790}
              >
                <button>Scroll down</button>
            </Link>

        </div>
    )
}

export default About