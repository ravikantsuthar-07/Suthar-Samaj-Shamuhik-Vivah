import React, { useEffect, useState } from 'react'
import AdminMenu from '../../components/Layoout/AdminMenu'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../../context/auth'

const AdminKarmawatiList = () => {
    const params = useParams();
    const [karmawati, setKarmawati] = useState([]);
    const [auth] = useAuth()

    const updateStatus = async (id, status) => {
        try {
            if (status) {
                status = 1;
            } else { 
                status = 0;
            }
            const { data } = await axios.put(`/api/v1/karmawati/update-status/${id}`, { status: status }, {
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
            const { data } = await axios.get(`/api/v1/karmawati/admin-get/${params.year}`, {
                headers: {
                    Authorization: auth.token
                }
            });
            if (data?.success) {
                setKarmawati(data?.results);
            }
        } catch (error) {
            console.log(error?.response?.data?.message);
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
                                    <h5 className="card-title">सदस्य जिसने {params.year} में कर्मवती पेंशन ली</h5>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Husband Name</th>
                                                <th>Address</th>
                                                <th>Mobile Number</th>
                                                <th>Image</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {karmawati?.map((c, i) => (
                                                <tr key={i}>
                                                    <td>{i + 1}</td>
                                                    <td>{c.name}</td>
                                                    <td>{c.wifeof}</td>
                                                    <td>{c.address}</td>
                                                    <td>{c.mobile}</td>
                                                    <td><img src={require(`../../img/karmawati/${c.img}`)} width={50} height={50} alt='karmawati' /></td>
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

export default AdminKarmawatiList
