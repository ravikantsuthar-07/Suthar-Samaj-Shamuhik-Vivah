import React, { useState } from 'react'
import AdminMenu from '../../components/Layoout/AdminMenu'
import axios from 'axios';
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';

const AdminAddTeam = () => {
    const navigate = useNavigate();
    const [name, setName] = useState(null);
    const [post, setPost] = useState(null);
    const [mobile, setMobile] = useState(null);
    const [img, setImg] = useState(null);
    const [address, setAddress] = useState(null);
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
            const {data} = await axios.post(`/api/v1/team/create-team`, teamData, {
                headers:{
                    'Authorization' : auth.token
                }
            });
            if (data?.success) {
                alert(data?.message);
                navigate(`/dashboard/admin/team`);
            } else {
                alert(data?.message);
                navigate(`/dashboard/admin/add_team`);
            }
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }
    return (
        <>
            <AdminMenu />
            <main id="main" className="main">
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">सदस्य जोड़ें</h5>
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

export default AdminAddTeam
