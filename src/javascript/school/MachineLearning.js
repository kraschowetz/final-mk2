import '../../css/style.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoFlowerSharp } from "react-icons/io5";
import { IoMdSchool } from "react-icons/io";
import { FaCode, FaPaintbrush } from "react-icons/fa6";
import { RiHome2Fill } from "react-icons/ri";
import * as exp from '../exports.js';

export default function IT(){
    

    const [position, setPosition] = useState(window.scrollY);
    const [visible, setVisible] = useState(true);
    const [menuState, setMenuState] = useState(false);
    const vsbl = visible? 'header-visible': 'header-hidden';

    const changeMenu = () => {
        setMenuState(!menuState);
    }

    useEffect(() =>{
        document.title = 'Machine Learning';

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

    useEffect(() =>{window.scrollTo(0, 0)}, []);

    return(
        <div className='container'>
            <div id='header-fixer'>
                <header className={vsbl}>
                    <h1>
                        MACHINE LEARNING
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

                        <Link to='/home'>
                            <RiHome2Fill size={50} className='menu-item'/>
                        </Link>

                        <Link to='/arte'>
                            <FaPaintbrush size={50} className='menu-item'/>
                        </Link>

                        <Link to='/programacao'>
                            <FaCode size={50} className='menu-item'/>
                        </Link>

                    </div>
                    ): null}
            
                </div>
            </div> {/*fim do cabeçalho*/}

            <img src='img/bmo.jpg' alt='capivara' className='img-frame'/>

            <div id='intro-div'>
                <exp.Title color='white'>
                    O QUE É MACHINE LEARNING?
                </exp.Title>

                <exp.TextBox bg='#f1f1f1' width='60%'>
                    <exp.Text color='black'>
                        Machine learning é o processo de aprendizado de uma IA. ele pode ser usado com
                        vários tipos de IA e tem vários métodos de machine learning.
                        <br/>
                        Um dos tipos de Machine learning é o aprendizado por reforço, onde a IA tenta cumprir
                        seu objetivo por tentativa e erro, onde algumas ações são punidas e outras recompensadas.
                        no final de cada geração de teste, as IAs com a maior pontuação (que aumenta conforme suas
                        recompensas) é modificada levemente e colocada para teste novamente.
                        <br/>
                        O machine learning permite a criação de IAs cada vez melhores em cumprir sua função de forma
                        automática, ja que o que controla as punições, recompensas e as gerações é um ambiente virtual.
                        <br/>
                        Abaixo anexei um canal do Youtube, foi com ele que conheci o machine learning e acho que os 
                        vídeos dele são uma boa representação de como esse método funciona.
                    </exp.Text>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/NZlIYr1slAk?si=xq5W7y28gO5Lsu7l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </exp.TextBox>

                <Link to='/escola'>
                    <IoMdSchool size={75} className='menu-item'/>
                </Link>

            </div>

        </div>
    );
}