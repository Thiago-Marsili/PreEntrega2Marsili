import data from './cardlist.json'
import {useState} from "react";


function ItemDetailContainer({idi}){

    const [count, setCount] = useState(0);

    function handleClickSuma(){
        setCount( count + 1);
    }
    function handleClickResta(){
        if(count > 0){
            setCount( count - 1);
        }
    }
    
    const dataf = data.filter(item => item.id.includes(idi))

    return(
        dataf.map(item =>(
            <div className="container is-flex is-justify-content-center">
                <section className="section">
                    <div className="columns">
                        <div className="column is-3">
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-4by5">
                                        <img src={item.img} alt={item.alt}/>
                                    </figure>
                                </div>
                                <div className="card-content is-flex is-justify-content-center">
                                    <div className="content">
                                        {item.description}
                                        <br/>
                                        <div className='is-flex is-justify-content-center pt-4'>
                                            {item.precio}
                                        </div>
                                        <span className='is-flex is-justify-content-center title is-1 pt-4'>{count}</span>
                                        <div className="columns pt-1">
                                            <div className="column is-flex is-justify-content-center">
                                                <button className="button is-primary is-fullwidth" onClick={handleClickSuma}>+</button>
                                            </div>
                                            <div className="column is-flex is-justify-content-center">
                                                <button className="button is-warning" >Agregar</button>
                                            </div>
                                            <div className="column is-flex is-justify-content-center">
                                                <button className="button is-danger is-fullwidth" onClick={handleClickResta}>-</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        ))
    )
}

export default ItemDetailContainer;