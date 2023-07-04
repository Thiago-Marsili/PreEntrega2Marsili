import data from "./cardlist.json"
import ProfileCard from "./ProfileCard"

function ShowCards({Catalogo}){{

    if (Catalogo !== ""){
        const dataf = data.filter(item => item.categoria.includes(Catalogo))
            return(
                <div className="container">
                    <section className="section">
                        <div className="columns">
                            {dataf.map(item => (
                                <div key={item.id} className="column is-3">
                                    <ProfileCard title={item.title} img={item.img} alt={item.alt} id={item.id}/>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            )
    }
    else{
        return(
            <div className="container">
                <section className="section">
                    <div className="columns">
                        {data.map(item => (
                            <div key={item.id} className="column">
                                <ProfileCard title={item.title} img={item.img} alt={item.alt} id={item.id}/>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        )
    }
}}

export default ShowCards