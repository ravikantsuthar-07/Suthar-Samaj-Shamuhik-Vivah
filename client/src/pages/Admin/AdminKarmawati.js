import React, { useEffect, useState } from 'react'
import AdminMenu from '../../components/Layoout/AdminMenu'
import { useAuth } from '../../context/auth'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const AdminKarmawati = () => {
    const navigate = useNavigate()
    const [karmawati, setKarmawati] = useState([]);
    const [auth] = useAuth();

    const gettingKarmawati = async () => {
        try {
            const { data } = await axios.get('https://suthar-samaj-shamuhik-vivah.onrender.com/api/v1/karmawati/admin-get-year', {
                headers: {
                    "Authorization": auth.token
                }
            });

            if (data?.success) {
                setKarmawati(data?.results);
            }
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }

    useEffect(() => {
        gettingKarmawati();
        // eslint-disable-next-line
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
                                    <h5 className="card-title">Karmavati Pansior</h5>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Year</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {karmawati?.map((c, i) => (
                                                <tr key={i}>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>{c.year}</td>
                                                    <td><button className='btn btn-primary' onClick={() => navigate(`/dashboard/admin/karmawati/${c.year}`)}>See Wedding in {c.year}</button></td>
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

export default AdminKarmawati
