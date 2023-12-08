import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';
import SessionManager from './components/SessionManager';
import AppNavbar from './components/AppNavbar';

<script src="https://kit.fontawesome.com/7c9047c404.js" crossorigin="anonymous"></script>

function App() {
  return (
    <div className="App">
      <SessionManager />
    </div>
  );
}

export default App;