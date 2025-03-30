"use client"
import React, { useEffect } from 'react';
import NavigationBar from './components/NavigationBar';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Advertisements from './components/Advertisements';
import AnimatedBackgroundDots from './components/AnimatedBackgroundDots';

export default function Page() {

  // We create a state that we will store the currently selected navigation element in
  const [activeElement, setActiveElement] = React.useState('Home');

  // We create a function that will be called when a navigation element is clicked
  const handleSelect = (element) => {
    setActiveElement(element);
  };

  // We create a useEffect that will be called when the component is mounted
  useEffect(() => {
    // We set the title of the page to the active element
    document.title = "Halldór Valberg - " + activeElement;
  }, [activeElement]);



  return (
    <div className='HomePage'>
      <AnimatedBackgroundDots className='BackgroundDots' />
      <div className='MainContent'>
        <div className="Container">

          <div className='LeftPannel'>
            <div className='TitleContent'>
              <span id="Title"> Halldór Valberg </span>
              <p id="Subtitle">App & Web Developer </p>
            </div>

            <div className='Navigation'>
              <NavigationBar activeElement={activeElement} handleSelect={handleSelect} />
            </div>
            <div className='ContactInfo'>
              <p className='ContactElement'>email: <a href='mailto:halldor.valberg@hotmail.com' target="_blank">halldor.valberg@hotmail.com</a></p>
              <p className='ContactElement'>phone: <a href='tel:003548666298'>00 354 866 6298</a></p>
              <p className='ContactElement'> <a href="https://www.instagram.com/halldorvalberg/" target="_blank">instagram</a> </p>
              <p className='ContactElement'> <a href="https://www.linkedin.com/in/halldor-valberg" target="_blank">linkedin</a> </p>
              <p className='ContactElement'> <a href="https://github.com/halldorvalberg" target="_blank">github</a> </p>
            
            </div>
          </div>



          <div className='RightPannel'>

            {activeElement === 'Home' && <Bio />}
            {activeElement === 'Projects' && <Projects />}
            {activeElement === 'Skills' && <Skills />}
            {activeElement === 'Resume' && <Resume />}
            {activeElement === 'Advertisements' && <Advertisements />}


          </div>


        </div>
      </div>
    </div>
  );
}
