import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import './login.css';
import { toast } from 'react-toastify';
import {auth} from './../../firebaseConnection';
import { useNavigate } from "react-router-dom";


function Login() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const navegar = useNavigate();
  async function fazerLogin() {
    if (!loginEmail || !loginPassword) {
      toast.error("Preencha todos os campos!");
      return;
    }
    
    await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((user) => {
        console.log(user);
        toast.success("Usuário logado com sucesso");
        navegar("/home");
      })
      .catch((e) => {
        toast.error("Algo deu errado");
        console.log(e);
      });
  }

  async function criarConta() {
    if (!registerEmail || !registerPassword) {
      toast.error("Preencha todos os campos!");
      return;
    }
 
    await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((user) => {
        toast.success("Usuário foi criado com sucesso");
        console.log(user);
      })
      .catch((e) => {
        toast.error("Algo deu errado");
        console.log(e);
      });
  }

  return (
    <div className="principal">
      <div className="login">
        <h1>Login</h1>
        <label>Email</label>
        <input
          type="email"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <label>Senha</label>
        <input
          type="password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button onClick={fazerLogin}>Logar</button>
      </div>


      <div className="login">
        <h1>Cadastrar</h1>
        <label>Email</label>
        <input
          type="email"
          value={registerEmail}
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
        <label>Senha</label>
        <input
          type="password"
          value={registerPassword}
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button onClick={criarConta}>Cadastrar</button>
      </div>
    </div>
  );
}

export default Login;
