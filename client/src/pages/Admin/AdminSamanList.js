import React, { useEffect, useState } from 'react'
import AdminMenu from '../../components/Layoout/AdminMenu'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../../context/auth'

const AdminSamanList = () => {
    const params = useParams();
    const [saman, setSaman] = useState([]);
    const [auth] = useAuth()

    const gettingSamanYearVise = async () => {
        try {
            const { data } = await axios.get(`/api/v1/sammanit/get-admin/${params.year}`, {
                headers:{
                    Authorization: auth.token
                }
            })
            if (data?.success) {
                setSaman(data?.results);
            }
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }

    const updateStatus = async (id, status) => {
        try {
            if (status) {
                status = 0;
            } else {
                status = 1
            }
            const { data } = await axios.put(`/api/v1/sammanit/update-status/${id}`, { status: status }, {
                headers: {
                    Authorization: auth.token,
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

    useEffect(() => {
        gettingSamanYearVise();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <AdminMenu />
            <main id="main" className="main"  style={{overflowX: 'auto'}}>
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Varist Nagrik Saman Samaroh</h5>
                                    <table className="table" style={{overflowX: 'auto'}}>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Father Name</th>
                                                <th>Date of Birth</th>
                                                <th>Mobile Number</th>
                                                <th>Address</th>
                                                <th>Image</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {saman?.map((c, i) => (
                                                <tr key={i}>
                                                    <td>{i+1}</td>
                                                    <td>{c.name}</td>
                                                    <td>{c.FName}</td>
                                                    <td>{c.Date_of_birth}</td>
                                                    <td>{c.Mobile}</td>
                                                    <td>{c.address}</td>
                                                    <td><img src={require(`../../img/sammanit/${c.Image}`)} alt='Saman' width={50} height={50} /></td>
                                                    <td><button type='button' className='btn btn-primary' onClick={() => updateStatus(c.id, c.status)}>{c.status ? "Activate" : "DeActivate"}</button></td>
                                                </tr>
                                            )) }
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

export default AdminSamanList
