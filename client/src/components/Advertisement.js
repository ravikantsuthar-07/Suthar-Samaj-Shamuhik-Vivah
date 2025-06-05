import axios from 'axios';
import React, { useEffect, useState } from 'react';
import under from '../img/Under.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Advertisement = () => {
    const settings = {
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    const [sliders, setSliders] = useState([]);

    const gettingAdvertisement = async () => {
        try {
            const { data } = await axios.get('https://suthar-samaj-shamuhik-vivah.onrender.com/api/v1/advertisment/get');
            if (data?.success) {
                setSliders(data?.results);
            }
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }

    useEffect(() => {
        gettingAdvertisement();
        // eslint-disable-next-line
    }, [])
    return (
        <section id='advertisement' className='advertisement'>
            <h1>विज्ञापन</h1>
            <img className='under' src={under} alt="under" />

            <div className='w-3/4 m-aut'>
                <div className='mt-20 text-center'>
                    <Slider {...settings}>
                        {sliders.map((t, i) => (
                            <div className='h-[500px] flex text-black rounded-xl' style={{overflowY: 'hidden'}}>
                                <div className='h-56 rounded-t-xl bg-indigo-500 flex justify-center text-center items-center'>
                                    <img src={`https://suthar-samaj-shamuhik-vivah.onrender.com/static/`.t.image} alt='template'  height={180} />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            {/* {sliders.length > 0 ? <ReactCardSlider className="sdd" slides={sliders} /> : "No Data"} */}
        </section>
    );
}

export default Advertisement;
