import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../components/Layoout/Layout'
import axios from 'axios';
import under from '../img/Under.png'

const KarmawatiYearPage = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [karma, setKarma] = useState([]);
    const [karmawati, setKarmawati] = useState([]);

    const gettingYearByKarmawati = async () => {
        try {
            const { data } = await axios.get(`https://suthar-samaj-shamuhik-vivah.onrender.com/api/v1/karmawati/get-by-year/${params.year}`);
            if (data?.success) {
                setKarma(data?.results);
                if (data?.results.length === 0) {
                    navigate('/karmawati');
                }
                gettingkarmawati();
            }
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }

    const gettingkarmawati = async () => {
        try {
            const { data } = await axios.get(`https://suthar-samaj-shamuhik-vivah.onrender.com/api/v1/karmawati/get-by-year-whom/${params.year}`);
            if (data?.success) {
                setKarmawati(data?.results);
                if (data?.results.length === 0) {
                    navigate('/karmawati');
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
                <h1>कर्मावती पैंशन - {params.year}</h1>
                <img className='under' src={under} alt="" />
                <div className='container'>
                    <div className='row'>
                        {karma?.map((d, i) => (
                            <div className='col-sm-2 col-md-2 col-lg-2' key={i + 1}>
                                <div className="card infoCard team">
                                    <img src={`https://suthar-samaj-shamuhik-vivah.onrender.com/static/karmawati/${d.img}`} className="card-img-top" height={120} alt="karmawati" />
                                    <div className="card-body">
                                        <h5 className="card-title">{d.name}</h5>
                                        <h5 className="card-title">स्व. {d.wifeof}</h5>
                                        <h5 className="card-text">{d.address}</h5>
                                        <h5 className="card-text">मो. {d.mobile}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                    {karmawati?.map((d, i) => (
                            <div className='col-sm-2 col-md-2 col-lg-2' key={i + 1}>
                                <div className="card infoCard team">
                                    <img src={`https://suthar-samaj-shamuhik-vivah.onrender.com/static/karmawati/${d.img}`} className="card-img-top" height={120} alt="karmawati" />
                                    <div className="card-body">
                                        <h5 className="card-title">{d.name}</h5>
                                        <h5 className="card-title">{d.fatherName}</h5>
                                        <h5 className="card-text">{d.address}</h5>
                                        <h5 className="card-text">मो. {d.mobile}</h5>
                                        <h5 className="card-text">₹ {d.Amount}/-</h5>
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

export default KarmawatiYearPage
