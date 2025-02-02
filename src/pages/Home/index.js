import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [email, setEmail] = useState(); // Correção do useState
  const [nome, setNome] = useState();
  const navigate = useNavigate(); // Para redirecionar caso o usuário não esteja autenticado


  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email);
        console.log(email)
        if (typeof email !== "undefined"){
            console.log(`Unico:${email}`);
            let separando = email.split("@");
            let primeiroNome = separando[0];
            setNome(primeiroNome);
        }
      } else {
        navigate("/login");
      }
    });
    console.log(email);
  }, [email]);
  

  return (
    <div>
      <h1>Olá!</h1>
      {nome ? <p>Seu email: {nome}</p> : <p>Carregando...</p>}

    </div>
  );
}

export default Home;
