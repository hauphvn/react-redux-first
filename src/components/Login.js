import {useState} from "react";

function Login({login}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <form onSubmit={() => login({email, password})}>
            <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type={'email'}
                placeholder={'Your email'}
                type="text"
            />
            <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder={'Your password'}
                type="password"
            />
            <button type={"submit"}>Login</button>
        </form>
    )
}
export default Login
