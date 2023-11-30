import '../css/style.css';
import React, { useState, useEffect } from 'react';
import { IoFlowerSharp } from "react-icons/io5";
import {Link} from 'react-router-dom';
import { FaCode, FaPaintbrush  } from "react-icons/fa6";
import { IoMdSchool } from "react-icons/io";
import { RiHome2Fill } from "react-icons/ri";
import * as exp from './exports.js';


function Art(){

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
    }

    window.addEventListener('scroll', handleScroll);
    return(() => {
      window.addEventListener('scroll', handleScroll);
    })
    
  }); 
    return(
        <div className='container'>
            <div id='header-fixer'>
                <header className={vsbl}>
                    <h1>
                        ARTE
                    </h1>

                    <div className='menu' onClick={changeMenu}>
                        <button>
                        <IoFlowerSharp color='white' size={50} className='menu-logo'/>
                        </button>
                    </div>
                </header>

                {menuState && (vsbl === 'header-visible')? (
                    <div className='dropdown'>
                        <Link to='/home'>
                        <RiHome2Fill size={50} className='menu-item'/>
                        </Link>

                        <Link to='/programacao'>
                        <FaCode size={50} className='menu-item'/>
                        </Link>

                        <Link to='/escola'>
                        <IoMdSchool size={50} className='menu-item'/>
                        </Link>
                    </div>
                                                                
                ) : null}                                      
            </div>   {/*FIM DO CABEÇALHO*/}    

            <img src='img/madvillainy.png' alt='cover' className='img-frame'/>  

            <div id='intro-div'>
                <exp.Title color='white'>MINHA ARTE</exp.Title>

                <exp.TextBox bg="#f1f1f1" width="50%">
                    <exp.Text>
                        <b>COMO Q É?</b><br/>
                        Taller de concreto.<br/>
                        Cachorro.<br/>
                        Aingobórigô.<br/>
                        Engobórirô.<br/>
                        Bidofómarô.<br/>
                        Bidosémiô.<br/>
                        Bidosémiô.<br/>
                        Gôretaliô.<br/>
                        Donlíííí.<br/>
                        Ismafóó (mafó)<br/>
                    </exp.Text>
                </exp.TextBox>
            </div>                              

        </div>
    );

}

export default Art;