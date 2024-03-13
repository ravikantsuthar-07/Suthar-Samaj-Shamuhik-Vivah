import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layoout/Layout'
import AdminMenu from '../../components/Layoout/AdminMenu'
import { useAuth } from '../../context/auth'
import { Select } from 'antd'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const { Option } = Select

const AdminWedding = () => {
    const navigate = useNavigate();

    const yea = async () => {
        try {
            const { data } = await axios.get('/api/v1/slider/get-slider');
            if (data.success) {
                setYears(data.results)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        yea();
    }, [])

    const [years, setYears] = useState([]);
    const [year, setYear] = useState('');
    const [mPhoto, setMPhoto] = useState('');
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

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            const weddingData = new FormData();
            weddingData.append('year', year);
            weddingData.append('M_Name', menName);
            weddingData.append('MF_Name', menFatName);
            weddingData.append('MG_Name', menGFatName);
            weddingData.append('M_Address', menAddress);
            weddingData.append('M_Mobile', menMobile);
            weddingData.append('Photo', mPhoto);
            weddingData.append('F_Name', woMenName);
            weddingData.append('FF_Name', woMenFatName);
            weddingData.append('FG_Name', woMenGFatName);
            weddingData.append('F_Address', woMenAddress);

            const {data} = axios.post('/api/v1/wedding/createWedding', 
            weddingData,
            {
                headers: {
                    "Authorization" : auth.token
                }
            }
            );

            console.log(data);
            if (data?.success) {
                navigate('/dashboard/admin/wedding')
            }


        } catch (error) {
            
        }
    }


    return (
        <Layout>
            <div className="container-fluid " style={{ margin: '150px' }}>
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9">
                        <h1>वेडिंग के जोड़े ऐड करे</h1>
                        <div className='m-1 w-75'>
                            <div className='mb-3'>
                                <Select borderd={false} placeholder="Select a Year" size='large' showSearch className='form-select mb-3' onChange={(value) => setYear(value)}>
                                    {years?.map(c => (
                                        <Option key={c.id} value={c.id}>{c.Year}</Option>
                                    ))}
                                </Select>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='upload images' className='btn btn-outline-secondary col-md-12'>
                                    <input type='file' className='form-control btn btn-outline-secondary' name='m_photo' accept='image/*' onChange={(e) => setMPhoto(e.target.files[0])} />
                                </label>
                            </div>
                            <div className='mb-3'>
                            </div>
                            <div className='mb-3'>
                                <input type='text' value={menName} placeholder='Enter The Men Name' className='form-control' onChange={(e) => setMenName(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <input type='text' value={menFatName} placeholder='Enter Men Father Name' className='form-control' onChange={(e) => setMenFatName(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <input type='text' value={menGFatName} placeholder='Enter Men Grand Father Name' className='form-control' onChange={(e) => setMenGFatName(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <textarea value={menAddress} placeholder='Enter The Men Address' className='form-control' onChange={(e) => setMenAddress(e.target.value)}>  </textarea>
                            </div>
                            <div className='mb-3'>
                                <input type='text' value={menMobile} placeholder='Enter Men Mobile Number' className='form-control' onChange={(e) => setMenMobile(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                            </div>
                            <div className='mb-3'>
                                <input type='text' value={woMenName} placeholder='Enter The Women Name' className='form-control' onChange={(e) => setWoMenName(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <input type='text' value={woMenFatName} placeholder='Enter Women Father Name' className='form-control' onChange={(e) => setWoMenFatName(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <input type='text' value={woMenGFatName} placeholder='Enter Women Grand Father Name' className='form-control' onChange={(e) => setWoMenGFatName(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <textarea value={woMenAddress} placeholder='Enter The Women Address' className='form-control' onChange={(e) => setWoMenAddress(e.target.value)}>  </textarea>

                            </div>
                            <div className='mb-3'>
                                <input type='text' value={woMenMobile} placeholder='Enter Men Mobile Number' className='form-control' onChange={(e) => setWoMenMobile(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <button className='btn btn-primary' onClick={handleCreate}>CREATE PRODUCT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default AdminWedding
