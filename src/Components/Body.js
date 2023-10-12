function Body({nombre,palab}){
    return(
        <div className="App-body">
            <h1>{nombre}</h1>
            {palab.map(p=><h1>{p.palabra}{p.definicion}</h1>)}
        </div>
    )
}


export default Body