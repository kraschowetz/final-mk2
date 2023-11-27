import '../css/style.css';
import React, { useState, useEffect } from 'react';
//import { Square } from './exports';

function Home() {

  const [position, setPosition] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const vsbl = visible? 'header-visible': 'header-hidden';

  useEffect(() =>{

    const handleScroll = () => {
      let moving = window.scrollY;

      setVisible(position > moving);
      setPosition(moving)
    }
   window.addEventListener('scroll', handleScroll);
    return(() => {
      window.addEventListener('scroll', handleScroll);
    })
    
  });

  return (
    <div className='container'>
      <header className={vsbl}>
        <h1>
          SITE PHODA
        </h1>
      </header>
    </div>
  );
}

export default Home;
