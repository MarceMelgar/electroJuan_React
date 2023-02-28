import { useState } from 'react'
import { toast } from 'react-toastify'
export const ItemCountCartEnCart = ({valInicial, stock, onAdd}) => {

    const [contador, setContador] = useState(valInicial)

    const sumar = () => (contador < stock) && (setContador (contador + 1))
    const restar = () => (contador > 1) && (setContador (contador - 1))

    const agregarAlCarrito = () => {
        onAdd(contador)
        toast('Cantidad actualizada', {
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
        <div className="itemCountEnCart">
            <h6>Cantidad:</h6>
            <div className='d-flex justify-content-center align-items-center gap-2'>    
                <button className="btn btn-dark" onClick={() => restar()}>-</button>
                    {contador}
                <button className="btn btn-dark" onClick={() => sumar()}>+</button>
            </div>
            <div>
                <button className="btn cardBtn" onClick={() => agregarAlCarrito()}>Actualizar</button>
            </div>
        </div>
    );
}