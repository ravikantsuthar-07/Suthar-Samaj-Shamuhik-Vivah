import React, { useEffect, useState } from 'react'
import Layout from '../components/Layoout/Layout'
import under from '../img/Under.png';
import axios from 'axios'
import { useParams } from 'react-router-dom'

const NewDetails = () => {
    const [news, setNews] = useState([])
    const params = useParams();

    const singleNews = async () => {
        try {
            const { data } = await axios.get(`/api/v1/news/get-single-news/${params.id}`);
            if (data?.success) {
                setNews(data?.results[0]);
            }
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }

    useEffect(() => {
        singleNews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Layout>
            <section id='newDetails'>
                <h1>{news ? news.Title : "data Not Found"}</h1>
                <img className='under' src={under} alt="" />
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-sm-6 col-12 col-lg-6'>
                            <img src={`/static/news/${news.Image ? news.Image : "3.png"}`} width={'100%'} alt='newsImage' />
                        </div>
                        <div className='col-md-6 col-sm-6 col-12 col-lg-6'>
                            <p id='short'>{news.S_Description}</p>
                            <p id='long'>{news.L_Description}</p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default NewDetails
