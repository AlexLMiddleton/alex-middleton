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

// Hero Imports


function useOnScreen(options) {
  const homeRef = React.useRef()
  const aboutRef = React.useRef()
  const technologyRef = React.useRef()
  const projectsRef = React.useRef()
  const contactRef = React.useRef()
  const heroRef = React.useRef()

  const [visible, setVisible] = React.useState(false)



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
  }, [homeRef, aboutRef, options])

  return [homeRef, heroRef, aboutRef, technologyRef, projectsRef, contactRef, visible]
}

function Homepage() {
  const [homeRef, heroRef, aboutRef, technologyRef, projectsRef, contactRef, visible] = useOnScreen({ rootMargin: '-80px' })

  return (
    <div className="App">
      <header className={visible ? 'nav' : 'hidden'}>
            <ul>
                <li>
                    <Link onClick={() => homeRef.current.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'})}>
                        HOME
                    </Link>
                </li>
                <li>
                    <Link onClick={() => aboutRef.current.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'})}>
                        ABOUT
                    </Link>
                </li>
                <li>
                    <Link onClick={() => technologyRef.current.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'})}>
                        PROGRAMMING
                    </Link>
                </li>
                <li>
                    <Link onClick={() => projectsRef.current.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'})}>
                        PROJECTS
                    </Link>
                </li>
                <li>
                    <Link onClick={() => contactRef.current.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'})}>
                        CONTACT
                    </Link>
                </li>
            </ul>
        </header>
      <div ref={homeRef} style={{ height: '100vh' }}>
        <div className='hero-main' style={{ height: '100vh' }}>
            <div ref={heroRef} className={visible ? 'hero-sub1' : 'hero-sub'}>
                <h1>Hey, I'm Alex!</h1>
            </div>
            <div className="circle-container">
                <Link to='' onClick={() => aboutRef.current.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'})}>
                    <FontAwesomeIcon icon={faArrowDown} style={{ color: 'navy' }} size="6x" />
                </Link>
            </div>
        </div>
        ) 
      </div>
      <div className="homepage-flex" style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white' }}>
        <div ref={aboutRef}>
            <About />
        </div>
        <div ref={technologyRef}>
            <Technology />
        </div>
        <div ref={projectsRef}>
            <Projects />
        </div>
        <div ref={contactRef}>
            <Contact />
        </div>
      </div>
    </div>
  );
}

export default Homepage;