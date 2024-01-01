import axios from "axios";
export default function({appData, setAppData}){

    return(
        <div>
            <form>
                <img id="profile-User-Pic" src=".\logo512.png"></img>
                <div className="profile-Info">
                    <label htmlFor="profile-Login-Input">Login: </label>
                    <input 
                    id="profile-Login-Input" 
                    type="text"
                    defaultValue={appData.auth.user.Login} 
                    />
                </div>
                <div className="profile-Info">
                    <label htmlFor="profile-Password-Input">Senha: </label>
                    <input id="profile-Password-Input" type="password" />
                </div>
                <div className="profile-Info">
                    <label htmlFor="profile-Email-Input">Email: </label>
                    <input 
                    id="profile-Email-Input" 
                    type="email" 
                    defaultValue={appData.auth.user.Email} 
                    />
                </div>
                <div className="profile-Info">
                    <label htmlFor="profile-Name-Input">Nome: </label>
                    <input 
                    id="profile-Name-Input" 
                    type="text"
                    defaultValue={appData.auth.user.Nome} 
                    />
                </div>
                <div className="profile-Info">
                    <label htmlFor="profile-Gender-Input" >Genero: </label>
                    <input 
                    id="profile-Gender-Input" 
                    type="text" 
                    defaultValue={appData.auth.user.Genero} 
                    />
                </div>
                <div className="profile-Info">
                    <label htmlFor="profile-Pronouns-Input">Pronomes: </label>
                    <input id="profile-Pronouns-Input" type="text" />
                </div>
                <div className="profile-Info">
                    <label htmlFor="profile-Birthday-Input">Nascimento: </label>
                    <input 
                    id="profile-Birthday-Input" 
                    type="date" 
                    defaultValue={appData.auth.user.Nascimento} 
                    />
                </div>
                <div className="profile-Info">
                    <label htmlFor="profile-Phone-Input">Telefone: </label>
                    <input 
                    id="profile-Phone-Input" 
                    type="tel"
                    defaultValue={appData.auth.user.Telefone} 
                    />
                </div>
                <div className="profile-Info">
                    <label htmlFor="profile-Address-Input">Endereço: </label>
                    <input 
                    id="profile-Address-Input" 
                    type="text"
                    defaultValue={appData.auth.user.Endereço} 
                    />
                </div>
            </form>
                <div className="profile-Info">
                    <button>Alterar Dados</button>
                </div>
        </div>
    );
}