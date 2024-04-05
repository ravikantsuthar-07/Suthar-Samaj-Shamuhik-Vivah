import React, { useEffect, useState } from 'react'
import AdminMenu from '../../components/Layoout/AdminMenu'
import axios from 'axios';
import { useAuth } from '../../context/auth';
import { useNavigate, useParams } from 'react-router-dom';

const AdminUpdateTeam = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [name, setName] = useState(null);
    const [post, setPost] = useState(null);
    const [mobile, setMobile] = useState(null);
    const [address, setAddress] = useState(null);
    const [img, setImg] = useState(null);
    const [auth] = useAuth();

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            const teamData = new FormData();
            teamData.append('Name', name);
            teamData.append('PostOn', post);
            teamData.append('Mobile', mobile);
            teamData.append('Address', address);
            teamData.append('img', img);
            const { data } = await axios.put(`/api/v1/team/update-team/${params.id}`, teamData, {
                headers: {
                    'Authorization': auth.token
                }
            });
            if (data?.success) {
                navigate(`/dashboard/admin/team`);
            } else {
                navigate(`/dashboard/admin/add_team`);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const data = async () => {
        try {
            const { data } = await axios.get(`/api/v1/team/get-member/${params.id}`, {
                headers: {
                    'Authorization': auth.token
                }
            });
            if (data?.success) {
                setName(data.results[0].Name);
                setPost(data.results[0].PostOn);
                setMobile(data.results[0].Mobile);
                setAddress(data.results[0].Address);
                setImg(data.results[0].img);
            } else {
                navigate(`/dashboard/admin/team`);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        data();
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
                                    <h5 className="card-title">सदस्य अपडेट</h5>
                                    <form onSubmit={handleCreate} encType="multipart/form-data">
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                                            <div className="col-sm-10">
                                                <input type="text" name='SrNo' value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="inputName" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Post</label>
                                            <div className="col-sm-10">
                                                <select onChange={(e) => setPost(e.target.value)} value={post} className="form-control" >
                                                    <option value={''} >--- पोस्ट चुनिए ---</option>
                                                    <option value={'मंत्री'}>  मंत्री </option>
                                                    <option value={'अध्यक्ष'} > अध्यक्ष</option>
                                                    <option value={'कोषाध्यक्ष'} > कोषाध्यक्ष </option>
                                                    <option value={'प्रणेता'} >प्रणेता </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Mobile</label>
                                            <div className="col-sm-10">
                                                <input type="text" name='Mobile' value={mobile} placeholder='Enter Mobile Number' className="form-control" id="inputMobile" onChange={(e) => setMobile(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Address</label>
                                            <div className="col-sm-10">
                                                <input type="text" name='Address' value={address} placeholder='Enter Address' className="form-control" id="inputMobile" onChange={(e) => setAddress(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Image</label>
                                            <div className="col-sm-10">
                                                <input type="file" name='img' accept='image/*' onChange={(e) => setImg(e.target.files[0])} className="form-control" id="inputImage" />
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary">Update</button>
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

export default AdminUpdateTeam
