import { getDatabase, ref, set } from 'firebase/database'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from './firebase'
import Signup from './pages/Signup';
import { memo } from 'react';
import Signin from './pages/Signin';

const db = getDatabase(app);
const auth = getAuth(app)

function App() {

  const putData = () => {
    set(ref(db, 'users/nikhil'), {
      id: 1,
      name: "Nikhileswar",
      age: 21
    })
  }

  const signupUser = () => {
    createUserWithEmailAndPassword(auth, '1628914nikhil@gmail.com', 'Pillow_1141')
      .then((value) => console.log(value))
  }

  return (
    <div>
      <h1>Firebase app</h1>
      <button onClick={putData}>Put data</button>
      <button onClick={signupUser}>Create data</button>
      <Signup />
      <Signin />
    </div>
  )
}

export default memo(App)
