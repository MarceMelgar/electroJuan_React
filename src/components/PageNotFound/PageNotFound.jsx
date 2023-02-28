import NotFound from "../../assets/404.jpeg"
import { Link } from "react-router-dom"
export const PageNotFound = () => {
    return (
            <div className="alturaMinCat vacio m-4 gap-4">
                <div className="flex404">
                    <img className="img404" src={NotFound} alt="imagen de lamparita rota por página 404 de error"></img>
                    <h2>ups... ¡se ha roto! 🤷🏻‍♂️</h2>
                    <p className="p404">Pero no te preocupes porque solo fue esta lamparita, la página está bien, solo que la url a la que accediste no existe. Haz clic en el botón de abajo para volver 👇</p>
                </div>
                <div>
                    <Link className="nav-link" to={'/'}><button className="btn cardBtn">Volver a la tienda</button></Link>
                </div>
            </div>
    )
}