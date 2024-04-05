import React, { useEffect, useState } from 'react'
import AdminMenu from '../../components/Layoout/AdminMenu'
import axios from 'axios';
import { useAuth } from '../../context/auth';

const AdminBooks = () => {
    const [book, setBook] = useState([]);
    const [auth] = useAuth();

    const getBookData = async () => {
        const { data } = await axios.get(`/api/v1/sutradhar/get-admin-book`, {
            headers: {
                "Authorization": auth.token
            }
        });
        if (data?.success) {
            setBook(data?.results);
        }
    }

    const deleteSutradharBook = async (id) => {
        await axios.delete(`/api/v1/team/delete-team/${id}`, {
            headers: {
                "Authorization": auth.token
            }
        });
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
                                                    <td><img src={require(`../../sutradhar${b.file}`)} width={150} height={120} alt='team' /></td>
                                                    <td>
                                                        <button className='btn btn-danger m-2' onClick={() => deleteSutradharBook(b.id)}>Delete</button>
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
