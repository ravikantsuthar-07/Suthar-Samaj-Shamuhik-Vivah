import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactCardSlider from "react-card-slider-component";
import under from '../img/Under.png';

const Advertisement = () => {


    const [sliders, setSliders] = useState([]);

    const gettingAdvertisement = async () => {
        try {
            const { data } = await axios.get('/api/v1/advertisment/get');
            if (data?.success) {
                setSliders(data?.results);
            }
        } catch (error) {
            alert(error?.response?.data?.message)
        }
    }

    useEffect(() => {
        gettingAdvertisement();
    }, [])
    return (
        <section id='advertisement' className='advertisement'>
            <h1>विज्ञापन</h1>
            <img className='under' src={under} alt="under" />
            <ReactCardSlider className="sdd" slides={sliders} />
        </section>
    );
}

export default Advertisement;
