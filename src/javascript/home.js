import '../css/style.css';
import React, { useState, useEffect } from 'react';
import * as exp from './exports.js';

function Home() {

  const [position, setPosition] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const vsbl = visible? 'header-visible': 'header-hidden';

  useEffect(() =>{

    const handleScroll = () => {
      let moving = window.scrollY;

      setVisible(position > moving);
      setPosition(moving)
    }
   window.addEventListener('scroll', handleScroll);
    return(() => {
      window.addEventListener('scroll', handleScroll);
    })
    
  });

  

  return (
    <div className='container'>
      <header className={vsbl}>
        <h1>
          SITE PHODA
        </h1>
      </header>

      <img src='img/flower-boy.png' alt='cover' id='img-frame'/>

      <div id='intro-div'>
        <exp.Title color='white'>QUEM SOU EU?</exp.Title>

        <exp.TextBox bg="#f1f1f1" width="80%">
          <exp.Text>
            Sou Kraschowetz sou estudante do ensino médio e tenho 17 anos. <br/>
            Gosto de programação, desenho, música, jogos e livros.
          </exp.Text>
        </exp.TextBox>

        <exp.Title color='white'>O QUE FAÇO?</exp.Title>

        <div className='line'>
          <exp.TextBox bg="#f1f1f1" width="20%">
            <exp.Text><b>PROGRAMAÇÃO:</b><br/>
             -java<br/>
             -c#<br/>
             -javascript<br/>
             -css<br/>
             -html<br/>
            </exp.Text>
          </exp.TextBox>

          <exp.TextBox bg="#f1f1f1" width="20%">
            <exp.Text><b>ARTE:</b><br/>
             -nanquim<br/>
             -aquarela<br/>
             -grafite<br/>
             -fotos<br/>
             -vídeos<br/>
            </exp.Text>
          </exp.TextBox>
        </div>
      </div>

      <div className='white-div'>
        <exp.Title color='black'>taller de concreto</exp.Title>
        <exp.TextBox bg='#00040D' width='80%'>
          <exp.Text color='white'>
            foriu, foiru, fouriudistaim <br/>
            coziu me maeerf quê <br/>
            coziu me maeerf quêê iê <br/>
            </exp.Text>
        </exp.TextBox>
      </div>
    </div>
  );
}

export default Home;
