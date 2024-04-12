import React, { useEffect, useState } from 'react'
import AdminMenu from '../../components/Layoout/AdminMenu'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../context/auth';

const AdminUpdateSlider = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [year, setYear] = useState("");
    const [img, setImg] = useState("");
    const [srNo, setSrNo] = useState("");
    const [date, setDate] = useState("");
    const [auth] = useAuth();

    const getSingleSlider = async () => {
        try {
            const { data } = await axios.get(`/api/v1/slider/get-single-slider/${params.id}`);
            if (data?.success) {
                setYear(data?.results[0].Year);
                setImg(data?.results[0].path);
                setSrNo(data?.results[0].SrNo);
                setDate(formatDate(data?.results[0].Dates));
            }
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            const slider = new FormData();
            slider.append('year', year);
            slider.append('img', img);
            slider.append('date', date);
            slider.append('SrNo', srNo);

            const { data } = await axios.put(`/api/v1/slider/update-slider/${params.id}`,
                slider,
                {
                    headers: {
                        "Authorization": auth.token
                    }
                }
            );

            if (data?.success) {
                alert(data?.message);
                navigate(`/dashboard/admin/slider/`);
            } else {
                alert(data?.message);
                navigate(`/dashboard/admin/update_slider/${params.id}`);
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
        return `${year}-${formattedMonth}-${formattedDay}`;
    };

    useEffect(() => {
        getSingleSlider();
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
                                    <h5 className="card-title">स्लाइडर जोड़ें</h5>
                                    <form method='post' onSubmit={handleCreate} encType="multipart/form-data">
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Number Of wedding</label>
                                            <div className="col-sm-10">
                                                <input type="text" name='SrNo' value={srNo} onChange={(e) => setSrNo(e.target.value)} className="form-control" id="inpuSrNo" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Date</label>
                                            <div className="col-sm-10">
                                                <input type="date" name='Dates' onChange={(e) => setDate(e.target.value)} value={date} className="form-control" id="inputDate" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Year</label>
                                            <div className="col-sm-10">
                                                <input type="text" name='year' value={year} placeholder='शादी का वर्ष दर्ज करें' className="form-control" id="inputText" onChange={(e) => setYear(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Image</label>
                                            <div className="col-sm-10">
                                                <input type="file" name='img' accept='image/*' onChange={(e) => setImg(e.target.files[0])} className="form-control" id="inputEmail" />
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                            <button type="reset" className="btn btn-secondary">Reset</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default AdminUpdateSlider
