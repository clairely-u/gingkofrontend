import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import AuthContext from './context/AuthContext';
import { signInWithGoogle } from './firebaseConfig';

function App() {
  const {user} = useContext(AuthContext)
  return (
    <div className="App">

      { user ?
      <Main/>
       :
       <button id="indvNav" onClick={signInWithGoogle}>click here to sign in!</button>
      }

    </div>
  );
}

export default App;
