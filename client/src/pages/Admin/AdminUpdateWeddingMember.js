import React, { useEffect, useState } from 'react'
import AdminMenu from '../../components/Layoout/AdminMenu'
import axios from 'axios';
import { useAuth } from '../../context/auth';
import { useNavigate, useParams } from 'react-router-dom';

const AdminUpdateWeddingMember = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [syear, setSYear] = useState([]);
    const [year, setYear] = useState('');
    const [photo, setPhoto] = useState([]);
    const [menName, setMenName] = useState('');
    const [menFatName, setMenFatName] = useState('');
    const [menGFatName, setMenGFatName] = useState('');
    const [menAddress, setMenAddress] = useState('');
    const [menMobile, setMenMobile] = useState('');
    const [woMenName, setWoMenName] = useState('');
    const [woMenFatName, setWoMenFatName] = useState('');
    const [woMenGFatName, setWoMenGFatName] = useState('');
    const [woMenAddress, setWoMenAddress] = useState('');
    const [woMenMobile, setWoMenMobile] = useState('');
    const [auth] = useAuth();

    const dd = async () => {
        const { data } = await axios.get(`https://suthar-samaj-shamuhik-vivah.onrender.com/api/v1/wedding/gettSingleWedding/${params.id}`)
        if (data?.success) {
            setYear(data?.results[0].year);
            setPhoto(data?.results[0].M_Photo);
            setMenName(data?.results[0].M_Name);
            setMenFatName(data?.results[0].MF_Name);
            setMenGFatName(data?.results[0].MG_Name);
            setMenAddress(data?.results[0].M_Address);
            setMenMobile(data?.results[0].M_Mobile);
            setWoMenName(data?.results[0].F_Name);
            setWoMenFatName(data?.results[0].FF_Name);
            setWoMenGFatName(data?.results[0].FG_Name);
            setWoMenAddress(data?.results[0].F_Name);
            setWoMenMobile(data?.results[0].F_Mobile);
        }
    }

    const yy = async () => {
        try {

            const { data } = await axios.get('https://suthar-samaj-shamuhik-vivah.onrender.com/api/v1/slider/get-slider');
            if (data?.success) {
                setSYear(data?.results)
            }
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            const weddingData = new FormData();
            weddingData.append('year', year);
            weddingData.append('M_name', menName);
            weddingData.append('MF_Name', menFatName);
            weddingData.append('MG_Name', menGFatName);
            weddingData.append('M_Address', menAddress);
            weddingData.append('M_Mobile', menMobile);
            weddingData.append('F_Name', woMenName);
            weddingData.append('FF_Name', woMenFatName);
            weddingData.append('FG_Name', woMenGFatName);
            weddingData.append('F_Address', woMenAddress);
            weddingData.append('F_Mobile', woMenMobile);
            for(var x = 0; x < photo.length; x++) {
                weddingData.append('Photo', photo[x]);
            }
            const { data } = await axios.put(`https://suthar-samaj-shamuhik-vivah.onrender.com/api/v1/wedding/updateWedding/${params.id}`,
                weddingData, {
                headers: {
                    "Authorization": auth.token
                }
            });
            if (data?.success) {
                alert(data?.message);
                navigate('/dashboard/admin/wedding');
            } else {
                alert(data?.message);
                navigate(`/dashboard/admin/wedding_update/${params.id}`);
            }
        } catch (error) {
            alert(error?.response?.data?.message);
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
                                    <h5 className="card-title">स्लाइडर जोड़ें</h5>
                                    <form method='post' onSubmit={handleCreate} encType="multipart/form-data">
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Year</label>
                                            <div className="col-sm-10">
                                                <select className='form-control' onChange={(e) => setYear(e.target.value)} value={year}>
                                                    <option value={''}>---- Select Year ---</option>
                                                    {syear.map((y, i) => (<option key={i} value={y.Year} >{y.Year}</option>))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Image</label>
                                            <div className="col-sm-10">
                                                <input type="file" name='img' accept='image/*' onChange={(e) => setPhoto(e.target.files)} className="form-control" id="inputFile" multiple />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Man Name</label>
                                            <div className="col-sm-10">
                                                <input type="text" name='M_name' value={menName} onChange={(e) => setMenName(e.target.value)} className="form-control" id="inputMName" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Man Father Name</label>
                                            <div className="col-sm-10">
                                                <input type="text" name='MF_Name' value={menFatName} onChange={(e) => setMenFatName(e.target.value)} className="form-control" id="inputManFatherName" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Man Grand Father Name</label>
                                            <div className="col-sm-10">
                                                <input type="text" name='MG_Name' value={menGFatName} onChange={(e) => setMenGFatName(e.target.value)} className="form-control" id="inputManGrandFatherName" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Man Address</label>
                                            <div className="col-sm-10">
                                                <textarea name='M_Address' value={menAddress} placeholder='Enter The Address' onChange={(e) => setMenAddress(e.target.value)} id='textareaManAddress' className="form-control"></textarea>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Man Mobile Number</label>
                                            <div className="col-sm-10">
                                                <input type="text" name='M_Mobile' value={menMobile} onChange={(e) => setMenMobile(e.target.value)} className="form-control" id="inputManMobile" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Woman Name</label>
                                            <div className="col-sm-10">
                                                <input type="text" name='F_name' value={woMenName} onChange={(e) => setWoMenName(e.target.value)} className="form-control" id="inputFName" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Woman Father Name</label>
                                            <div className="col-sm-10">
                                                <input type="text" name='FF_Name' value={woMenFatName} onChange={(e) => setWoMenFatName(e.target.value)} className="form-control" id="inputWomanFatherName" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Woman Grand Father Name</label>
                                            <div className="col-sm-10">
                                                <input type="text" name='FG_Name' value={woMenGFatName} onChange={(e) => setWoMenGFatName(e.target.value)} className="form-control" id="inputWomanGrandFatherName" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Woman Address</label>
                                            <div className="col-sm-10">
                                                <textarea name='F_Address' placeholder='Enter The Address' onChange={(e) => setWoMenAddress(e.target.value)} id='textareaWomanAddress' value={woMenAddress} className="form-control"></textarea>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Woman Mobile Number</label>
                                            <div className="col-sm-10">
                                                <input type="text" name='F_Mobile' value={woMenMobile} onChange={(e) => setWoMenMobile(e.target.value)} className="form-control" id="inputWomanMobile" />
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

export default AdminUpdateWeddingMember
