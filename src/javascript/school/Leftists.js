import '../../css/style.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoFlowerSharp } from "react-icons/io5";
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
                        CIÊNCIAS HUMANAS
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
                    MAGRELA
                </exp.Title>

                <exp.TextBox bg='#f1f1f1' width='60%'>
                    <exp.Text color='black'>
                       esse foi um vídeo feito no ano passado. acho q é o meu melhor trabalho de 
                        humans pois foi o único que fez 3 pessoas acharem que estava desmaiando durante
                        sua gravação.
                    </exp.Text>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/SuRT7QFJKeA?si=Vjh4yZld9bmp9Z4F" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
                    web-share" allowfullscreen></iframe>
                </exp.TextBox>

                <exp.Title color='white'>
                    ONU     
                </exp.Title>
                
                <exp.TextBox bg='#f1f1f1' width='60%'>
                    <exp.Text color='black'>
                        François 🇫🇷 <br/>
                        ho hon!
                    </exp.Text>
                </exp.TextBox>

                <exp.Title color='white'>
                    RODA VIVA
                </exp.Title>

                <exp.TextBox bg='#f1f1f1' width='60%'>
                    <exp.Text color='black'>
                        converti a sala ao trotskysmo (eca)
                    </exp.Text>
                </exp.TextBox>

            </div>

        </div>
    );
}