import React, { useEffect, useState } from 'react'
import AdminMenu from '../../components/Layoout/AdminMenu'
import axios from 'axios';
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';

const AdminBooks = () => {
    const [book, setBook] = useState([]);
    const [auth] = useAuth();
    const navigate = useNavigate();

    const getBookData = async () => {
        const { data } = await axios.get(`https://suthar-samaj-shamuhik-vivah.onrender.com/api/v1/sutradhar/get-admin-book`, {
            headers: {
                "Authorization": auth.token
            }
        });
        if (data?.success) {
            setBook(data?.results);
        }
    }

    const deleteSutradharBook = async (id, file) => {
        try {
            const { data } = await axios.post(`https://suthar-samaj-shamuhik-vivah.onrender.com/api/v1/sutradhar/delete/${id}`, { file: file }, {
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
            alert(error?.response?.data?.message)
        }
    }

    useEffect(() => {
        getBookData();
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
                                    <h5 className="card-title">Sutradhar Book </h5>
                                    <div className='add_book'>
                                        <button className='btn btn-primary' onClick={() => navigate('/dashboard/admin/add_book')}>Add Book</button>
                                    </div>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Year</th>
                                                <th scope="col">File</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {book?.map((b, i) => (
                                                <tr key={i}>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>{b.year}</td>
                                                    <td>{b.file}</td>
                                                    <td>
                                                        <button className='btn btn-danger m-2' onClick={() => deleteSutradharBook(b.id, b.file)}>Delete</button>
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

export default AdminBooks
