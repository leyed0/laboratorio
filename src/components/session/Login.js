import { useState } from "react";
import axios from "axios";

export default function ({setAuth, appData, setAppData}) {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [user, setUser] = useState(null); // Track user data
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    const backendURL = (window.location.hostname==="smkassist.com.br"?'https://smkassist.com.br/app/DB/index.php':'http://backend/index.php');
    try {
      const response = await axios.post(backendURL, {
        
        action: 'login',
        login: login,
        password: password,
      });
      if (response.data.status === 'success') {
        setAppData({...appData,auth:{...appData.auth,isAuthenticated:true}, activePage: 'home'});
        console.log(appData.activePage);
      }
    } catch (error) {
      console.log('catch');
      setMessage('Login failed');
      console.log(error);
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
                onChange={(e) => setLogin(e.target.value)} />
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
              <button disabled={login === '' || password===''} className="btn btn-primary" onClick={handleLogin}>Login</button>
              <button onClick={(e)=>setAuth("signup")} className="btn btn-secondary">Register</button>
          </div>
      </div>
      
  );
}