import '../css/style.css';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

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

  const TextBox = styled.div`
    background-color: ${props => props.bg};
    width: ${props => props.width};
    margin: 20px;
    padding: 10px;
    border-radius: 8px;
    min-height: 30px;
    height: fit-content;
    text-align: center;
  `;

  return (
    <div className='container'>
      <header className={vsbl}>
        <h1>
          SITE PHODA
        </h1>
      </header>

      <img src='img/flower-boy.png' alt='cover' id='img-frame'/>

      <div id='intro-div'>
        <h1 className='margin-top-h1'>QUEM SOU EU?</h1>

        <TextBox bg="#f1f1f1" width="80%">
          <p className='text'>
            Sou Kraschowetz sou estudante do ensino médio e tenho 17 anos. <br/>
            Gosto de programação, desenho, música, jogos e livros.
          </p>
        </TextBox>

        <h1>O QUE FAÇO?</h1>

        <div className='line' align="baseline">
          <TextBox bg="#f1f1f1" width="20%">
            <p className='text'><b>PROGRAMAÇÃO:</b><br/>
             -java<br/>
             -c#<br/>
             -javascript<br/>
             -css<br/>
             -html<br/>
            </p>
          </TextBox>

          <TextBox bg="#f1f1f1" width="20%">
            <p className='text'><b>ARTE:</b><br/>
             -nanquim<br/>
             -aquarela<br/>
             -grafite<br/>
             -fotos<br/>
             -vídeos<br/>
            </p>
          </TextBox>
        </div>
      </div>
    </div>
  );
}

export default Home;
