import React, { useEffect, useState } from 'react'
import Frist from '../img/1.jpg'
import under from '../img/Under.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const InformationCom = () => {
    const [info, setInfo] = useState([]);
    const navigate = useNavigate()

    const getSlider = async () => {
        try {
            const { data } = await axios.get('/api/v1/slider/get-slider-last');
            console.log(data);
            if (data.success) {
                setInfo(data.results)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSlider();
    }, []);
    return (
        <section id="info">
            <h1>आयोजित सामूहिक विवाह</h1>
            <img className='under' src={under} alt="" />
            <div className="row ">
                {info.map((info, i) => ( 
                <div className="col-md-4 col-sm-12" key={i}>
                    <div className="card infoCard">
                        <img src={require(`../img/sliders/${info.path}`)} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">सामूहिक विवाह - {info.Year}</h5>
                            <button onClick={() => navigate(`/wedding/${info.Year}`)} className="btn btn-outline-danger">अधिक जानकारी</button>
                        </div>
                    </div>
                </div>
                ))}

            </div>
        </section>
    )
}

export default InformationCom
