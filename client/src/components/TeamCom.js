import React, { useEffect, useState } from 'react'
import under from '../img/Under.png';
import axios from 'axios';
const TeamCom = () => {
    const [team, setTeam] = useState([]);

    const teamData = async () => {
        const { data } = await axios.get(`/api/v1/team/get-team`);
        if (data?.success) {
            setTeam(data.results);
        } 
    }

    useEffect(() => {
        teamData();
    }, [])

    return (
        <section id="teamCom">
            <h1>सदस्य</h1>
            <img className='under' src={under} alt="" />
            <div className="row ">
                {team?.map((t, i) => (
                    <div className="col-md-3 col-sm-6 col-6">
                        <div className="card infoCard team">
                            <img src={require(`../img/team/${t.img}`)} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{t.Name}</h5>
                                <h5 className="card-text">{t.PostOn}</h5>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default TeamCom