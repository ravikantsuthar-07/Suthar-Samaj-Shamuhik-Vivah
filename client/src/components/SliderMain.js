import React, { useEffect, useState } from 'react'
import axios from 'axios';
const SliderMain = () => {
    const [slider, setSlider] = useState([]);

    const getSlider = async () => {
        try {
            const { data } = await axios.get('/api/v1/slider/get-slider');
            if (data?.success) {
                setSlider(data?.results)
            }
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }

    useEffect(() => {
        getSlider();
    }, []);

    return (
        <div id="carouselExample" className="carousel slide" style={{marginTop: '135px'}}>
            <div className="carousel-inner">

                {slider.map((sli, i) => (
                    <div className={i === 0 ? "carousel-item active" : "carousel-item"} key={i}>
                        <img src={`/static/sliders/${sli.path}`} className="d-block w-100" alt='Sliders' />
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default SliderMain
