export default() => {
    return(
        <div id="section_form" className="form-control" >
            <h1 className="text-center my-2">Cuéntanos, ¿en qué te podemos ayudar?</h1>
            <label className="my-3">Correo</label>
            <input className="form-control" placeholder="name@example.com"></input>
            <label className="my-3">Descripción</label>
            <textarea className="form-control"></textarea>
            <div className="text-center my-4">
                <button className="btn btn-danger">Enviar</button>
            </div>
            
        </div>
    )
}