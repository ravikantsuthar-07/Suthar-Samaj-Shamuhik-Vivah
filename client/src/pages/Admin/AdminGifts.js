import React, { useEffect, useState } from 'react'
import AdminMenu from '../../components/Layoout/AdminMenu'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const AdminGifts = () => {
    const navigate = useNavigate()
    const [wedding, setWedding] = useState([]);
    const gettingGiftWedding = async () => {
        try {
            const { data } = await axios.get('/api/v1/wedding/get-Wedding-year');
            if (data?.success) {
                setWedding(data?.results);
            }
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }

    useEffect(() => {
        gettingGiftWedding();
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
                                    <h5 className="card-title">Gift</h5>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Year</th>
                                                <th scope="col">Image</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {wedding?.map((c, i) => (
                                                <tr key={i}>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>{c.year}</td>
                                                    <td><img src={`/static/sliders/${c.path}`} width={120} height={50} alt={c.id} /></td>
                                                    <td><button className='btn btn-primary' onClick={() => navigate(`/dashboard/admin/gifts_year/${c.year}`)}>See Wedding in {c.year}</button></td>
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

export default AdminGifts
