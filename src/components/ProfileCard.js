import { Link } from "react-router-dom";

function ProfileCard({title,img,alt, id}){
    const link = "/item/"+id
    
    return (
        <div className="card">
            <div className="card-img">
                <figure className="image is-3by4">
                    <img src={img} alt={alt} height={100}/>
                </figure>
            </div>
            <div className="card-content is-flex is-flex-direction-column">
                <div className="media-content"> 
                    <div className="is-flex is-justify-content-center title is-5">{title}</div>
                </div>
                <div className="is-flex is-justify-content-center pt-4">
                    <Link to={link}>
                         Detalle
                    </Link>
                </div>
            </div>          
        </div>

    )

}



export default ProfileCard;