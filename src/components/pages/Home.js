import { useState} from "react";

export default function({appData, setAppData}){
    const[test, setTest] = useState(0);

    return(
        <div>
            Home Page
            <button onClick={setAppData({...appData, activePage: 'about'})}>clicks</button>
        </div>
    )
}