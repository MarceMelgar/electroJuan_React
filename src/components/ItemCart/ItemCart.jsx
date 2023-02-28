import { useCarritoContext } from "../../context/CarritoContext"
import { ItemCountCartEnCart } from "../ItemCountEnCart/ItemCountEnCart"
export const ItemCart = ({item}) => {
    const { removeItem, addItem } = useCarritoContext()

    const onAdd = (cantidad) => { 
        addItem(item, cantidad)
    }

    return (
        <div className="productoEnCarrito mb-4 mt-4">
            <div className="eliminarDelCarrito">                
                <button className="btn btn-danger" onClick={() => removeItem(item.id)}><i class="fas fa-trash-alt"></i></button>
            </div>
            <div className="carritoImagen">
                <img src={item.imagen} alt={`Imagen de producto ${item.nombre}`} className="img-fluid rounded-start" />
            </div>
            <div><h5 className="carritoTitulo">{item.nombre}</h5></div>
            {/* <div>    
                <h5 className="carritoTitulo">Cantidad: {item.cant}</h5>    
            </div> */}
            <ItemCountCartEnCart valInicial={item.cant} stock={item.stock} onAdd={onAdd}/> 
            <div><h5 className="carritoPrecio">Precio Unitario: $ {new Intl.NumberFormat('de-DE').format(item.precio)}</h5></div>
            <div><h5 className="carritoSubtotal">Subtotal: $ {new Intl.NumberFormat('de-DE').format(item.precio * item.cant)}</h5></div>
        </div>
    )
}