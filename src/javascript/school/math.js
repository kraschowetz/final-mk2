import '../../css/style.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoFlowerSharp } from "react-icons/io5";
import { IoMdSchool } from "react-icons/io";
import { FaCode, FaPaintbrush } from "react-icons/fa6";
import { RiHome2Fill } from "react-icons/ri";
import * as exp from '../exports.js';

export default function Math(){
    

    const [position, setPosition] = useState(window.scrollY);
    const [visible, setVisible] = useState(true);
    const [menuState, setMenuState] = useState(false);
    const vsbl = visible? 'header-visible': 'header-hidden';

    const changeMenu = () => {
        setMenuState(!menuState);
    }

    useEffect(() =>{
        document.title = 'Matemática    ';

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
                        MATEMÁTICA
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

            <img src='img/ciencias.jpg' alt='capivara' className='img-frame'/>

            <div id='intro-div'>
                <exp.Title color='white'>
                    ESTATISTICA
                </exp.Title>

                <exp.TextBox bg='#f1f1f1' width='60%'>
                    <exp.Text color='black'>
                       Foi um trabalho recente, tivemos que recolher dados e fazer uma pesquisa de estatistica sobre
                        um tema livre. O tema escolhido foi: dupla jornada de trabalho feminina.
                        <br/>
                        O que mais me mercou nesse trabalho foi o fato de que ele preveu o tema da redação do ENEM.
                        Na mesma semana que ele foi apresentado seu tema caiu na redação do ENEM.
                    </exp.Text>

                    <Link to='https://www.canva.com/design/DAFyvEeqoEo/xN0tdjAbHQvTYoI_rWwcSw/view'
                    target='_blank'>
                        <img src='img/Violencia.png' alt='livro'/>
                    </Link>

                </exp.TextBox>

                <exp.Title color='white'>
                    MÓDULOS     
                </exp.Title>
                
                <exp.TextBox bg='#f1f1f1' width='60%'>

                    <exp.Text color='black'>
                        Não é um trabalho específico, mas acho muito interessante ter estudado sobre módulos de numeros,
                        tanto por que foram os poucos exercicios de matemática que me interessei em fazer e também por que
                        descobri um uso para esse conteúdo na porgramação de jogos.
                    </exp.Text>

                </exp.TextBox>

                <exp.Title color='white'>
                    TEODOLITO
                </exp.Title>

                <exp.TextBox bg='#f1f1f1' width='60%'>
                    <exp.Text color='black'>
                        Nesse trabalho o grupo teve que construir um teodolito e usar ele para medir objetos pelo senac.
                    </exp.Text>
                </exp.TextBox>

                <Link to='/escola'>
                  <IoMdSchool size={75} className='menu-item'/>
                </Link>
            </div>

        </div>
    );
}