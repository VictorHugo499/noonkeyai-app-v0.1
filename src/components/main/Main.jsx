import React from 'react'
import './Main.css'
import {assets} from '../../assets/assets/assets'

const Main = () => {
  return (
    <div className='main'>
      <div className="nav">
        <p>Noonkey AI</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p><span>Ola! eu sou a Noonkey AI</span></p>
          <p>como posso ajudar?</p>
        </div>
        {/*cards*/}
        <div className="card">
        <div className="cards">
          <p>Ideias instantâneas. Crie sem limites.</p>
          <img src={assets.bulb_icon} alt="" />
        </div>
        <div className="cards">
          <p>Codifique rápido. Soluções inteligentes</p>
          <img src={assets.code_icon} alt="" />
        </div>
        <div className="cards">
          <p>Menos tempo, mais resultado. Produtividade turbo.</p>
          <img src={assets.compass_icon} alt="" />
        </div>
        </div>
        {/*search-box*/}
        <div className="main-buttom">
          <div className="search-box">
              <input type="text" placeholder='escreva seu prompt aqui' />
              <div>
                  <img src={assets.gallery_icon} alt="" />
                  <img src={assets.mic_icon} alt="" />
                  <img src={assets.send_icon} alt="" />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main