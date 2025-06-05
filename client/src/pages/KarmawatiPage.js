import React, { useEffect, useState } from 'react'
import Layout from '../components/Layoout/Layout'
import under from '../img/Under.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const KarmawatiPage = () => {
    const navigate = useNavigate();
    const [karmawati, setKarmawati] = useState([]);

    const gettingKarmawati = async () => {
        try {
            const { data } = await axios.get(`https://suthar-samaj-shamuhik-vivah.onrender.com/api/v1/karmawati/get-year`);
            if (data?.success) {
                setKarmawati(data?.results);
            }
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }

    useEffect(() => {
        gettingKarmawati();
        // eslint-disable-next-line
    }, []);

    return (
        <Layout>
            <section id="karma">
                <h1>कर्मावती पैंशन</h1>
                <img className='under' src={under} alt="" />
                <div className="row ">
                    {karmawati?.map((d, i) => (
                        <div className="col-md-4 col-sm-12" key={i}>
                            <div className="card infoCard">
                                <div className="card-body">
                                    <h5 className="card-title">कर्मावती पैंशन - {d.year}</h5>
                                    <button onClick={() => navigate(`/karmawati/${d.year}`)} className="btn btn-outline-danger">अधिक जानकारी</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    )
}

export default KarmawatiPage
