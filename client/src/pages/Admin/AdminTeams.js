import React, { useEffect, useState } from 'react'
import AdminMenu from '../../components/Layoout/AdminMenu'
import axios from 'axios';
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';

const AdminTeams = () => {
    const [team, setTeam] = useState([]);
    const [auth] = useAuth();
    const navigate = useNavigate();

    const teamData = async () => {
        const { data } = await axios.get(`https://suthar-samaj-shamuhik-vivah.onrender.com/api/v1/team/get-admin-team`, {
            headers: {
                "Authorization": auth.token
            }
        });
        if (data?.success) {
            setTeam(data?.results);
        }
    }

    const updateStatusTeam = async (sta, id) => {
        try {
            if (sta === 0) {
                sta = 1;
            } else {
                sta = 0;
            }
            const { data } = await axios.put(`https://suthar-samaj-shamuhik-vivah.onrender.com/api/v1/team/update-status-team/${id}`,
                { status: sta }, {
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

    const deleteTeamMember = async (id) => {
        try {
            const { data } = await axios.delete(`https://suthar-samaj-shamuhik-vivah.onrender.com/api/v1/team/delete-team/${id}`, {
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
        teamData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <AdminMenu />
            <main id="main" className="main" style={{ background: '#fff', overflowX: 'visible' }}>
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Team </h5>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Post</th>
                                                <th scope="col">Mobile</th>
                                                <th scope="col">Address</th>
                                                <th scope="col">Image</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {team?.map((t, i) => (
                                                <tr key={i}>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>{t.Name}</td>
                                                    <td>{t.PostOn}</td>
                                                    <td>{t.Mobile}</td>
                                                    <td>{t.Address}</td>
                                                    <td><img src={`https://suthar-samaj-shamuhik-vivah.onrender.com/static/team/${t.img}`} width={100} height={80} alt='team' /></td>
                                                    <td>
                                                        <button className='btn btn-primary m-1' onClick={() => navigate(`/dashboard/admin/update_team/${t.id}`)} >Update</button>
                                                        <button className='btn btn-primary m-1' onClick={() => updateStatusTeam(t.status, t.id)}>{t.status ? "Active" : "Deactive"}</button>
                                                        <button className='btn btn-danger m-1' onClick={() => deleteTeamMember(t.id)}>Delete</button>
                                                    </td>
                                                    {console.log(t.img)}
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

export default AdminTeams
