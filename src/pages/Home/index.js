import { getAuth,setPersistence,signInWithEmailAndPassword,browserSessionPersistence } from "firebase/auth";
import { useState,useEffect } from "react";
function Home() {
    const {email,setEmail} = useState();

    useEffect(()=>{
        const auth = getAuth();
        setPersistence(auth, browserSessionPersistence)
        .then(() => {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        setEmail(email);
        return signInWithEmailAndPassword(auth, email);
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage);
        });
    },[])

    return(
        <div>
            ola 
            <p>Seu email: {email}</p>
        </div>
    )
}

export default Home;