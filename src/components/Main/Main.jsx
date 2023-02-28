import { ItemListContainer } from "../ItemListContainer/ItemListContainer"
import HeroSection from "../HeroSection/HeroSection"
const Main = ({personalizar}) => {
    return (
        <>
            <HeroSection mensaje={personalizar}/>
            <ItemListContainer/>
        </>
    )
}
export default Main