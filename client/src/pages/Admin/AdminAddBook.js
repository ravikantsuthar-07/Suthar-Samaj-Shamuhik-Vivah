import React, { useState } from 'react'
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';
import AdminMenu from '../../components/Layoout/AdminMenu';
import axios from 'axios';

const AdminAddBook = () => {
    const navigate = useNavigate();
    const [year, setYear] = useState("");
    const [file, setFile] = useState("");
    const [auth] = useAuth();

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            const sutradharData = new FormData();
            sutradharData.append('year', year)
            sutradharData.append('file', file)

            const { data } = await axios.post('https://suthar-samaj-shamuhik-vivah.onrender.com/api/v1/sutradhar/create', sutradharData, {
                headers: {
                    "Authorization": auth.token
                }
            });
            if (data?.success) {
                alert(data?.message)
                navigate('/dashboard/admin/book');
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
                                    <h5 className="card-title">Add Book</h5>
                                    <form method='post' onSubmit={handleCreate} encType="multipart/form-data">
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Year</label>
                                            <div className="col-sm-10">
                                                <input type="text" name='year' value={year} onChange={(e) => setYear(e.target.value)} className="form-control" id="inputYear" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Book <small>(only pdf)</small></label>
                                            <div className="col-sm-10">
                                                <input type="file" name='file' accept='.pdf' onChange={(e) => setFile(e.target.files[0])} className="form-control" id="inputPDF" />
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

export default AdminAddBook
