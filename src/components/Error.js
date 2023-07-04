import { Link } from "react-router-dom";

function Error(){
    return(
        <div className="is-flex is-justify-content-center is-flex-direction-column is-align-content-center">
            <h1 className="title is-1">
                Error
            </h1>
            <Link to="/">
                <button className="button">
                    Volver
                </button>
            </Link>
        </div>
    )
}

export default Error;