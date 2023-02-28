import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CarritoContext";
const CartWidget = () => {
    const {getItemQuantity} = useCarritoContext()
    
    return (
        <div>
            <Link className="carrito" to={'/cart'}>
                <i className="fas fa-shopping-cart"></i>    
                { getItemQuantity() > 0 && <span className="numerito">{getItemQuantity()}</span> }        
            </Link>    
        </div>
    );
}

export default CartWidget;
