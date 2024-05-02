import React, { useEffect, useState } from 'react'
import AdminMenu from '../../components/Layoout/AdminMenu'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../../context/auth'

const AdminWeddingList = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [wedding, setWedding] = useState([]);
    const [auth] = useAuth()

    const gettingweddingYear = async () => {
        try {
            const { data } = await axios.get(`/api/v1/wedding/gettAllWedding/${params.year}`)
            if (data?.success) {
                setWedding(data?.results);
            }
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }

    const deleteWedding = async (id, file) => {
        try {
            const { data } = await axios.post(`/api/v1/wedding/deleteWedding/${id}`, {file: file}, {
                headers: {
                    "Authorization": auth.token
                }
            });
            if (data?.success) {
                alert(data?.message);
                window.location.reload();
            } else {
                alert(data?.message);
            }
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }

    useEffect(() => {
        gettingweddingYear();
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
                                    <h5 className="card-title">Wedding</h5>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Father Name</th>
                                                <th>Grandfather Name</th>
                                                <th>Address</th>
                                                <th>Mobile Number</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {wedding?.map((c, i) => (
                                                <>
                                                    <td key={c.id}>{i + 1}</td>
                                                    <tr key={i}>
                                                        <td>Male</td>
                                                        <td>{c.M_Name}</td>
                                                        <td>{c.MF_Name}</td>
                                                        <td>{c.MG_Name}</td>
                                                        <td>{c.M_Address}</td>
                                                        <td>{c.M_Mobile}</td>
                                                        <td><button type='button' className='btn btn-primary' onClick={() => navigate(`/dashboard/admin/wedding_update/${c.id}`)}>Update</button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Female</td>
                                                        <td>{c.F_Name}</td>
                                                        <td>{c.FF_Name}</td>
                                                        <td>{c.FG_Name}</td>
                                                        <td>{c.F_Address}</td>
                                                        <td>{c.F_Mobile}</td>
                                                        <td><button type='button' className='btn btn-danger' onClick={() => deleteWedding(c.id, c.M_Photo)}>Delete</button></td>
                                                    </tr>
                                                </>
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

export default AdminWeddingList
