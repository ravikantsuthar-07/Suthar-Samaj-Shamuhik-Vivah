import React, { useEffect, useState } from 'react'
import AdminMenu from '../../components/Layoout/AdminMenu'
import axios from 'axios';
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';

const AdminAddGalleryImage = () => {
    const navigate = useNavigate();
    const [getYears, setGetYears] = useState([]);
    const [year, setYear] = useState('');
    const [photo, setPhoto] = useState('');
    const [auth] = useAuth();
    const getYear = async () => {
        try {
            const { data } = await axios.get('/api/v1/slider/get-slider');
            if (data.success) {
                setGetYears(data.results)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            const weddingData = new FormData();
            weddingData.append('year', year);
            for(var x = 0; x < photo.length; x++) {
                weddingData.append('Photo', photo[x]);
            }
            const { data } = await axios.post('/api/v1/gallery/create',
                weddingData, {
                headers: {
                    "Authorization": auth.token
                }
            });
            if (data?.success) {
                navigate('/dashboard/admin/gallery')
            } else {
                navigate('/dashboard/admin/add_gallery_image')
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getYear();
        // eslint-disable-next-line
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
                                    <h5 className="card-title">गैलरी फ़ोटो जोड़ें</h5>
                                    <form method='put' onSubmit={handleCreate} encType="multipart/form-data">
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Year</label>
                                            <div className="col-sm-10">
                                                <select className='form-control' onChange={(e) => setYear(e.target.value)}>
                                                    <option value={''}>---- Select Year ---</option>
                                                    {getYears.map((y, i) => (<option key={i} value={y.Year} >{y.Year}</option>))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Image</label>
                                            <div className="col-sm-10">
                                                <input type="file" name='img' accept='image/*' onChange={(e) => setPhoto(e.target.files)} className="form-control" id="inputFile" multiple />
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                            <button type="reset" className="btn btn-secondary">Reset</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default AdminAddGalleryImage
