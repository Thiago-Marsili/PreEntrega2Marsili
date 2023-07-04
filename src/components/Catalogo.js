import { Link } from "react-router-dom";


function Catalogo(){
    return(
        <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-link">
                Categorias
            </Link>

            <div className="navbar-dropdown">
                <Link to="/categorias/1" className="navbar-item">
                  animada
                </Link>
                <Link to="/categorias/2" className="navbar-item">
                   accion
                </Link>
                <Link to="/categorias/3" className="navbar-item">
                   simulacion
                </Link>
                <Link to="/categorias/4" className="navbar-item">
                   comedia
                </Link>
            </div>
        </div>
    )
}

export default Catalogo;