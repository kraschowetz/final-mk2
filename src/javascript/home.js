import '../css/style.css';
import React, { useState, useEffect } from 'react';
import { IoFlowerSharp } from "react-icons/io5";
import {Link} from 'react-router-dom';
import { FaCode, FaPaintbrush  } from "react-icons/fa6";
import { IoMdSchool } from "react-icons/io";
import * as exp from './exports.js';

function Home() {

  const [position, setPosition] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [menuState, setMenuState] = useState(false);
  const vsbl = visible? 'header-visible': 'header-hidden';

  const changeMenu = () => {
    setMenuState(!menuState);
  }

  useEffect(() =>{

    const handleScroll = () => {
      let moving = window.scrollY;

      setVisible(position > moving);
      setPosition(moving);

      if(!visible)
        setMenuState(false);
    }

    window.addEventListener('scroll', handleScroll);
    return(() => {
      window.addEventListener('scroll', handleScroll);
    })
    
  }); 

  return (
    <div className='container'>
      <div id='header-fixer'>
        <header className={vsbl}>
          <h1>
            SITE INVRIVEL
          </h1>

          <div className='menu' onClick={changeMenu}>
            <button>
              <IoFlowerSharp color='white' size={50} className='menu-logo'/>
            </button>
          </div>
        </header>

        <div id='header-line'>

          <div id='menu-void'/>

            {menuState && visible? (
              <div className='dropdown'>
                <Link to='/arte'>
                  <FaPaintbrush size={50} className='menu-item'/>
                </Link>

                <Link to='/programacao'>
                  <FaCode size={50} className='menu-item'/>
                </Link>

                <Link to='/escola'>
                  <IoMdSchool size={50} className='menu-item'/>
                </Link>
              </div>
            ): null}
            
        </div>
      </div>
      <img src='img/flower-boy.png' alt='cover' className='img-frame'/>

      <div id='intro-div'>
        <exp.Title color='white'>QUEM SOU EU?</exp.Title>

        <exp.TextBox bg="#f1f1f1" width="80%">
          <exp.Text>
            Sou Kraschowetz sou estudante do ensino médio e tenho 17 anos. <br/>
            Gosto de programação, desenho, música, jogos e livros.
          </exp.Text>
        </exp.TextBox>

        <exp.Title color='white'>O QUE FAÇO?</exp.Title>

        <div className='line'>
          <exp.TextBox bg="#f1f1f1" width="20%">
            <exp.Text><b>PROGRAMAÇÃO:</b><br/>
             -java<br/>
             -c#<br/>
             -javascript<br/>
             -css<br/>
             -html<br/>
            </exp.Text>
          </exp.TextBox>

          <exp.TextBox bg="#f1f1f1" width="20%">
            <exp.Text><b>ARTE:</b><br/>
             -nanquim<br/>
             -aquarela<br/>
             -grafite<br/>
             -fotos<br/>
             -vídeos<br/>
            </exp.Text>
          </exp.TextBox>
        </div>
      </div>

      <div className='white-div'>
        <exp.Title color='black'>taller de concreto</exp.Title>
        <exp.TextBox bg='#00040D' width='80%'>
          <exp.Text color='white'>
            foriu, foiru, fouriudistaim <br/>
            coziu me maeerf quê <br/>
            coziu me maeerf quêê iê <br/>
            </exp.Text>
        </exp.TextBox>
      </div>

      <img src='img/scaring-the-hoes.png' alt='sth' className='img-frame'/>

      <div className='white-div'>
        <exp.Title color='black'>MÚSICA</exp.Title>
        <exp.TextBox bg='#00040D' width='50%'>
          <div className='line'>
            <img src='img/igor.jpg' alt='igor'/>
            <exp.Text color='white'>IGOR</exp.Text>
          </div>  
        </exp.TextBox>
      </div>
    </div>
  );
}

export default Home;