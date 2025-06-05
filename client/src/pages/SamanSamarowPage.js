import React, { useEffect, useState } from 'react'
import Layout from '../components/Layoout/Layout'
import under from '../img/Under.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const SamanSamarowPage = () => {
    const navigate = useNavigate();
    const [saman, setSaman] = useState([]);
    const gettingSamanSamarowYear = async () => {
        try {
            const {data} = await axios.get('https://suthar-samaj-shamuhik-vivah.onrender.com/api/v1/sammanit/get-year');
            if (data?.success) {
                setSaman(data?.results);
            }
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }
    
    useEffect(() => {
        gettingSamanSamarowYear();
        // eslint-disable-next-line
    }, []);
    return (
        <Layout>
            <section id="karma">
                <h1>सामान समारोह</h1>
                <img className='under' src={under} alt="" />
                <div className="row ">
                    {saman?.map((d, i) => (
                        <div className="col-md-4 col-sm-12" key={i}>
                            <div className="card infoCard">
                                <div className="card-body">
                                    <h5 className="card-title">सामान समारोह - {d.year}</h5>
                                    <button onClick={() => navigate(`/saman/${d.year}`)} className="btn btn-outline-danger">अधिक जानकारी</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    )
}

export default SamanSamarowPage
