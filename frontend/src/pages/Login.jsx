import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // lógica de login
    navigate('/dashboard');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Login</h1>
      <input type="email" placeholder="Email" /><br />
      <input type="password" placeholder="Senha" /><br />
      <button onClick={handleLogin}>Entrar</button>
      <p>
        Não tem conta? <Link to="/cadastro">Cadastre-se</Link>
      </p>
    </div>
  );
}

export default Login;
