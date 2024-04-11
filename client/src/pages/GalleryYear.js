import React, { useEffect, useState } from 'react'
import Layout from '../components/Layoout/Layout'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Under from '../img/Under.png';
const GalleryYear = () => {
    const params = useParams();
    const [getGallery, setGetGallery] = useState([]);

    const get = async () => {
        try {
            const { data } = await axios.get(`/api/v1/gallery/get-images/${params.year}`);
            if (data?.success) {
                setGetGallery(data.results);
            }
        } catch (error) {
            console.log(error?.response?.data?.message);
        }
    }

    useEffect(()=>{
        get();
        // eslint-disable-next-line
    },[]);

    return (
        <Layout>
            <section id="gallerys">
                <h1>फोटो {params.year} सामूहिक विवाह</h1>
                <img className='under' src={Under} alt="" />
                <div className="row ">
                    {getGallery?.map((c, i) => (
                        <div className="col-md-2 col-sm-4 col-3 ">
                            <div className="card infoCard">
                                <img src={require(`../img/gallery/${c.img}`)} className="card-img-top" alt="Gallery" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    )
}

export default GalleryYear
