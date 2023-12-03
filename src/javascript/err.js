import '../css/style.css';
import * as exp from './exports';
import { Link } from 'react-router-dom';
import { RiHome2Fill } from 'react-icons/ri';
import { useEffect } from 'react';

export default function Err(){

    useEffect(() =>{
        document.title = 'erro 404';
    })

    return(
        <div className="container">
            <exp.Title color='black'>DEU ERRO SEU BOBÃO</exp.Title>
            <exp.Text color='black'>como vc fez isso?</exp.Text>

            <Link to='/home'>
                <RiHome2Fill size={50} color='black'/>
            </Link>
        </div>
    );
}