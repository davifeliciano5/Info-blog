import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../firebaseConnection";

function Cria() {
  const [email, setEmail] = useState(); // Correção do useState
  const [nome, setNome] = useState();
  const [titulo, setTitulo] = useState();
  const [texto, setTexto] = useState();
  const [uid,setUid] = useState();
  const navigate = useNavigate(); // Para redirecionar caso o usuário não esteja autenticado


  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email);
        setUid(user.uid);
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
  
 async function CriarPost() {
  try {
    console.log("Deu certo")
    const docRef = await addDoc(collection(db,"users"),{
    Titulo:titulo,
    Texto:texto,
    Id:uid,
    });
  } catch (e) {
    console.log(e);
    };
  }
 

  return (
    <div>
      <h1>Olá!</h1>
      {nome ? <p>Seu email: {nome}</p> : <p>Carregando...</p>}

      <div>
        <label>Título</label>
        <input type="text" 
        value={titulo}
        onChange={(evento) => setTitulo(evento.target.value)}
        /> <br/><br/><br/><br/>

        <label>Texto</label>
        <input type="text"
        value={texto}
        onChange={(evento) => setTexto(evento.target.value)}
        />

        <button onClick={CriarPost}>Enviar</button>
      </div>
    </div>
  );
}

export default Cria;