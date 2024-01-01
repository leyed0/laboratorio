import { useState } from "react";
import axios from "axios";

export default function ({setAuth, appData, setAppData}) {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [user, setUser] = useState(null);
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
      console.log(response.data);
      if (response.data.status === 'success') {
        setAppData(prevState => ({ ...prevState, auth: { ...prevState.auth, user:response.data.userData, isAuthenticated: true, lastAuth: new Date().toLocaleString() }, activePage: 'home' }));
      }
      else{
        console.log(response.data);
        console.log('API else');
      }
    } catch (error) {
      setMessage('Backend Error!');
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
                onChange={(e) =>  setPassword(e.target.value)} />
                {/* onChange={(e) =>  setAppData(prevState => ({ ...prevState, auth: { ...prevState.auth, uset: {...prevState.auth.user,login:`teste`, password:e.target.value}}}))} */}

          </div>
          <div className="mt-3 d-grid gap-2">
              <button disabled={login === '' || password===''} className="btn btn-primary" onClick={handleLogin}>Login</button>
              <button onClick={(e)=>setAuth("signup")} className="btn btn-secondary">Register</button>
          </div>
      </div>
  );
}