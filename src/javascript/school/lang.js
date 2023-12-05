import '../../css/style.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoFlowerSharp } from "react-icons/io5";
import { IoMdSchool } from "react-icons/io";
import { FaCode, FaPaintbrush } from "react-icons/fa6";
import { RiHome2Fill } from "react-icons/ri";
import * as exp from '../exports.js';

export default function Lang(){
    

    const [position, setPosition] = useState(window.scrollY);
    const [visible, setVisible] = useState(true);
    const [menuState, setMenuState] = useState(false);
    const vsbl = visible? 'header-visible': 'header-hidden';

    const changeMenu = () => {
        setMenuState(!menuState);
    }

    useEffect(() =>{
        document.title = 'Linguagens';

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
                        LINGUAGENS
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

            <img src='img/humanas.jpg' alt='capivara' className='img-frame'/>

            <div id='intro-div'>
                <exp.Title color='white'>
                    LIVRO
                </exp.Title>

                <exp.TextBox bg='#f1f1f1' width='60%'>
                    <exp.Text color='black'>
                       Esse trabalho foi um livro com minicontos sobre um tema em comum, o do meu grupo foi o tema 
                        "Violência". Foi um trabalho rápido mas divertido de fazer, principalmente fazer o visual do
                        livro.
                    </exp.Text>

                    <Link to='https://www.canva.com/design/DAF0YPDFlHs/HfIOtNYq4eHitoARx2kYXA/edit?utm_content=DAF0YPDFlHs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
                    target='_blank'>
                        <img src='img/Violencia.png' alt='livro'/>
                    </Link>

                </exp.TextBox>

                <exp.Title color='white'>
                    UM MALUCO NO PEDAÇO     
                </exp.Title>
                
                <exp.TextBox bg='#f1f1f1' width='60%'>

                    <exp.Text color='black'>
                        Tivemos que analizar uma série que contenha o black-english e identificar os seus elementos.
                        A série escolhida foi "Um Maluco No Pedaço".
                    </exp.Text>

                    <Link to='https://www.canva.com/design/DAFPUL6DNEs/-4PFOJxGQgmrJJzXrDw50w/edit?utm_content=DAFPUL6DNEs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
                    target='_blank'>
                       <IoFlowerSharp size={50} className='menu-item'/>
                    </Link>

                </exp.TextBox>

                <exp.Title color='white'>
                    PINÓQUIO
                </exp.Title>

                <exp.TextBox bg='#f1f1f1' width='60%'>
                    <exp.Text color='black'>
                        Para esse trabalho tive que refazer uma históra como se tivesse outro genero textual. <br/>
                        Decidi refazer Pinóquio como se fosse um drama e uma HQ. <br/>
                        O trabalho final ficou decente, gostei do roteiro original, mas por ter só 1 semana Para
                        fazer o trabalho tive que cortar muitas partes dele e justamente por ter pouco tempo
                        a arte da HQ ficou horrivel. Mas apesar de tudo acho q foi um bom trabalho.
                    </exp.Text>
                </exp.TextBox>

                <Link to='/escola'>
                  <IoMdSchool size={75} className='menu-item'/>
                </Link>
            </div>

        </div>
    );
}