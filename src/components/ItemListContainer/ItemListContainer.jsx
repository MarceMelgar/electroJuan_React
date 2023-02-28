import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// Componentes
import { ItemList } from '../ItemList/ItemList'

//Firebase
import { getProductos } from '../../firebase/firebase'

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {nameCategory}= useParams()
    useEffect(() => {
        if(nameCategory) {
            getProductos()
            .then(items => {
                const products = items.filter(prod => prod.stock > 0).filter(prod => prod.categoria === (nameCategory))
                const productsList = <ItemList products={products} plantilla={'item'}/>
                setProductos(productsList)
            })
        } else
            getProductos()
            .then(items => {
                const products = items.filter(prod => prod.stock > 0)
                const productsList = <ItemList products={products} plantilla={'item'}/> 
                setProductos(productsList)
            })
    }, [nameCategory])
    
    return (
            <div className="row contenedorProductos mb-4 mt-4">
                {productos}
            </div>
    )
}