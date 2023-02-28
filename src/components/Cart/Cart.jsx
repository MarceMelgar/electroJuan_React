import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
import { useCarritoContext } from "../../context/CarritoContext"
export const Cart = () => {
    const {carrito, totalPrice, emptyCart} = useCarritoContext() 

    return(
        <>
            { carrito.length === 0 
                ? 
                <>
                    <div className="alturaMinCat vacio m-4 gap-4">
                        <div>
                            <h2>El está carrito vacío 🤷🏻‍♂️</h2>
                        </div>
                        <div>
                            <Link className="nav-link" to={'/'}><button className="btn cardBtn">Volver a la tienda</button></Link>
                        </div>
                    </div>
                </>
                : 
                <div className="container alturaMinCat mt-4 mb-4">
                    <div>
                        {<ItemList products={carrito} plantilla={'ItemCart'}/>}
                    </div>
                    <div>
                        <div className="d-flex">
                            <div className="container">                            
                                <button className="btn btn-danger" onClick={() => emptyCart()}>Vaciar carrito</button>
                            </div>
                            <div className="container col-md-4 resumenCompraCarrito">                            
                                <h5>Resumen de la compra: $ {new Intl.NumberFormat('de-DE').format(totalPrice())}</h5>
                            </div>
                        </div>
                        <div className="seguirFinalizar">
                            <Link className="nav-link" to={'/'}><button className="btn btn-dark">Seguir comprando</button></Link> 
                            <Link className="nav-link" to={'/checkout'}><button className="btn btn-dark">Finalizar compra</button></Link> 
                        </div>        
                    </div>
                </div>
            }
        </>
    ) 
}