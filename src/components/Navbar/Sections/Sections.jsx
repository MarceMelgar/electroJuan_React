import { Link } from "react-router-dom";
import iconoFB from "../../../assets/iconoWA.png"
const Sections = () => {
    return (
        <>
            <Link to={"https://wa.me/59899163614"} target="_blank"><img src={iconoFB} className="iconoWA" alt="icono de WA"></img>
            </Link>
        </>
    );
}

export default Sections;