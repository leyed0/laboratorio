import { useState } from "react"

export default function(){
    const[auth, setAuth] = useState({login: 'login', password: 'password'})
    const[isAuth, setIsAuth] = useState(false);
    const[lastAuth, setLastAuth] = useState(0);
}