import { useEffect, useState } from "react";
import Auth from './session/Auth';
import Home from "./pages/Home";
import About from "./pages/About";
import AppNavbar from "./AppNavbar";

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

    useEffect(() => {
      console.log(appData);
    }, [appData]);
    

    function renderNav(){
        if(appData.auth.isAuthenticated) return <AppNavbar />;
    }

    function renderPage(){
        switch (appData.activePage) {
            case 'auth':
                return <Auth appData={appData} setAppData={setAppData} />;
                break;
            case 'home':
                return <Home appData={appData} setAppData={setAppData} />;
                break;
    
            case 'about':
                return <About appData={appData} setAppData={setAppData}/>;
                break;
            default:
                break;
        }
    }
    

    return(
        <div>
            {renderNav()}
            {renderPage()}
        </div>
    );
}