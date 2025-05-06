import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      <div className="card">
        <img src="/logo_cps55.png" alt="logos" className="logos" />

        <h2>{isLogin ? 'Fazer login em uma conta da EteConnect' : 'Criar uma conta do EteConnect'}</h2>

        <input type="email" placeholder="Email Institucional" />
        <input type="password" placeholder="Senha" />

        {!isLogin && <input type="password" placeholder="Confirme a senha" />}

        {isLogin && <a href="#">Esqueci minha senha</a>}

        <div className="button-group">
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Não tenho conta' : 'Já tenho conta'}
          </button>
          <button className="primary">
            {isLogin ? 'Fazer Login' : 'Fazer Cadastro'}
          </button>
        </div>
      </div>
      <button className="darkmode">🌙 Modo Escuro</button>
    </div>
  );
}

export default App;
