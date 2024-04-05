import React, { useEffect, useState } from 'react'
import Layout from '../components/Layoout/Layout'
import axios from 'axios'

const SutradharPage = () => {
    const [book, setBook] = useState("");

    const gettingBook = async () => {
        try {
            const { data } = await axios.get('/api/v1/sutradhar/get-book');
            if (data?.success) {
                setBook(data?.results[0].file);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=> {
        gettingBook();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Layout>
            {book ? <iframe src={require(`../sutradhar/${book}`)} title='Book' id='sutradhar' width="100%" height="500px" /> : "Not Book Found"}
        </Layout>
    )
}

export default SutradharPage
