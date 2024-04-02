import React, { useEffect, useState } from 'react'
import Layout from '../components/Layoout/Layout'
import under from '../img/Under.png';
import axios from 'axios';
import { Link } from 'react-router-dom';

const NewsPage = () => {
    const [news, setNews] = useState([]);

    const details = async () => {
        try {
            const { data } = await axios.get('/api/v1/news/get-news');
            if (data.success) {
                setNews(data.results)
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        details();
    }, []);
    return (
        <Layout>
            <section id="news">
                <h1>समाचार</h1>
                <img className='under' src={under} alt="" />
                <div className="row ">
                    {news.map((n, i) => (
                        <div className="col-md-4 col-sm-12" key={i}>
                            <div className="card infoCard">
                                <img src={require(`../img/news/${n.Image}`)} className="card-img-top" alt="news" />
                                <div className="card-body">
                                    <h5 className="card-title">{n.Title}</h5>
                                    <h4 className="card-text">{n.S_Description}</h4>
                                    <Link to="/news/1" className="btn btn-outline-danger">अधिक जानकारी</Link>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </section>
        </Layout>
    )
}

export default NewsPage
