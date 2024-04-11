import React, { useEffect, useState } from 'react'
import AdminMenu from '../../components/Layoout/AdminMenu'
import axios from 'axios';
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';

const AdminSlider = () => {
    const [slider, setSlider] = useState([]);
    const [auth] = useAuth()
    const navigate = useNavigate();

    const sli = async () => {
        try {
            const { data } = await axios.get('/api/v1/slider/get-admin-slider', {
                headers: {
                    "Authorization": auth.token
                }
            });
            if (data?.success) {
                setSlider(data?.results);
            }
        } catch (error) {
            console.log(error?.response?.data?.message);
        }
    }

    const updateStatusSlider = async (status, id) => {
        try {
            const { data } = await axios.put(`/api/v1/slider/update-status-slider/${id}`,
                { status: !status }, {
                headers: {
                    "Authorization": auth.token
                }
            })
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
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1; 
        const year = date.getFullYear();
        const formattedDay = day < 10 ? `0${day}` : day;
        const formattedMonth = month < 10 ? `0${month}` : month;
        return `${formattedDay}-${formattedMonth}-${year}`;
    };

    const deleteSlider = async (id) => {
        try {
            const {data} = await axios.delete(`/api/v1/slider/delete-slider/${id}`, {
                headers: {
                    "Authorization": auth.token
                }
            });
            if (data?.success) {
                alert(data?.message);
                window.location.reload();
            }
        } catch (error) {
            console.log(error?.response?.data?.message);
        }
    }

    useEffect(() => {
        sli()
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <AdminMenu />
            <main id="main" className="main bg-light">
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Slider</h5>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Year</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Number of Wedding</th>
                                                <th scope="col">Image</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {slider?.map((c, i) => (
                                                <tr key={i}>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>{c.Year}</td>
                                                    <td>{formatDate(c.Dates)}</td>
                                                    <td>{c.SrNo}</td>
                                                    <td><img src={require(`../../img/sliders/${c.path}`)} width={150} height={120} alt='Slider' /></td>
                                                    <td>
                                                        <button className='btn btn-primary m-2' onClick={()=> navigate(`/dashboard/admin/update_slider/${c.id}`)} >Update</button> 
                                                        <button className='btn btn-primary m-2' onClick={() => updateStatusSlider(c.status, c.id)}>{c.status ? "Active" : "Deactive"}</button> 
                                                        <button className='btn btn-danger m-2' onClick={() => deleteSlider(c.id)}>Delete</button> 
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

export default AdminSlider
