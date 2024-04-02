import React, { useEffect, useState } from 'react'
import Layout from '../components/Layoout/Layout'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const NewDetails = () => {
    const [news, setNews] = useState([])
    const params = useParams();
    const singleNews = async () => {
        try {
            const {data} = await axios.get(`/api/v1/news/get-single-news/${params.id}`);
            if (data?.success) {
                setNews(data?.results[0]);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=> {
        singleNews();
    }, []);
    return (
        <Layout>
            {console.log(news.Image)}
        </Layout>
    )
}

export default NewDetails
