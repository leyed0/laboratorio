import { useEffect, useState } from "react";
import Auth from './session/Auth';
import Home from "./pages/Home";
import About from "./pages/About";
import AppNavbar from "./AppNavbar";
import Profile from "./pages/Profile";

export default function(){

    const PERMISSIONS = {
        SEE_USERS: 1, EDIT_USERS_INFO: 2, EDIT_USERS_PASSWORD: 4
    }

    const[appData, setAppData] = useState({
        auth: {
            user:{
                ID:'',
                Login:'',
                Senha:'',
                Nome:'',
                CPF:'',
                Genero:'',
                Email:'',
                Telefone:'',
                Nascimento:'',
                Endereco:'',
                Criado:'',
                UltLogin:'',
                Desde:'',
                Permissoes:'',
            },
            isAuthenticated:false,
        },
        activePage:'auth',
        isLoading:false,
        notifications :'',
        errors : '',
        theme : '',
        }
    );

    useEffect(() => {
      console.log(['Effect: ', appData]);
    }, [appData]);

    function renderNav(){
        if(appData.auth.isAuthenticated) return <AppNavbar appData={appData} setAppData={setAppData} />;
    }

    function renderPage(){
        const testesss = PERMISSIONS.EDIT_USERS_INFO | PERMISSIONS.EDIT_USERS_PASSWORD;
        switch (appData.activePage) {
            case 'auth':
                return <Auth appData={appData} setAppData={setAppData} />;
                break;
            case 'home':
                return <Home appData={appData} setAppData={setAppData} />;
                break;
            case 'home':
                return <Profile appData={appData} setAppData={setAppData} />;
                break;
            case 'profile':
                return <Profile appData={appData} setAppData={setAppData} />;
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