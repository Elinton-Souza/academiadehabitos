import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="cabecalho">
          <img src="logo.png" alt="Academia de Hábitos" className="logo" />
        <div className="titulo">
          <h1>Crie rotinas, Conquiste o futuro!</h1>
        </div>
        <nav className="nav">
          <div>
            <ul className="nav-list">
              <li><a href="#home">Início</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
          <div>
            <button className='nav-botoes'>Login</button>
            <button className='nav-botoes'>Criar Conta</button>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;