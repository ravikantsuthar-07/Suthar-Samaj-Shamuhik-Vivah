import React, { useEffect, useState } from 'react';
import AdminMenu from '../../components/Layoout/AdminMenu';
import axios from 'axios';
import { useAuth } from '../../context/auth';

const AdminAdvertisement = () => {
    const [advertisement, setAdvertisement] = useState([]);
    const [auth] = useAuth();

    const getAdvertisementData = async () => {
        try {
            const { data } = await axios.get(`/api/v1/advertisement/get-admin`, {
                headers: {
                    "Authorization": auth.token
                }
            });
            if (data?.success) {
                setAdvertisement(data?.results);
            }
        } catch (error) {
            alert(error?.response?.data?.message)
        }
    }

    const deleteSutradharBook = async (id, file) => {
        try {
            const { data } = await axios.post(`/api/v1/advertisement/delete/${id}`, { file: file }, {
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
        getAdvertisementData();
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
                                    <h5 className="card-title">Advertisement </h5>
                                    {/* <div className='add_book'>
                                        <button className='btn btn-primary' onClick={() => navigate('/dashboard/admin/add_book')}>Add Book</button>
                                    </div> */}
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Title</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Mobile</th>
                                                <th scope="col">Template</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {advertisement?.map((a, i) => (
                                                <tr key={i}>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>{a.title}</td>
                                                    <td>{a.description}</td>
                                                    <td>{a.mobile}</td>
                                                    <td><img src={`/static/${a.image}`} alt='template' /></td>
                                                    <td>
                                                        <button className='btn btn-danger m-2' onClick={() => deleteSutradharBook(a.id, a.image)}>Delete</button>
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
    );
}

export default AdminAdvertisement;
