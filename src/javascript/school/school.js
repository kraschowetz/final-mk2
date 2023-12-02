import '../../css/style.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoFlowerSharp } from "react-icons/io5";
import { FaCode, FaPaintbrush } from "react-icons/fa6";
import { IoMdSchool } from "react-icons/io";
import { RiHome2Fill } from "react-icons/ri";

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
        </div>
    );
}