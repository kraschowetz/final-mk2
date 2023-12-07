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
        document.title = 'I.A';

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
                        INTELIGÊNCIA ARTIFICIAL
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
                    O QUE É INTELIGÊNCIA ARTIFICIAL?
                </exp.Title>

                <exp.TextBox bg='#f1f1f1' width='60%'>
                    <exp.Text color='black'>
                       Inteligência artificial é, a grosso modo, um código de computador que exerce automáticamente
                        uma função. Diferente de estruturas de if e else as IAs conseguem lidar com situações que não
                        foram previstas e são fáceis de transportar e modificar.
                        <br/>
                        As IAs são como uma rede de neurônios, que recebem uma entrada de dados, analizam e calculam
                        os dados com base em seu treinamento e depois retornam as ações que devem executar.
                        <br/>
                        Abaixo anexei um vídeo que compara as IAs com estruturas if-else com mais profundidade.
                    </exp.Text>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/F0Iby7KCXls?si=Mr_a3BakWhgE_6yn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                </exp.TextBox>

                <Link to='/escola'>
                    <IoMdSchool size={75} className='menu-item'/>
                </Link>
            </div>

        </div>
    );
}