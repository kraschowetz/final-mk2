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
        document.title = 'T.I';

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
                        INFORMÁTICA
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
                    CIFRA DE CÉZAR
                </exp.Title>

                <exp.TextBox bg='#f1f1f1' width='60%'>
                    <exp.Text color='black'>
                       foi um trablho legal de fazer. Com ele aprendi a usar char arryas e 'reaprendi' a usar java.
                    </exp.Text>

                    <Link to="https://github.com/kraschowetz/CifradeCaesar" target='blank'>
                        <img src='img/Cifra.png' alt='livro'/>
                    </Link>

                </exp.TextBox>

                <exp.Title color='white'>
                    PC BUILDING SIMULATOR     
                </exp.Title>
                
                <exp.TextBox bg='#f1f1f1' width='60%'>

                    <exp.Text color='black'>
                        aproveitando que este jogo ficou de graça por 1 semana a prof passou um trabalho onde o grupo deveria
                        montar um pc em vídeo por meio do jogo. <br/>
                        foi uma boa forma de saber como funciona o processo de montagem de um pc durante as aulas on-line.
                    </exp.Text>

                </exp.TextBox>

                <exp.Title color='white'>
                    BANCO DE DADOS
                </exp.Title>

                <exp.TextBox bg='#f1f1f1' width='60%'>
                    <exp.Text color='black'>
                        Apesar de que esse trabalho quase deu errado, eu gostei muito dele pois com ele 
                        aprendi a usar bancos de dados e como conectar eles com um outro programa.
                    </exp.Text>
                </exp.TextBox>

                <Link to='/escola'>
                  <IoMdSchool size={75} className='menu-item'/>
                </Link>
            </div>

        </div>
    );
}