import '../css/style.css';
import React, { useState, useEffect } from 'react';
import { IoFlowerSharp } from "react-icons/io5";
import {Link} from 'react-router-dom';
import { FaCode, FaPaintbrush  } from "react-icons/fa6";
import { IoMdSchool } from "react-icons/io";
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
            <header>
                <h1>
                    SITE INVRIVEL
                </h1>

            <div className='menu' onClick={changeMenu}>
                <button>
                    <IoFlowerSharp color='white' size={50} className='menu-logo'/>
                </button>

            </div>
            {menuState && (vsbl === 'header-visible')? (
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
            ) : null}
            </header>
        </div>
    );

}

export default Art;