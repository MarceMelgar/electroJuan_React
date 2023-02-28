export const ItemCheckout = ({item}) => {    
    return(
        <div className="gridProductoEnCheckout mb-2">
            <div>
                <img className="checkoutImg " src={item.imagen} alt={`Imagen de producto ${item.nombre}`}/>
            </div>
            <div>
                <h5>{item.nombre}</h5>
                <h5>Cantidad: {item.cant}</h5>    
            </div>
        </div>
    )
}


