import { Link } from "react-router-dom"
export const Item = ({item}) => {
    return (
        <div className="card mb-3 cardProducto border-light gap-1">
            <img src={item.imagen} className="card-img-top" alt={`Imagen de ${item.nombre}`}/>
            <div className="card-body cardBody">
                <h5 className="card-title">{item.nombre}</h5>
                <div className="card-gap">
                    <p className="card-text">$ {new Intl.NumberFormat ('de-DE').format(item.precio)}</p>
                    <Link className="btn cardBtn" to={`/item/${item.id}`}>Ver más</Link>
                </div>
            </div>
        </div>
    );
}