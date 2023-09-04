"use client"
import React, { useEffect } from 'react';

import LandingText from './components/LandingText';

export default function Page() {

  useEffect(() => {
    const blob = document.getElementById('blob');
    document.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      blob.animate([
        { left: `${clientX}px`, top: `${clientY}px` }
      ], { duration: 3000, fill: "forwards" });
    });

  }, []);

  





  return (
    <div>
      <div id='blob'></div>
      <div id='blur'></div>

      {/* I'm Halldór Valberg
          Web & App Developer
          Email Instagram Linkedin
          halldor.valberg@hotmail.com  */}
      <LandingText />
    </div>
  );
}
