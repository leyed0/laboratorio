import { useEffect, useState } from "react";
import Auth from './session/Auth';
import Home from "./pages/Home";
import About from "./pages/About";

export default function(){
    const[appData, setAppData] = useState({
        auth: {
            user:{
                login:'',
                email:'',
                password:'',
                name:'',
                role:'',
            },
            isAuthenticated:false,
            lastAuth:0,
        },
        activePage:'auth',
        isLoading:false,
        notifications :'',
        errors : '',
        theme : '',
        }
    );

    console.log(appData);
    if(appData.activePage==='auth' || !appData.auth.isAuthenticated) return <Auth appData={appData} setAppData={setAppData} />
    
    switch (appData.activePage) {
        case 'home':
            return <Home appData={appData} setAppData={setAppData} />
            break;

        case 'about':
            return <About appData={appData} setAppData={setAppData}/>
            break;
        default:
            break;
    }

    

    return(
        <div>
            <h1>Manager</h1>
        </div>
    );
}