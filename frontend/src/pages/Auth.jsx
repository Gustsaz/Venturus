import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Aqui pode validar os campos, fazer login etc.
    // Vamos apenas navegar para o dashboard
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <div className="card">
        <img src="/logos.png" alt="logos" className="logos" />

        <h2>{isLogin ? 'Fazer login em uma conta da EteConnect' : 'Criar uma conta do EteConnect'}</h2>

        <input type="email" placeholder="Email Institucional" />
        <input type="password" placeholder="Senha" />

        {!isLogin && <input type="password" placeholder="Confirme a senha" />}

        {isLogin && <a href="#">Esqueci minha senha</a>}

        <div className="button-group">
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Não tenho conta' : 'Já tenho conta'}
          </button>
          <button className="primary" onClick={handleSubmit}>
            {isLogin ? 'Fazer Login' : 'Fazer Cadastro'}
          </button>
        </div>
      </div>
      <button className="darkmode">🌙 Modo Escuro</button>
    </div>
  );
}

export default Auth;
