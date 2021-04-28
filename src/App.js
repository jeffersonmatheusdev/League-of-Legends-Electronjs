import './App.scss';
import React from 'react';
import Checkbox from './components/Checkbox';
import InputText from './components/InputText';
import MenuOptions from './components/MenuOptions'
import { qst, logo, fb, google, backgroundImg, apple, arrow } from './components/Materials.js';

function App() {
    return (
      <div
      className="Screen"
      >

        <div
        className="Login"
        >

          <img
          className="logo"
          src={logo}
          />

          <img 
          src={qst} 
          className="question"
          />

          <h1
          className="h1Title"
          >
            Fazer login
          </h1>

          <InputText
            type="text"
            divName="userDiv"
            inputName="inputUser"
            spanName="nameUser"
            text="NOME DE USUÁRIO"
          />

          <InputText
            type="password" 
            divName="passDiv"
            inputName="inputPass"
            spanName="namePass"
            text="SENHA"
          />
          
          <div
          className="authOptions"
          >

            <div
            className="fbIco">

              <img
              src={fb}
              className="ico"
              />

            </div>

            <div
            className="googleIco">

              <img
              src={google}
              className="ico"
              />

            </div>

            <div className="appleIco">
              <img src={apple} className="ico"/>
            </div>

          </div>

          <Checkbox
          checkDiv="manterLog"
          checkbox="checkbox"
          label="labelLogado"
          text="Manter login"
          />

          <img
          src={arrow}
          className="arrow"
          />

          <h1
          className="sessao"
          >
            NÃO CONSEGUE INICIAR SESSÃO?
          </h1>

          <h1
          className="sessao"
          style={
            {
              top: "88%",
              left: "12vw"
            }
          }
          >
            CRIAR CONTA
          </h1>

          <h1
          className="sessao"
          style={
            {
              top: "89%",
              left: "24vw"
            }
          }
          >
            V30.0.1
          </h1>

        </div>

        <div 
        className="BackgroundImage"
        >

          <img 
          src={backgroundImg}
          className="imageBK"
          />

          <MenuOptions
          style={
            { 
              left: "90%", 
              top: "1%"
            }
          }
          />

        </div>

      </div>

    );
}

export default App;
