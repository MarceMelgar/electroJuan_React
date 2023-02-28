import { useCarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import  React  from "react"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import { createOrdenCompra, getProducto, updateProducto } from "../../firebase/firebase"
import { useState } from "react"
import Swal from "sweetalert2"
import confetti from "canvas-confetti"
import { ItemList } from "../ItemList/ItemList"

export const Checkout = () => {
    const { carrito, totalPrice, emptyCart } = useCarritoContext()
    const datosFormulario = React.useRef()
    let navigate = useNavigate()
    const [ Email, setEmail ] = useState("")                       
    const [ repEmail, setRepEmail ] = useState("") 
    const [ errorEmail, setErrorEmail ] = useState(true)     
    const consultarFormulario = (e) => {
        e.preventDefault()
        const showAlert = () => {   // SweetAlert para agradecer tras crear una orden de compra
            Swal.fire({
                icon: "success",
                title: "⚡️ Muchas gracias por comprar en electroJuan ⚡️",
                text: "Para hacer un seguimiento más directo de tu pedido haz clic en el botón de WhatsApp, o si lo prefieres clic en la 'x' para continuar navegando.",
                confirmButtonText: 'Ir a WhatsApp',
                showCloseButton: true,
                confirmButtonColor: "#4FC55C",
            }).then((result) => {               // Redireccionar al usuario
                if(result.isConfirmed) {
                    window.location.href = "https://wa.me/59899163614";
                }
            });
        }

        if (errorEmail === true) {
            const datForm = new FormData(datosFormulario.current)
            const cliente = Object.fromEntries(datForm)
            const aux = [...carrito]

            aux.forEach(prodCarrito => {
                getProducto(prodCarrito.id).then(prodBDD => { // a través del id del producto en carrito estoy consultando el producto en la BDD
                    prodBDD.stock -= prodCarrito.cant // descuenta del stock de la cantidad comprada
                    updateProducto(prodCarrito.id, prodBDD)
                })
            })

            createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra => {
                toast.success(`Se generó el ticket de compra con ID: ${ordenCompra.id}`)
                emptyCart()
                e.target.reset()
                navigate("/")
                showAlert()
                confetti({
                    particleCount: 200,
                })
            })
        }
    }

    return(
        <>
            {carrito.length === 0 
                ?
                <>
                    <div className="alturaMinCat vacio m-4 gap-4">
                        <h2>No hay productos en el carrito</h2>
                        <Link className="nav-link" to={'/'}><button className="btn cardBtn">Volver a página principal</button></Link>
                    </div>
                </>
                :
                <div className="container gridCheckout alturaMinCat mt-4 mb-4">
                    <div className="flexDatosCheckout">
                        <h4 className="row justify-content-center">Tus datos</h4>
                        <form onSubmit={consultarFormulario} ref={datosFormulario}> 
                            <div className="row justify-content-center">
                                <div className="mb-4 col-4">
                                    <label htmlFor="nombre" className="form-label">Nombre</label>
                                    <input type="text" placeholder="Ejem: Homero" className="form-control" name="nombre" pattern="^[a-zA-Z]+" minlength="3" maxlength="20" required autocomplete="off"/>
                                </div>
                                <div className="mb-4 col-4">
                                    <label htmlFor="nombre" className="form-label">Apellido</label>
                                    <input type="text" placeholder="Ejem: Tompson" className="form-control" name="nombre" pattern="^[a-zA-Z]+"  minlength="3" maxlength="20" required autocomplete="off"/>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="mb-3 col-4">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" placeholder="El que más te guste ;)" className="form-control" name="email" required pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}" autocomplete="off" onChange={(e)=> {                    
                                        setEmail(e.target.value)
                                        if (e.target.value === repEmail){
                                            setErrorEmail(true)
                                        }
                                        else{
                                            setErrorEmail(false)
                                        }     
                                        }}/>
                                </div>
                                <div className="mb-3 col-4">
                                    <label htmlFor="repEmail" className="form-label">Repetir Email</label>
                                    <input type="email" placeholder="Repitelo por favor" className="form-control" name="repEmail" autocomplete="off" required pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}" onChange={(e)=>{  
                                        setRepEmail(e.target.value)   
                                        if (e.target.value === Email){
                                            setErrorEmail(true)
                                        }    
                                        else{
                                            setErrorEmail(false)
                                        }               
                                    }}/>
                                    <p style={{display: errorEmail === false? 'block' : 'none'}} className="errorEmails">*Los emails ingresados deben ser iguales</p>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="mb-3 col-4">
                                    <label htmlFor="teléfono" className="form-label">Número de teléfono</label>
                                    <input type="tel" placeholder="Ejem: 24024875" className="form-control" name="teléfono" pattern="^[0-9]+" minlength="8" maxlength="14" required autocomplete="off"/>
                                </div>
                                <div className="mb-3 col-4">
                                    <label htmlFor="direccion" className="form-label">Dirección</label>
                                    <input type="text" placeholder="Ejem: Lago del terror 1243" className="form-control" name="direccion" minlength="7" maxlength="30" required autocomplete="off"/>
                                </div>
                            </div>
                            <div className="row justify-content-center mt-5">
                                    <button type="submit" className="btn cardBtn col-3">Finalizar compra</button>
                            </div>
                        </form>
                    </div>
                    <div className="flexCarritoEnCheckout">
                        <h4 className="d-flex justify-content-center">Tu carrito</h4>
                        <div className="estiloCarritoEnCheckout bg-light">    
                            <ItemList products={carrito} plantilla={'ItemCheckout'}/>                      
                        </div>
                        <div className="aPagar">    
                            <h5>Total a pagar: $ {new Intl.NumberFormat('de-DE').format(totalPrice())}</h5>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
