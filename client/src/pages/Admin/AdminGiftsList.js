import React, { useEffect, useState } from 'react'
import AdminMenu from '../../components/Layoout/AdminMenu'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../../context/auth'

const AdminGiftsList = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [gift, setGift] = useState([]);
    const [auth] = useAuth()

    const gettingweddingYear = async () => {
        try {
            const { data } = await axios.get(`/api/v1/wedding/gifts/${params.year}`)
            if (data?.success) {
                setGift(data?.results);
            }
        } catch (error) {
            if (error?.response?.data?.message === `Not Gifts is Added in ${params.year} year`) {
                navigate('/dashboard/admin/gift');
            }
            alert(error?.response?.data?.message);
        }
    }

    const deleteGiftsss = async (id) => {
        try {
            const { data } = await axios.delete(`/api/v1/wedding/deleteGift/${id}`, {
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
        // eslint-disable-next-line
    }, [params.year]);

    return (
        <>
            <AdminMenu />
            <main id="main" className="main">
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Gifts</h5>

                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Quanty</th>
                                                <th>Price</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {gift?.map((c, i) => (
                                                <tr>
                                                    <td key={c.id}>{i + 1}</td>
                                                    <td>{c.Name}</td>
                                                    <td>{c.Numbers}</td>
                                                    <td>{c.Price}</td>
                                                    <td>
                                                        <button type='button' className='btn btn-primary' onClick={() => navigate(`/dashboard/admin/gifts_update/${c.id}`)}>Update</button>
                                                        <button type='button' className='btn btn-danger' onClick={() => deleteGiftsss(c.id)}>Delete</button>
                                                    </td>
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

export default AdminGiftsList
