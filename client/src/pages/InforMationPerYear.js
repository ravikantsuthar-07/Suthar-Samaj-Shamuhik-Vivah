import React, { useEffect, useState } from 'react'
import Layout from '../components/Layoout/Layout'
import Frist from '../img/weddingLogo.png'
import logo from '../img/weddingLogo.png'
import under from '../img/Under.png';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const InforMationPerYear = () => {
    let img = [];
    const navigate = useNavigate();
    const params = useParams();
    const [wedding, setWedding] = useState([]);
    const [gifts, setGifts] = useState([]);
    const [imgWed, setImgWed] = useState('');
    const [dates, setDates] = useState('');
    const [sr, setSr] = useState('');

    const gettAllWedding = async () => {
        try {
            const { data } = await axios.get(`/api/v1/wedding/gettAllWedding/${params.year}`);
            if (data?.success) {
                setWedding(data?.results);
                giftsAll();
            } else {
                navigate('/wedding');
            }
        } catch (error) {
            console.log(error);
        }
    }

    const giftsAll = async () => {
        try {
            const { data } = await axios.get(`/api/v1/wedding/gifts/${params.year}`)
            if (data.success) {
                setGifts(data.results);
            } else {
                navigate('/wedding');
            }
        } catch (error) {
            console.log(error);
        }
    }

    const info = async () => {
        try {
            const { data } = await axios.get(`/api/v1/slider/get-single-slider/${params.year}`);
            if (data?.success) {
                setImgWed(data.results[0].path);
                setDates(data.results[0].Dates);
                setSr(data.results[0].SrNo);
                gettAllWedding();
            } else {
                navigate('/wedding');
            }
        } catch (error) {
            console.log(error);
        }
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const formattedDay = day < 10 ? `0${day}` : day;
        const formattedMonth = month < 10 ? `0${month}` : month;
        return `${formattedDay}/${formattedMonth}/${year}`;
    };

    useEffect(() => {
        info();
        // eslint-disable-next-line
    }, []);

    return (
        <Layout>
            <section id='wedding'>
                <h3> {sr} सामूहिक विवाह के वैवाहिक जोड़े</h3>
                <img className='under' src={under} alt="" />
                <img className='mainImg' src={imgWed ? require(`../img/sliders/${imgWed}`) : Frist} alt="abc" />
                <div className="container">
                    {wedding?.map((w, i) => (
                        <div className="row mb-3" key={i}>
                            <div style={{ display: 'none' }}>
                                {img = w.M_Photo.split(" ")}
                            </div>
                            <div className="col-md-5 col-5 col-sm-5 col-lg-5">
                                <div className="details">
                                    <div className='col-md-8 col-sm-8 col-8'>
                                        <div className="menDetail" style={{ color: '#D61C4E' }}>
                                            <h4>ची. {w.M_Name}</h4>
                                            <h6>सुपुत्र {w.MF_Name}</h6>
                                            <h6>सुपौत्र {w.MG_Name}</h6>
                                            <h6>{w.M_Address}</h6>
                                            <h6>मो. {w.M_Mobile}</h6>
                                        </div>
                                    </div>
                                    <div className="Menimage" style={{ alignItems: 'center' }}>
                                        <img src={require(`../img/wedding/${img[1]}`)} alt="Men" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-2 col-sm-2 col-lg-2">
                                <div className="center">
                                    <h4>{w.SrNo}</h4>
                                    <img src={logo} alt="Men" />
                                </div>
                            </div>
                            <div className="col-md-5 col-5 col-sm-5 col-lg-5">
                                <div className="details">
                                    <div className="Menimage">
                                        <img src={require(`../img/wedding/${img[0]}`)} alt="Men" />
                                    </div>
                                    <div className='col-8 col-sm-8 col-md-8'>
                                        <div className="womenDetail" style={{ color: '#FEF9A7' }}>
                                            <h4>सौ. कां. {w.F_Name}</h4>
                                            <h6>सुपुत्री {w.FF_Name}</h6>
                                            <h6>सुपौत्री {w.FG_Name}</h6>
                                            <h6>{w.F_Address}</h6>
                                            <h6>मो. {w.F_Mobile}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="container">
                    <div className="row">
                        <h2 style={{ color: '#FEF9A7' }}>{sr} सामूहिक विवाह {formatDate(dates)} को संस्था द्वारा वर-वधु को दिये गये उपहारो का विवरण</h2>
                        <table className="table" style={{ backfaceVisibility: 'hidden' }}>
                            <thead>
                                <tr>
                                    <th scope="col">क्रमांक</th>
                                    <th scope="col">उपहार नाम</th>
                                    <th scope="col">संख्या</th>
                                    <th scope="col">उपहार का मूल्‍य</th>
                                </tr>
                            </thead>
                            <tbody>
                                {gifts.map((c, i) => (
                                    <tr>
                                        <th scope="row">{i + 1}</th>
                                        <td>{c.Name}</td>
                                        <td>{c.Numbers}</td>
                                        <td>{c.Price}</td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default InforMationPerYear
