import React, { useEffect, useState } from 'react'
import Layout from '../components/Layoout/Layout';
import under from '../img/Under.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const InformationPage = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate()

    const getSlider = async () => {
        try {
            const { data } = await axios.get('/api/v1/slider/get-slider');
            if (data.success) {
                setData(data.results)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSlider();
    }, []);

    return (
        <Layout>
            <section id="info">
                <h1>आयोजित सामूहिक विवाह</h1>
                <img className='under' src={under} alt="" />
                <div className="row ">
                    {data.map((d, i) => (
                    <div className="col-md-4 col-sm-12">
                        <div className="card infoCard">
                            <img src={require(`../img/sliders/${d.path}`)} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">सामूहिक विवाह - {d.Year}</h5>
                                <button onClick={() => navigate(`/wedding/${d.Year}`)} className="btn btn-outline-danger">अधिक जानकारी</button>
                            </div>
                        </div>
                    </div>
                    ))}

                </div>
            </section>
        </Layout>
    )
}

export default InformationPage
