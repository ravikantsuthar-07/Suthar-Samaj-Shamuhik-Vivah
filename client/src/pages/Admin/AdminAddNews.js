import React, { useState } from 'react'
import AdminMenu from '../../components/Layoout/AdminMenu'
import axios from 'axios';
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';

const AdminAddNews = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState(null);
    const [s_Description, setS_Description] = useState(null);
    const [l_Description, setL_Description] = useState(null);
    const [img, setImg] = useState(null);
    const [auth] = useAuth();

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            const newsData = new FormData();
            newsData.append('Title', title);
            newsData.append('S_Description', s_Description);
            newsData.append('L_Description', l_Description);
            newsData.append('img', img);
            const {data} = await axios.post(`/api/v1/news/create-news`, newsData, {
                headers:{
                    'Authorization' : auth.token
                }
            });
            if (data?.success) {
                alert(data?.message);
                navigate(`/dashboard/admin/news`);
            } else {
                alert(data?.message);
                navigate(`/dashboard/admin/add_news`);
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
                                    <h5 className="card-title">समाचार जोड़ें</h5>
                                    <form onSubmit={handleCreate} encType="multipart/form-data">
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Title</label>
                                            <div className="col-sm-10">
                                                <input type="text" name='Title' value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="inputName" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Short Description</label>
                                            <div className="col-sm-10">
                                                <input type="text" name='S_Description' value={s_Description} placeholder='Enter Short Description' className="form-control" id="inputMobile" onChange={(e) => setS_Description(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">News </label>
                                            <div className="col-sm-10">
                                                <textarea name='L_Description' value={l_Description} placeholder='Full News' className="form-control" id="inputMobile" onChange={(e) => setL_Description(e.target.value)} > </textarea>
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

export default AdminAddNews
