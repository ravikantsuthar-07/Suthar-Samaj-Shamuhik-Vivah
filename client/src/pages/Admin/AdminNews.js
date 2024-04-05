import React, { useEffect, useState } from 'react'
import AdminMenu from '../../components/Layoout/AdminMenu'
import axios from 'axios';
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';

const AdminNews = () => {
    const [news, setNews] = useState([]);
    const [auth] = useAuth()
    const navigate = useNavigate();

    const getNews = async () => {
        try {
            const { data } = await axios.get('/api/v1/news/get-admin-news', {
                headers: {
                    "Authorization": auth.token
                }
            });
            if (data.success) {
                setNews(data.results)
            }
        } catch (error) {
            console.log(error);
        }
    }


    // const updateStatusNews = async (status, id) => {
    //     try {
    //         const { data } = await axios.put(`/api/v1/slider/update-status-slider/${id}`,
    //             { status: !status }, {
    //             headers: {
    //                 "Authorization": auth.token
    //             }
    //         })
    //         if (data.success) {
    //             window.location.reload();
    //         }
    //     } catch (error) {

    //     }
    // }

    const deleteNews = async (id) => {
        try {
            const {data} = await axios.delete(`/api/v1/slider/delete-news/${id}`, {
                headers: {
                    "Authorization": auth.token
                }
            });
            if (data.success) {
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getNews();
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <AdminMenu />
            <main id="main" className="main">
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">News</h5>

                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Title</th>
                                                <th scope="col">Short Description</th>
                                                <th scope="col">Long Description</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Image</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {news?.map((n, i) => (
                                                <tr key={i}>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>{n.Title}</td>
                                                    <td>{n.S_Description}</td>
                                                    <td>{n.L_Description}</td>
                                                    <td>{n.Time}</td>
                                                    <td><img src={require(`../../img/news/${n.Image}`)} width={150} height={120} alt='News' /></td>
                                                    <td>
                                                        <button className='btn btn-primary m-2' onClick={()=> navigate(`/dashboard/admin/update_news/${n.id}`)} >Update</button> 
                                                        {/* <button className='btn btn-primary m-2' onClick={() => updateStatusNews(n.status, n.id)}>{n.status ? "Active" : "Deactive"}</button>  */}
                                                        <button className='btn btn-danger m-2' onClick={() => deleteNews(n.id)}>Delete</button> 
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

export default AdminNews
