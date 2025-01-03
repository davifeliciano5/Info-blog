import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAL_dUB5U1w5TrYbwmwfJ07URBcrb_a0I8",
  authDomain: "blog-2f40e.firebaseapp.com",
  projectId: "blog-2f40e",
  storageBucket: "blog-2f40e.firebasestorage.app",
  messagingSenderId: "672646729079",
  appId: "1:672646729079:web:655f46acb4046c9fa8e572",
  measurementId: "G-QZY3RBDM60"
};

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
   

  export   {auth };
