import '../../css/style.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoFlowerSharp } from "react-icons/io5";
import { IoMdSchool } from "react-icons/io";
import { FaCode, FaPaintbrush } from "react-icons/fa6";
import { RiHome2Fill } from "react-icons/ri";
import * as exp from '../exports.js';

export default function Science(){
    

    const [position, setPosition] = useState(window.scrollY);
    const [visible, setVisible] = useState(true);
    const [menuState, setMenuState] = useState(false);
    const vsbl = visible? 'header-visible': 'header-hidden';

    const changeMenu = () => {
        setMenuState(!menuState);
    }

    useEffect(() =>{
        document.title = 'ciências da natureza';

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
                        CIÊNCIAS DA NATUREZA
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

            <img src='img/ciencias.jpg' alt='eu sabo' className='img-frame'/>

            <div id='intro-div'>
                <exp.Title color='white'>
                    JOGO DA EVOLUÇÃO
                </exp.Title>

                <exp.TextBox bg='#f1f1f1' width='60%'>
                    <exp.Text color='black'>
                        Foi um trabalho mais elaborado: para representar a teoria da vida à base de silicio
                        fiz um jogo que mostra o processo de criação da vida à base de silicio em um outro planeta.
                    </exp.Text>

                    <iframe title='silicon-rush'id='webgl_iframe' frameborder="0" allow="autoplay; fullscreen; vr" allowfullscreen="" allowvr=""
                    mozallowfullscreen="true" src="https://play.unity.com/webgl/5a56cb8b-09da-463c-aa45-063cba5b8174?screenshot=false&embedType=embed"  width="100%"
                    height="640" onmousewheel="" webkitallowfullscreen="true"></iframe>
                </exp.TextBox>

                <exp.Title color='white'>
                    ESTAÇÃO DE TRATAMENTO DE ÁGUA
                </exp.Title>
                
                <exp.TextBox bg='#f1f1f1' width='60%'>
                    <exp.Text color='black'>
                        A sala inteira se uniu para fazer uma estação de tratamento de água. <br/>
                        A parte mais interessante desse trabalho foi que durante sua produção algum aluno anonimo
                        acidentalmente (provavelmente) fez um vazamento de gás no lab. do SENAC enquanto trabalhavamos com
                        fogo no mesmo laboratório. 
                    </exp.Text>
                </exp.TextBox>

                <exp.Title color='white'>
                    HOLTER E MAPA
                </exp.Title>

                <exp.TextBox bg='#f1f1f1' width='60%'>
                    <exp.Text color='black'>
                        Meu grupo aprimorou o dispositivo 'Holter e Mapa'.
                    </exp.Text>
                     <img src='img/insulina.png' alt='holter e mapa'/>
                </exp.TextBox>

                <Link to='/escola'>
                  <IoMdSchool size={75} className='menu-item'/>
                </Link>

            </div>

        </div>
    );
}