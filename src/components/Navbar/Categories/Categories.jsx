import { NavLink } from "react-router-dom";

const Categories = () => {
    return (
        <div>
            <li className="nav-item">
                <NavLink className="nav-link" to={`/category/materiales-electricos`}>Materiales Eléctricos</NavLink>
                <NavLink className="nav-link" to={`/category/iluminacion`}>Iluminación</NavLink>
                <NavLink className="nav-link" to={`/category/herramientas`}>Herramientas</NavLink>
            </li>
        </div>
    );
}
export default Categories;