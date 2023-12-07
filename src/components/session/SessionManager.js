import { useState } from "react"

export default function(){
    const[auth, setAuth] = useState({login: 'login', password: 'password', isAuth: false, lastAuth: 0});
}