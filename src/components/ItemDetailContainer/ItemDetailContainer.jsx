import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { getProducto } from '../../firebase/firebase'
export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const {id}= useParams()
    useEffect(() => {
        getProducto(id)
        .then(item => {
            setProducto(item)
        })
    }, [])
    return (
        <div className='pt-5 pb-5 container alturaMinCat'>
            <ItemDetail item={producto}/>
        </div>
    )
}