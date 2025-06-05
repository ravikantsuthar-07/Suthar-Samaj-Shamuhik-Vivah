import React, { useEffect, useState } from 'react'
import Layout from '../components/Layoout/Layout'
import Under from '../img/Under.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GalleryPage = () => {
    const [gallery, setGallery] = useState([]);
    const navigate = useNavigate();

    const gall = async () => {
        try {
            const { data } = await axios.get('https://suthar-samaj-shamuhik-vivah.onrender.com/api/v1/slider/get-slider');
            if (data?.success) {
                setGallery(data?.results)
            }
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }

    useEffect(() => {
        gall();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Layout>
            <section id="gallery">
                <h1>गैलरी</h1>
                <img className='under' src={Under} alt="" />
                <div className="row ">
                    {gallery?.map((g, i) => (
                        <div className="col-md-4 col-sm-12" key={i}>
                            <div className="card infoCard">
                                <img src={`https://suthar-samaj-shamuhik-vivah.onrender.com/static/sliders/${g.path}`} className="card-img-top" height={200} alt="Gallery" />
                                <div className="card-body">
                                    <h5 className="card-title">सामूहिक विवाह - {g.Year}</h5>
                                    <button type='button' onClick={()=>navigate(`/gallery/${g.Year}`)} className="btn btn-danger">अधिक तस्वीरें</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    )
}

export default GalleryPage
