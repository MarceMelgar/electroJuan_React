import {ItemCount} from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useCarritoContext } from '../../context/CarritoContext'
export const ItemDetail = ({item}) => {
    const { addItem } = useCarritoContext()
    
    const onAdd = (cantidad) => { 
        addItem(item, cantidad)
    }
    
    return (
        <>
            <div className='gridItemDetail alturaMinCat'>
                <div className='ficha_acciones_outs'>
                        <Link to={"/"} >
                            <button className='btn btn-dark'>
                                <div className='d-flex justify-content-center align-items-center gap-2'>
                                <i className="fas fa-arrow-left"/>
                                Volver a la tienda    
                                </div>
                            </button>
                        </Link>   
                        <Link to={"/cart"} >
                            <button className='btn btn-dark'>
                            <div className='d-flex justify-content-center align-items-center gap-2'>
                                <i className='fas fa-shopping-cart'/> 
                                Ir al carrito
                            </div>
                            </button>
                        </Link>
                </div>
                <div>
                    <img src={item.imagen} className="w-100 p-5" alt={`Imagen de ${item.nombre}`} />
                </div>
                <div className='infoItemDetail'>  
                    <div className="alineadoVertical">
                        <h4 className='card-title'>{item.nombre}</h4>
                        <p className='card-text'>{item.descripcion}</p>
                        <h5 className='card-text'>Precio: ${new Intl.NumberFormat('de-DE').format(item.precio)}</h5>
                    </div>
                    <div className='container'>    
                        <div className='sombra_agregar_cart_carrito'>    
                            <p className='card-text'>Quedan en stock: {item.stock}</p>
                            <div className='itemCount'>
                                <ItemCount valInicial={1} stock={item.stock} precioUni={item.precio} onAdd={onAdd}/>
                            </div>
                        </div>                          
                    </div>
                </div>
            </div>
        </>
    )
}