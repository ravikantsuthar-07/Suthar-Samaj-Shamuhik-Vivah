import React, { useEffect, useState } from 'react'
import Layout from '../components/Layoout/Layout';
import under from '../img/Under.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const InformationPage = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate()

    const getWeddingYear = async () => {
        try {
            const { data } = await axios.get('/api/v1/wedding/get-Wedding-year');
            if (data?.success) {
                if (data?.results?.length) {
                    setData(data?.results);
                } else {
                    alert("No Data Found")
                }
            }
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }

    useEffect(() => {
        getWeddingYear();
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                            <img src={`/static/sliders/${d.path}`} className="card-img-top" alt="Wedding" height={170} />
                            <div className="card-body">
                                <h5 className="card-title">सामूहिक विवाह - {d.year}</h5>
                                <button onClick={() => navigate(`/wedding/${d.year}`)} className="btn btn-outline-danger">अधिक जानकारी</button>
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
