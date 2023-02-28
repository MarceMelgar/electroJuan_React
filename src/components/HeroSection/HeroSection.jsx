import Slider01 from "../../assets/slider01.jpg"
import Slider02 from "../../assets/slider02.jpg"
import Slider03 from "../../assets/slider03.jpg"

const HeroSection =({mensaje}) => {
    return (
        <>
            <div className="slider-block">
                <div className="row">
                    <div className="col-md-12">
                        <div className="carousel slide slider" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={Slider01} className alt="imagen slider sobre materiales eléctricos" />
                                </div>
                                <div className="carousel-item">
                                    <img src={Slider02} className alt="imagen slider sobre iluminación" />
                                </div>
                                <div className="carousel-item">
                                    <img src={Slider03} className alt="imagen slider sobre herramientas y ferretería" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="h1-home">{mensaje}</h1>
        </>
    );
}

export default HeroSection;
