import { useState } from 'react'
import './login.css'
import axios from 'axios';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = (e) => {
        e.preventDefault();
        const data = { username, password };

        axios.post("http://localhost:90/userLogin", data)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                window.location.href = '/stocks'
            }).catch(err => {
                console.log(err)
            });
    }
    return (
        <div class="login-form">
            <form action="" onSubmit={login}>
                <h2 class="text-center">Log in</h2>
                <div class="form-group">
                    <input type="text" class="form-control" value={username}
                        onChange={(e) => setUsername(e.target.value)} placeholder="Username" required="required" />
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" value={password}
                        onChange={(e) => setPassword(e.target.value)} placeholder="Password" required="required" />
                </div>
                <br />
                <div class="form-group">
                    <button type='submit' class="btn btn-primary btn-block">Log in</button>
                </div>
            </form>
        </div>
    )
}