import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup,
 GoogleAuthProvider } from "firebase/auth";

 // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCujvWGHPIxoUF2yUtiLEU1faSJlmV4cS0",
    authDomain: "ginkgo-127db.firebaseapp.com",
    projectId: "ginkgo-127db",
    storageBucket: "ginkgo-127db.appspot.com",
    messagingSenderId: "316377696485",
    appId: "1:316377696485:web:86d54811828198de672c0c"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
  }
  export function signOut(): void {
  auth.signOut();
  }