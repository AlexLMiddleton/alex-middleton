import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import About from '../components/About/About'
import Technology from '../components/Technology/Technology'
import Contact from '../components/Contact/Contact'
import Projects from '../components/Projects/Projects'

import './HomepageNavbar.css'
import './HomepageHero.css'


function useOnScreen(options) {
  const homeRef = React.useRef()
  const aboutRef = React.useRef()
  const technologyRef = React.useRef()
  const projectsRef = React.useRef()
  const contactRef = React.useRef()
  const heroRef = React.useRef()

  const [visible, setVisible] = React.useState(false)
  const [menuOpened, setMenuOpened] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting)
    }, options)

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    } 

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current)
      } 
    }
  }, [homeRef, aboutRef, technologyRef, options])

  return [homeRef, heroRef, aboutRef, technologyRef, projectsRef, contactRef, visible, menuOpened, setMenuOpened]
}

function Homepage() {
  const [homeRef, heroRef, aboutRef, technologyRef, projectsRef, contactRef, visible, menuOpened, setMenuOpened] = useOnScreen({ threshold: .1 })

  return (
    <div className="App">
      <header className={visible ? 'nav' : 'hidden'}>
        <div className="menu-icon" onClick={() => setMenuOpened(!menuOpened)}>MENU</div>
          {menuOpened && window.matchMedia('(max-width: 767px)').matches ?
              <>
                <ul>
                  <li id="home">
                      <Link to='/' onClick={() => { homeRef.current.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'}); setMenuOpened(false)}}>
                          HOME
                      </Link>
                  </li>
                  <li id="about">
                      <Link to='/' onClick={() => { aboutRef.current.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'}); setMenuOpened(false)}}>
                          ABOUT
                      </Link>
                  </li>
                  <li id="programming">
                      <Link to='/' onClick={() => { technologyRef.current.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'}); setMenuOpened(false)}}>
                          PROGRAMMING
                      </Link>
                  </li>
                  <li id="projects">
                      <Link to='/' onClick={() => { projectsRef.current.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'}); setMenuOpened(false)}}>
                          PROJECTS
                      </Link>
                  </li>
                  <li id="contact">
                      <Link to='/' onClick={() => { contactRef.current.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'}); setMenuOpened(false)}}>
                          CONTACT
                      </Link>
                  </li>
                </ul>
              </>
              : !menuOpened && window.matchMedia('(max-width: 767px)').matches ? ''
              :
              <>
                <ul>
                  <li id="home">
                      <Link to='/' onClick={() => { homeRef.current.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'}); setMenuOpened(false)}}>
                          HOME
                      </Link>
                  </li>
                  <li id="about">
                      <Link to='/' onClick={() => { aboutRef.current.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'}); setMenuOpened(false)}}>
                          ABOUT
                      </Link>
                  </li>
                  <li id="programming">
                      <Link to='/' onClick={() => { technologyRef.current.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'}); setMenuOpened(false)}}>
                          PROGRAMMING
                      </Link>
                  </li>
                  <li id="projects">
                      <Link to='/' onClick={() => { projectsRef.current.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'}); setMenuOpened(false)}}>
                          PROJECTS
                      </Link>
                  </li>
                  <li id="contact">
                      <Link to='/' onClick={() => { contactRef.current.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'}); setMenuOpened(false)}}>
                          CONTACT
                      </Link>
                  </li>
                </ul>
              </>
          }
        </header>
      <div ref={homeRef} style={{ height: '100vh' }}>
        <div id="home" className='hero-main' style={{ height: '100vh' }}>
            <div ref={heroRef} className={visible ? 'hero-sub1' : 'hero-sub'}>
                <h1>Hey, I'm Alex!</h1>
            </div>
            {visible ? 
              <div className="picture-container">
                <Link to='' onClick={() => aboutRef.current.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'})}>
                    <img alt='Alex Middleton, Charleston web developer' src={require('./alex-middleton_charleston-web-developer.png')} />
                </Link>
              </div> :
              <div className="circle-container">
                <Link to='' onClick={() => aboutRef.current.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'})}>
                    <FontAwesomeIcon icon={faArrowDown} style={{ color: 'navy' }} size="6x" />
                </Link>
              </div>
            }
        </div>
        ) 
      </div>
      <div className="homepage-flex" style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white' }}>
        <div id="about" ref={aboutRef}>
            <About />
        </div>
        <div id="programming" ref={technologyRef}>
            <Technology />
        </div>
        <div id="projects" ref={projectsRef}>
            <Projects />
        </div>
        <div id="contact" ref={contactRef}>
            <Contact />
        </div>
      </div>
    </div>
  );
}

export default Homepage;