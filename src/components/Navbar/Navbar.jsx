import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/logo.png";
import Sections from "./Sections/Sections";
import Categories from "./Categories/Categories";
import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CarritoContext";

const Navbar = () => {
    const {getItemQuantity} = useCarritoContext()

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container navbar-nav">
                <Link to={'/'}><img src={logo} alt="logo de la tienda"/></Link>
                <Categories/>
                <Sections/>
            </div>
            {getItemQuantity() > 0 && <CartWidget/>}
        </nav>  
    );
}
export default Navbar;

