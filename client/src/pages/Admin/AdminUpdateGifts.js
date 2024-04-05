import React, { useEffect, useState } from 'react'
import AdminMenu from '../../components/Layoout/AdminMenu'
import axios from 'axios';
import { useAuth } from '../../context/auth';
import { useNavigate, useParams } from 'react-router-dom';

const AdminUpdateGifts = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [syear, setSYear] = useState([]);
    const [year, setYear] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [price, setPrice] = useState('');
    const [auth] = useAuth();

    const yy = async () => {
        try {

            const { data } = await axios.get('/api/v1/slider/get-slider');
            if (data.success) {
                setSYear(data.results)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const dd = async () => {
        const { data } = await axios.get(`/api/v1/wedding/getSingleGift/${params.id}`)
        if (data.success) {
            setYear(data.results[0].year);
            setName(data.results[0].Name);
            setNumber(data.results[0].Numbers);
            setPrice(data.results[0].Price);
        }
    }

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put(`/api/v1/wedding/updateGift/${params.id}`, {year: year, Name: name, Number: number, Price: price }, {
                headers:{
                    "Authorization": auth.token
                }
            });
            if (data?.success) {
                navigate('/dashboard/admin/gift');
            } else {
                navigate(`/dashboard/admin/gifts_update/${params.id}`);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        dd();
        yy();
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
                                    <h5 className="card-title">उपहार जोड़ें</h5>
                                    <form method='post' onSubmit={handleCreate}>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Year</label>
                                            <div className="col-sm-10">
                                                <select className='form-control ' name='year' onChange={(e) => setYear(e.target.value)} value={year}>
                                                    <option value={''}>---- Select Year ---</option>
                                                    {syear.map((y) => (<option value={y.Year} >{y.Year}</option>))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                                            <div className="col-sm-10">
                                                <input type="text" name='Name' value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="inputName" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Quanty</label>
                                            <div className="col-sm-10">
                                                <input type="text" name='Numbers' value={number} onChange={(e) => setNumber(e.target.value)} className="form-control" id="inputQuantiy" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Price</label>
                                            <div className="col-sm-10">
                                                <input type="text" name='Price' value={price} onChange={(e) => setPrice(e.target.value)} className="form-control" id="inputPrice" />
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

export default AdminUpdateGifts
