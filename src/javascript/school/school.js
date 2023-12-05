import '../../css/style.css';
import '../../css/school.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoFlowerSharp } from "react-icons/io5";
import { FaCode, FaPaintbrush } from "react-icons/fa6";
import { RiHome2Fill } from "react-icons/ri";
import * as exp from '../exports.js';

export default function School(){

    const [position, setPosition] = useState(window.scrollY);
    const [visible, setVisible] = useState(true);
    const [menuState, setMenuState] = useState(false);
    const vsbl = visible? 'header-visible': 'header-hidden';

    const changeMenu = () => {
        setMenuState(!menuState);
    }

    useEffect(() =>{
        document.title = 'escola';

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
                        TRABALHOS DA ESCOLA
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

            <img src='img/graduation.jpg' alt='escola' className='img-frame'/>

            <div id='blk-grid'>
                <exp.Title>MATÉRIAS</exp.Title>
                <div className='grid'>

                    <Link to='/ciencias'>
                        <div className='box'>
                            <RiHome2Fill size={100} className='grid-item'/>
                            <h2>ciências</h2>
                        </div>
                    </Link>

                    <Link to='/humanas'>
                        <div className='box'>
                            <RiHome2Fill size={100} className='grid-item'/>
                            <h2>humanas</h2>
                        </div>
                    </Link>
                    
                    <Link to='/linguagens'>
                        <div className='box'>
                            <RiHome2Fill size={100} className='grid-item'/>
                            <h2>linguagens</h2>
                        </div>
                    </Link>

                    <Link to='/matematica'>
                        <div className='box'>
                            <RiHome2Fill size={100} className='grid-item'/>
                            <h2>matemática</h2>
                        </div>
                    </Link>

                    <Link to='/ti'>
                        <div className='box'>
                            <RiHome2Fill size={100} className='grid-item'/>
                            <h2>T.I</h2>
                        </div>
                    </Link>
                    
                    <Link to='/automacao'>
                        <div className='box'>
                            <RiHome2Fill size={100} className='grid-item'/>
                            <h2>automação</h2>
                        </div>
                    </Link>

                    <Link to ='/ia'>
                        <div className='box'>
                            <RiHome2Fill size={100} className='grid-item'/>
                            <h2>I.A</h2>
                        </div>
                    </Link>

                    <Link to='/machine_learning'>
                        <div className='box'>
                            <RiHome2Fill size={100} className='grid-item'/>
                            <h2>machine learning</h2>
                        </div>
                    </Link>

                    <Link to='/ra'>
                        <div className='box'>
                            <RiHome2Fill size={100} className='grid-item'/>
                            <h2>metaverso</h2>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}