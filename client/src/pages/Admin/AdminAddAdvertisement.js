import React, { useState } from 'react'
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';
import AdminMenu from '../../components/Layoout/AdminMenu';
import axios from 'axios';

const AdminAddAdvertisement = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [mobile, setMobile] = useState("");
    const [photo, setPhoto] = useState("");
    const [auth] = useAuth();

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            const advertisement = new FormData();
            advertisement.append('title', title);
            advertisement.append('description', description);
            advertisement.append('mobile', mobile);
            advertisement.append('Photo', photo);

            const { data } = await axios.post('/api/v1/advertisment/create', advertisement, {
                headers: {
                    "Authorization": auth.token
                }
            });
            if (data?.success) {
                alert(data?.message);
                navigate('/dashboard/admin/advertisement');
            } else {
                alert(data?.message);
            }
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }

    return (
        <div>
            <AdminMenu />
            <main id="main" className="main">
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Add Advertisement</h5>
                                    <form method='post' onSubmit={handleCreate} encType="multipart/form-data">
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Title</label>
                                            <div className="col-sm-10">
                                                <input type="text" name='title' value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="inputTitle" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Description</label>
                                            <div className="col-sm-10">
                                                <input type="text" name='description' value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" id="inputDesctiption" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Mobile</label>
                                            <div className="col-sm-10">
                                                <input type="text" name='mobile' value={mobile} onChange={(e) => setMobile(e.target.value)} className="form-control" id="inputMobile" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Template</label>
                                            <div className="col-sm-10">
                                                <input type="file" name='photo' onChange={(e) => setPhoto(e.target.files[0])} className="form-control" id="inputPDF" />
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
        </div>
    )
}

export default AdminAddAdvertisement
