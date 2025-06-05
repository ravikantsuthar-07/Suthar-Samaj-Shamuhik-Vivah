import React, { useEffect, useState } from 'react'
import AdminMenu from '../../components/Layoout/AdminMenu'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../../context/auth'

const AdminKarmaList = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [karma, setKarma] = useState([]);
    const [auth] = useAuth()

    const updateStatus = async (id, status) => {
        try {
            if (status) {
                status = 1;
            } else { 
                status = 0;
            }
            const { data } = await axios.put(`https://suthar-samaj-shamuhik-vivah.onrender.com/api/v1/karmawati/update-status-give/${id}`, { status: status }, {
                headers: {
                    Authorization: auth.token
                }
            });
            if (data?.success) {
                alert(data?.message);
                window.location.reload();
            } else {
                alert(data?.message);
                window.location.reload();
            }
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }

    const gettingKarmawatiYear = async () => {
        try {
            const { data } = await axios.get(`https://suthar-samaj-shamuhik-vivah.onrender.com/api/v1/karmawati/get-by-year-admin-whom/${params.year}`, {
                headers:{
                    Authorization: auth.token
                }
            });
            if (data?.success) {
                if (data?.results.length === 0) {
                    navigate('/dashboard/admin/karma');
                } else {
                    setKarma(data?.results);
                }
            }
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }

    useEffect(() => {
        gettingKarmawatiYear();
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
                                    <h5 className="card-title">{params.year} में कर्मवती पेंशन देने वाले सदस्य</h5>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Father or Husband Name</th>
                                                <th>Address</th>
                                                <th>Mobile Number</th>
                                                <th>Amount</th>
                                                <th>Image</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {karma?.map((c, i) => (
                                                <tr key={i}>
                                                    <td>{i + 1}</td>
                                                    <td>{c.name}</td>
                                                    <td>{c.fatherName}</td>
                                                    <td>{c.address}</td>
                                                    <td>{c.mobile}</td>
                                                    <td>{c.Amount}</td>
                                                    <td><img src={`https://suthar-samaj-shamuhik-vivah.onrender.com/static/karmawati/${c.img}`} width={50} height={50} alt='karmawati' /></td>
                                                    <td><button type='button' className='btn btn-primary' onClick={() => updateStatus(c.id, !c.status)}>{c.status ? "Activate" : "DeActivate"}</button></td>
                                                </tr>
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

export default AdminKarmaList
