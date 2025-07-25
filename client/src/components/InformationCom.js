import React, { useEffect, useState } from 'react'
import under from '../img/Under.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const InformationCom = () => {
    const [info, setInfo] = useState([]);
    const navigate = useNavigate()

    const getWeddings = async () => {
        try {
            const { data } = await axios.get('https://suthar-samaj-shamuhik-vivah.onrender.com/api/v1/wedding/get-Wedding-year');
            if (data?.success) {
                setInfo(data?.results)
            }
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }

    useEffect(() => {
        getWeddings();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <section id="infos">
            <h1>आयोजित सामूहिक विवाह</h1>
            <img className='under' src={under} alt="" />
            <div className="row ">
                {info.map((info, i) => ( 
                <div className="col-md-4 col-sm-12" key={i}>
                    <div className="card infoCard">
                        <img src={`https://suthar-samaj-shamuhik-vivah.onrender.com/static/sliders/${info.path}`} className="card-img-top" alt="Wedding" height={170} />
                        <div className="card-body">
                            <h5 className="card-title">सामूहिक विवाह - {info.year}</h5>
                            <button onClick={() => navigate(`/wedding/${info.year}`)} className="btn btn-outline-danger">अधिक जानकारी</button>
                        </div>
                    </div>
                </div>
                ))}

            </div>
        </section>
    )
}

export default InformationCom
