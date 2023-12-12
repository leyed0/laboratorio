
export default function({appData, setAppData}){

    return(
        <div>
            <form>
                <img id="profile-User-Pic" src="..\logo512.png"></img>
                <div className="profile-Info">
                    <label htmlFor="profile-Login-Input">Login: </label>
                    <input id="profile-Login-Input" type="text" />
                </div>
                <div className="profile-Info">
                    <label htmlFor="profile-Password-Input">Senha: </label>
                    <input id="profile-Password-Input" type="password" />
                </div>
                <div className="profile-Info">
                    <label htmlFor="profile-Email-Input">Email: </label>
                    <input id="profile-Email-Input" type="email" />
                </div>
                <div className="profile-Info">
                    <label htmlFor="profile-Name-Input">Nome: </label>
                    <input id="profile-Name-Input" type="text"/>
                </div>
                <div className="profile-Info">
                    <label htmlFor="profile-Gender-Input" >Genero: </label>
                    <input id="profile-Gender-Input" type="text" />
                </div>
                <div className="profile-Info">
                    <label htmlFor="profile-Pronouns-Input">Pronomes: </label>
                    <input id="profile-Pronouns-Input" type="text" />
                </div>
                <div className="profile-Info">
                    <label htmlFor="profile-Birthday-Input">Nascimento: </label>
                    <input id="profile-Birthday-Input" type="date" />
                </div>
                <div className="profile-Info">
                    <label htmlFor="profile-Phone-Input">Telefone: </label>
                    <input id="profile-Phone-Input" type="tel"/>
                </div>
                <div className="profile-Info">
                    <label htmlFor="profile-Address-Input">Endereço: </label>
                    <input id="profile-Address-Input" type="text"/>
                </div>
            </form>
        </div>
    );
}