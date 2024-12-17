import { memo, useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app)

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log("User created successfully!");
                alert('User created successfully!')
            })
            .catch((error) => {
                console.error("Error creating user:", error);
                alert(`Error: ${error.message}`)
            });
    }

    return (
        <div className="signup-page">
            <h1>Signup Page</h1>
            <label>Email</label>
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" required placeholder="enter your email" />
            <label>Password</label>
            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" required placeholder="enter your password" />
            <button onClick={createUser}>Signup</button>
        </div>
    )
}

export default memo(Signup)