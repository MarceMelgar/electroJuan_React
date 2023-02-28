import { Item } from "../Item/Item"
import { ItemCart } from "../ItemCart/ItemCart"
import { ItemCheckout } from "../ItemCheckout/ItemCheckout";
export const ItemList = ({products, plantilla}) => {
    return (
        <>
            {
                plantilla === 'item' ? products.map(producto => <Item item={producto} key={producto.id}/>)
                    : plantilla === 'ItemCart' ? products.map(producto => <ItemCart item={producto} key={producto.id}/>)
                        : plantilla === 'ItemCheckout' && products.map(producto => <ItemCheckout item={producto} key={producto.id}/>)
                        
            } 
        </>
    )
} 

