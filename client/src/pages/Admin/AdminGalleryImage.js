import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import AdminMenu from '../../components/Layoout/AdminMenu';

const AdminGalleryImage = () => {
    const params = useParams();
    const [getImage, setGetImage] = useState([]);
    const gettingImage = async () => {
        try {
            const { data } = await axios.get(`https://suthar-samaj-shamuhik-vivah.onrender.com/api/v1/gallery/get-images/${params.year}`);
            if (data?.success) {
                setGetImage(data?.results);
            }
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }
    useEffect(() => {
        gettingImage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <AdminMenu />
            <main id='main' className='main'>
                <div className='container'>
                    <div className='row'>
                        {getImage?.map((c, i) => (
                            <div className="col-md-2 col-sm-4 col-3 ">
                                <div className="card infoCard">
                                    <img src={`https://suthar-samaj-shamuhik-vivah.onrender.com/static/gallery/${c.img}`} className="card-img-top" alt="Gallery" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}

export default AdminGalleryImage
