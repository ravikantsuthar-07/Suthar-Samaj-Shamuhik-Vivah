import React, { useEffect, useState } from 'react'
import Layout from '../components/Layoout/Layout'
import under from '../img/Under.png';
import axios from 'axios';
import { Link } from 'react-router-dom';

const NewsPage = () => {
    const [news, setNews] = useState([]);

    const details = async () => {
        try {
            const { data } = await axios.get('https://suthar-samaj-shamuhik-vivah.onrender.com/api/v1/news/get-news');
            if (data?.success) {
                setNews(data?.results)
            }
        } catch (error) {
            alert(error?.response?.data?.message);
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
                                <div className="card-body blog-body">
                                    <h5 className="card-title">{n.Title}</h5>
                                    <h4 className="card-text">{n.S_Description}... <Link to={`/news/${n.id}`} >अधिक जानिए</Link></h4>
                                    
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
