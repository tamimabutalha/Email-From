
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import './App.css'
import { auth } from './Firebase/firebase.init';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null)
  const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then(result => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch(error => console.log('ERROR', error))

  }

  return (
    <>

      <h1>Hard firebase work in Started</h1>
      <button onClick={handleGoogleSignIn}>Login With Google</button>

      {
        user && <div>
          <h3>User: {user.displayName
          }</h3>
          <p>Email: {user.email}</p>
          <img src={user.photoURL
          } alt="" />
        </div>
      }
    </>
  )
}

export default App
