
export default function({appData, setAppData}){
    return(
        <div>
            AboutPage
            <div>
                <button onClickCapture={setAppData({...appData, activePage: 'home'})}>clicks</button>
            </div>
        </div>
    );
}