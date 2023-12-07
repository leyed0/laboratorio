import { useState } from "react";
import axios from "axios";

export default function ({setAuth}) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [user, setUser] = useState(null); // Track user data
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  // if (window.location.hostname === "smkassist.com.br") {

  const handleLogin = async () => {
    const backendURL = (window.location.hostname==="smkassist.com.br"?'https://smkassist.com.br/app/DB/index.php':'http://backend/index.php');
    try {
      const response = await axios.post(backendURL, {
        
        action: 'login',
        username: username,
        password: password,
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
          <h3 className="Auth-form-title">Login</h3>
          <div className="mt-3">
              <label htmlFor="login">Login: </label>
              <input 
                id="login" 
                type="text" 
                placeholder="Login" 
                className="form-control mt" 
                onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="mt-3">
              <label htmlFor="password">Password: </label>
              <input 
                id="password" 
                type="password" 
                placeholder="Password" 
                className="form-control mt" 
                onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="mt-3 d-grid gap-2">
              <button disabled={username === '' || password===''} className="btn btn-primary" onClick={handleLogin}>Login</button>
              <button onClick={(e)=>setAuth("signup")} className="btn btn-secondary">Register</button>
          </div>
      </div>
      
  );
}