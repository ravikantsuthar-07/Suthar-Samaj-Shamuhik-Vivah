import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../components/Layoout/Layout'
import axios from 'axios';
import under from '../img/Under.png'

const SamanYearPage = () => {
    const params = useParams();
    const navigate = useNavigate()
    const [karma, setKarma] = useState([]);

    const gettingYearByKarmawati = async () => {
        try {
            const { data } = await axios.get(`/api/v1/sammanit/get/${params.year}`);
            if (data?.success) {
                setKarma(data?.results);
                if (data?.results.length === 0) {
                    navigate('/saman');
                }
            }
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }


    useEffect(() => {
        gettingYearByKarmawati();
        // eslint-disable-next-line
    }, []);

    return (
        <Layout>
            <section id='karmatiYear'>
                <h1>सामान समारोह - {params.year}</h1>
                <img className='under' src={under} alt="" />
                <div className='container'>
                    <div className='row'>
                        {karma?.map((d, i) => (
                            <div className='col-sm-2 col-md-2 col-lg-2' key={i + 1}>
                                <div className="card infoCard team">
                                    <img src={`/static/sammanit/${d.Image}`} className="card-img-top" height={120} alt="karmawati" />
                                    <div className="card-body">
                                        <h5 className="card-title">{d.name}</h5>
                                        <h5 className="card-title">स्व. {d.FName}</h5>
                                        <h5 className="card-text">{d.address}</h5>
                                        <h5 className="card-text">मो. {d.Mobile}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default SamanYearPage
