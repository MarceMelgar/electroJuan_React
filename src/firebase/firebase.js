import { initializeApp } from "firebase/app";
import { getFirestore, doc, collection, addDoc, getDoc, getDocs, updateDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "curso-react-2023.firebaseapp.com",
    projectId: "curso-react-2023",
    storageBucket: "curso-react-2023.appspot.com",
    messagingSenderId: "244939253565",
    appId: "1:244939253565:web:9b7635cf1450f5735f0754",
    measurementId: "G-WS8CXEQD77"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

// CRUD de productos 

export const cargarBDD = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach( async (prod) => {
        await addDoc(collection(db,"productos"), {
            nombre: prod.nombre,
            categoria: prod.categoria,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            imagen: prod.imagen
        })
    })
}

export const getProductos = async() => {
    const productos = await getDocs(collection(db,"productos"))
    const items = productos.docs.map(prod => {
        return {...prod.data(), id: prod.id} //transformarlo en array
    }) 
    return items
}

export const getProducto = async(id) => {
    const producto = await getDoc(doc(db, "productos", id))
    const item = {...producto.data(), id: producto.id}
    return item
}

export const updateProducto = async(id, info) => {
    await updateDoc(doc(db, "productos", id), info)
}

/*
export const deleteDoc = async (id) => {
    await deleteDoc(doc(db, "producto", id))
}
*/

//Create orden Compra

export const createOrdenCompra = async(cliente, productos, precioTotal, fecha) => {
    const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
        datosCliente: cliente,
        productos: productos,
        precioTotal: precioTotal, 
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async(id) => {
    const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
    const orCompra = {...ordenCompra.data(), id: ordenCompra.id}
    return orCompra
}