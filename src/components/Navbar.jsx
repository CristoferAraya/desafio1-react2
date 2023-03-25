import { Link } from "react-router-dom"

export default () => {
    return(
        <div id="navbar" className="bg-danger text-light">
            <div id="navbar_1" className="ms-3">
                <Link to="" className="text-decoration-none text-white">🏠 Home</Link>
                <Link to="/contact" className="text-decoration-none text-white ms-2">📒 Contacto</Link>                
            </div>
            <div id="navbar_2" className="me-3">
                <h5>Happy Cake 🍰</h5>
            </div>            
        </div>
    )
}