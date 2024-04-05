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
        const {data } = await axios.get(`/api/v1/team/get-admin-team`, {
            headers:{
                "Authorization": auth.token
            }
        });
        if (data?.success) {
            setTeam(data?.results);
        } 
    }
    
    const updateStatusTeam = async (sta, id) => {
        if (sta === 0) {
            sta = 1;
        } else {
            sta = 0;
        }
        console.log(sta);
        await axios.put(`/api/v1/team/update-status-team/${id}`, 
        { status: sta }, {
            headers:{
                "Authorization": auth.token
            }
        });
    }

    const deleteTeamMember = async (id) => {
        await axios.delete(`/api/v1/team/delete-team/${id}`, {
            headers:{
                "Authorization": auth.token
            }
        });
    }

    useEffect(()=> {
        teamData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    
    return (
        <>
            <AdminMenu />
            <main id="main" className="main">
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
                                                    <td><img src={require(`../../img/team/${t.img}`)} width={150} height={120} alt='team' /></td>
                                                    <td>
                                                        <button className='btn btn-primary m-2' onClick={() => navigate(`/dashboard/admin/update_team/${t.id}`)} >Update</button>
                                                        <button className='btn btn-primary m-2' onClick={() => updateStatusTeam(t.status, t.id)}>{t.status ? "Active" : "Deactive"}</button>
                                                        <button className='btn btn-danger m-2' onClick={() => deleteTeamMember(t.id)}>Delete</button>
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

export default AdminTeams
