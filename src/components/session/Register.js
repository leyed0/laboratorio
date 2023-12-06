import { useState } from "react";
import axios from "axios";

export default function ({setAuth}){

    const [email, setEmail] = useState(''); // Track user data
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async () => {
        console.log('handle');
        try {
          const response = await axios.post('http://backend/index.php', {
            action: 'register',
            username: login,
            password: password,
            email:email,
          });
          console.log(response.data);
          setMessage(response.data.message );
        } catch (error) {
          console.log('catch');
          setMessage('Login failed');
        }
      };

    return(
        <div>
            <h3 className="Auth-form-title">Register</h3>
            
            <div className="mt-3">
                <label htmlFor="Email">Email: </label>
                <input 
                    type="email" 
                    placeholder="Email" 
                    id="Email" 
                    className="form-control mt" 
                    autoComplete="email" 
                    onChange={e=>setEmail(e.target.value)}/>
            </div>
            
            <div className="mt-3">
                <label htmlFor="login">Login: </label>
                <input 
                    type="text" 
                    placeholder="Login" 
                    id="login" 
                    className="form-control mt" 
                    autoComplete="login" 
                    onChange={e=>setLogin(e.target.value)}/>
            </div>

            <div className="mt-3">
                <label htmlFor="password">Password: </label>
                <input 
                    id="password" 
                    type="password" 
                    placeholder="Password" 
                    className="form-control mt" 
                    autoComplete="current-password" 
                    onChange={e=>setPassword(e.target.value)}/>
            </div>

            <div className="mt-3 gap-2 d-grid">
                <button className="btn btn-primary" onClick={handleRegister}>Register</button>
                <button onClick={(e)=>setAuth("signin")} className="btn btn-secondary">Cancel</button>
            </div>
        </div>
    )
}