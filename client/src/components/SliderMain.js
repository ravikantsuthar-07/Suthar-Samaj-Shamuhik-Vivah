import React from 'react'
import Frist from '../img/1.jpg';
const SliderMain = () => {
    return (
        <section id="slider">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Frist} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Frist} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Frist} className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SliderMain
