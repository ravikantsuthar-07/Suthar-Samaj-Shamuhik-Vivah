import React, { useEffect, useState } from 'react';
import AdminMenu from '../../components/Layoout/AdminMenu';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AdminGallery = () => {
    const navigate = useNavigate()
    const [gallery, setGallery] = useState([]);

    const gettingGallery = async () => {
        try {
            const { data } = await axios.get('https://suthar-samaj-shamuhik-vivah.onrender.com/api/v1/gallery/get-year');
            if (data?.success) {
                setGallery(data?.results);
            }
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }

    useEffect(() => {
        gettingGallery();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <>
            <AdminMenu />
            <main id="main" className="main">
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Gallery</h5>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Year</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {gallery?.map((c, i) => (
                                                <tr key={i}>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>{c.year}</td>
                                                    <td><button className='btn btn-primary' onClick={() => navigate(`/dashboard/admin/gallery_image/${c.year}`)}>See Images in {c.Year}</button></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default AdminGallery
