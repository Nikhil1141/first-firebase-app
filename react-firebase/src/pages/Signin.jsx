import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { memo, useState } from 'react'
import { app } from '../firebase'

const auth = getAuth(app)

const Signin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signinUser = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => alert('success login'))
            .catch(() => alert('user does not exist'))
    }

    return (
        <div>
            <h1>Signin Page</h1>
            <label>Email</label>
            <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder='enter your email' />
            <label>Password</label>
            <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder='enter your password' />
            <button onClick={signinUser}>Sign In</button>
        </div>
    )
}

export default memo(Signin)