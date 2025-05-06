import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const handleRegister = () => {
    // Você pode adicionar lógica de validação ou salvar os dados
    // Por enquanto, apenas navega para a "home"
    navigate('/dashboard');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Cadastro</h1>
      <input type="text" placeholder="Nome completo" /><br />
      <input type="email" placeholder="Email" /><br />
      <input type="password" placeholder="Senha" /><br />
      <button onClick={handleRegister}>Cadastrar</button>
      <p>
        Já tem conta? <Link to="/">Entrar</Link>
      </p>
    </div>
  );
}

export default Register;
