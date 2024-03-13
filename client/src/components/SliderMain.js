import React, { useEffect, useState } from 'react'
import Frist from '../img/1.jpg';
import axios from 'axios';
const SliderMain = () => {
    const [slider, setSlider] = useState([]);

    const getSlider = async () => {
        try {
            const { data } = await axios.get('/api/v1/slider/get-slider');
            if (data.success) {
                setSlider(data.results)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSlider();
    }, []);
    return (
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    {slider.map((sli, i) => (
                        <div class="carousel-item active">
                            <img src={Frist} class="d-block w-100" alt="..." />
                        </div>

                    ))}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            )
}

            export default SliderMain
