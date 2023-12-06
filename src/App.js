import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';
import SessionManager from './components/session/SessionManager';
import AppNavbar from './components/AppNavbar';
import Auth from './components/session/Auth';
<script src="https://kit.fontawesome.com/7c9047c404.js" crossorigin="anonymous"></script>

function App() {

  const [session, setSession] = useState(false);
  return (
    <div className="App">
      <Auth />
      {/* <AppNavbar activePage={'teste'}/>
      <Login /> */}
    </div>
  );
}

export default App;