import { useState } from 'react'
import { toast } from 'react-toastify'
export const ItemCount = ({valInicial, stock, onAdd, precioUni}) => {
    const [contador, setContador] = useState(valInicial)
    const sumar = () => (contador < stock) && (setContador (contador + 1))
    const restar = () => (contador > valInicial) && (setContador (contador - 1))

    const agregarAlCarrito = () => {
        onAdd(contador)
        toast('Producto agregado al carrito', {
            position: "top-right",
            autoClose: 800,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }
    
    return (
        <div>
            <div className='agregarCount mb-3'>
                <div className='d-flex justify-content-center align-items-center gap-2'>
                    <button className="btn btn-dark" onClick={() => restar()}>-</button>
                        {contador}
                    <button className="btn btn-dark" onClick={() => sumar()}>+</button>
                </div>
                <div className='d-flex '>
                    <button className="btn cardBtn" onClick={() => agregarAlCarrito()}>Agregar al carrito</button>
                </div>
            </div>
            <div className='d-flex justify-content-center mt-3'>    
                <p style={{display: contador > 1 ? 'block' : 'none', fontStyle:"italic"}} >El valor final es : $<strong>{new Intl.NumberFormat('de-DE').format(contador*precioUni)}</strong></p>
            </div>
        </div>
    );
}