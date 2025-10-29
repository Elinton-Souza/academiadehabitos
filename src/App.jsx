import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className="cabecalho-div">
        <img src="logo.png" alt="Academia de Hábitos" className="logo" />
        <h1 className="titulo">Crie rotinas, Conquiste o futuro!</h1>
      </div>
      <header>
        <nav className="nav">
          <div className="nav-div1">
            <ul className="nav-list">
              <li><a href="#home">Início</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
          <div className="nav-div2">
            <button className='nav-botoes'>Login</button>
            <button className='nav-botoes'>Criar Conta</button>
          </div>
        </nav>
      </header>
      <hr />
    </>
  );
}

export default App;