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
        document.title = 'metaverso';

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
                        RA E METAVERSO
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
                    O QUE É REALIDADE AUMENTADA?
                </exp.Title>

                <exp.TextBox bg='#f1f1f1' width='60%'>
                    <exp.Text color='black'>
                        Realidade aumentada é quando há uma sobreposição de elementos viruais a nossa
                        visão da vida real, um bom exemplo disso é o jogo "Pokemon GO" onde é possível usar
                        a câmera do seu celular para visualizar algum pokemon como se ele estivesse no mundo
                        real.
                        <br/>   
                        A realidade aumentada tem 3 principais características:
                        <ul>
                            <li>Combina elementos virtuais com o ambiente real</li>
                            <li>É interativa e tem processamento em tempo real</li>
                            <li>É renderizada em três dimensões.</li>
                        </ul>
                    </exp.Text>
                    
                </exp.TextBox>

                <exp.Title color='white'>
                    O QUE É METAVERSO?
                </exp.Title>

                <exp.TextBox bg='#f1f1f1' width='60%'>
                    <exp.Text color='black'>
                        Metaverso é um tipo de mundo virtual que tenta simular ou replicar a realidade com
                        elementos virtuais. O metaverso é um espaço compartilhado, descentralizado e  virtual 
                        que usa da soma de técnologias como realidade virtual, realidade aumentada e internet.
                    </exp.Text>

                </exp.TextBox>

                <Link to='/escola'>
                    <IoMdSchool size={75} className='menu-item'/>
                </Link>

            </div>

        </div>
    );
}