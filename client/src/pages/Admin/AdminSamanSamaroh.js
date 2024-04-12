import React, { useEffect, useState } from 'react'
import AdminMenu from '../../components/Layoout/AdminMenu';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const AdminSamanSamaroh = () => {
    const navigate = useNavigate()
    const [saman, setSaman] = useState([]);

    const gettingSamanYear = async () => {
        try {
            const { data } = await axios.get('/api/v1/sammanit/get-year');

            if (data?.success) {
                setSaman(data?.results);
            }
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }

    useEffect(() => {
        gettingSamanYear();
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
                                    <h5 className="card-title">Saman Samaroh</h5>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Year</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {saman?.map((c, i) => (
                                                <tr key={i}>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>{c.year}</td>
                                                    <td><button className='btn btn-primary' onClick={() => navigate(`/dashboard/admin/saman/${c.year}`)}>See Samanit in {c.year}</button></td>
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

export default AdminSamanSamaroh
