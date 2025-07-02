
const rootElement= document.querySelector("#aroot");

const root= ReactDom.createRoot(rootElement);

const App=(props)=>{
    return(
        <main className="main">
            <h1>Primo componente</h1>
        </main>
    );
};

const List=()=>{
    return(
        <ul>
            <li>Php</li>
            <li>Js</li>
            <li>Python</li>
        </ul>
    );
};
root.render(
    <>
    <App>
        <h2>Lista Competenze</h2>
        <List></List>
    </App>
    </>
    
)