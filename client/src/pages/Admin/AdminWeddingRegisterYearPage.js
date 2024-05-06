import React, { useEffect, useState } from 'react'
import AdminMenu from '../../components/Layoout/AdminMenu'
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import axios from 'axios';

const AdminWeddingRegisterYearPage = () => {
    const params = useParams();
    const navigate = useNavigate()
    const [wedding, setWedding] = useState([]);
    const [auth] = useAuth();

    const gettingwedding = async () => {
        try {
            const { data } = await axios.get(`/api/v1/weddingRegister/get-wedding/${params.year}`, {
                headers: {
                    "Authorization": auth.token
                }
            });

            if (data?.success) {
                if (data?.results.length === 0) {
                    navigate('/dashboard/admin/wedding_register');
                }
                setWedding(data?.results);
            }
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }

    const updateStatus = async (id, status) => {
        try {
            status ? status = 0 : status = 1;
            const { data } = await axios.put(`/api/v1/weddingRegister/status-update/${id}`, { status: status }, {
                headers: {
                    Authorization: auth.token
                }
            });
            if (data?.success) {
                alert(data?.message);
                window.location.reload()
            }
        } catch (error) {
            alert(error?.response?.data?.message)
        }
    }

    const deleteWedding = async (id, file) => {
        try {
            const { data } = await axios.post(`/api/v1/weddingRegister/delete/${id}`, { file: file }, {
                headers: {
                    Authorization: auth.token
                }
            })
            if (data?.success) {
                alert(data?.message);
                window.location.reload()
            }
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }


    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const formattedDay = day < 10 ? `0${day}` : day;
        const formattedMonth = month < 10 ? `0${month}` : month;
        return `${formattedDay}/${formattedMonth}/${year}`;
    };

    useEffect(() => {
        gettingwedding();
        // eslint-disable-next-line
    }, []);
    let img;

    return (
        <>
            <AdminMenu />
            <main id="main" className="main">
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Wedding Registraction</h5>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Father Name</th>
                                                <th>Grandfather Name</th>
                                                <th>Mobile Number</th>
                                                <th>Address</th>
                                                <th>Date of Birth</th>
                                                <th>Image</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {wedding?.map((c, i) => (
                                                <>
                                                    <div style={{ display: 'none' }}>
                                                        {img = c.Image.split(" ")}
                                                    </div>
                                                    <td key={c.id}>{i + 1}</td>
                                                    <tr key={i}>
                                                        <td>Groom</td>
                                                        <td>{c.groomName}</td>
                                                        <td>{c.groomFatherName}</td>
                                                        <td>{c.groomGrandFatherName}</td>
                                                        <td>{c.groomMobile}</td>
                                                        <td>{c.groomAddress}</td>
                                                        <td>{formatDate(c.groomDOB)}</td>
                                                        <td><img src={`/static/weddingRegister/${img[0]}`} width={70} alt='groom' /></td>
                                                        <td><button type='button' className='btn btn-primary' onClick={() => updateStatus(c.id, c.status)}>{c.status ? "Activate" : "DeActivate"}</button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bride</td>
                                                        <td>{c.BrideName}</td>
                                                        <td>{c.BrideFatherName}</td>
                                                        <td>{c.BrideGrandFatherName}</td>
                                                        <td>{c.BrideMobile}</td>
                                                        <td>{c.BrideAddress}</td>
                                                        <td>{formatDate(c.BrideDOB)}</td>
                                                        <td><img src={`/static/weddingRegister/${img[1]}`} alt='Bride' width={70} /></td>
                                                        <td><button type='button' className='btn btn-danger' onClick={() => deleteWedding(c.id, img)}>Delete</button></td>
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

export default AdminWeddingRegisterYearPage
