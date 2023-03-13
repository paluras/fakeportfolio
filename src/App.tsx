import { useState } from 'react'
import './App.css'
import Card from './Card'
import Contact from './Contact'

function App() {
  const [count, setCount] = useState(0)

  function handleContact(){
    window.scrollTo(0, 20000);
  }

  return (
    <div className="App">
      <div className='non-contact'>
        <div className='ring'></div>
          <div className='main-name'>
            <div className='name-icons'>
              <h1>adamkeyes</h1>
              <div className='icons'>
                <img src='src\assets\icon-github.svg' alt='github-icon'></img>
                <img src='src\assets\icon-frontend-mentor.svg' alt='fm-icon'></img>
                <img src='src\assets\icon-github.svg' alt='github-icon'></img>
                <img src='src\assets\icon-twitter.svg' alt="twiter-icon"></img>
              </div>
            </div>
              <img className='profile-pic' src='src\assets\image-profile-mobile.webp' alt='profile-img'></img>
          
          <div className='text-contact'>
              <h1>Nice to meet you!
                I'm <a>Adam Keyes</a>.
              </h1>
              <p className='description'>Based in the UK, i`m a front-end developer passopnate about building accesible web app that users love</p>
              <h2 onClick={handleContact}>CONTACT ME</h2>
          </div>   
          </div>
          <div className='skills'>
                  <div className='html'>
                    HTML
                    <p>4 Years Experience</p>
                  </div>
                  <div className='html'>
                    CSS
                    <p>4 Years Experience</p>
                  </div>
                  <div className='html'>
                    Javascript
                    <p>4 Years Experience</p>
                  </div>
                  <div className='html'>
                    Accessibility
                    <p>4 Years Experience</p>
                  </div>
                  <div className='html'>
                    React
                    <p>4 Years Experience</p>
                  </div>
                  <div className='html'>
                    Sass
                    <p>4 Years Experience</p>
            </div>
          </div>
            <div className='main-body'>
          <div className='project-expose'>Projects
          <h2 onClick={handleContact}>CONTACT ME</h2>
          </div>
          <div className='projectsMultiple'>
            <Card/>
            <Card/>
            
            </div>
        </div> 
  </div>      
        <Contact />

        
    </div>
  )
}

export default App
