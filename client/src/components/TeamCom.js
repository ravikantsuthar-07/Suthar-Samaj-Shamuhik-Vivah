import React from 'react'
import under from '../img/Under.png';
import Frist from '../img/1.jpg';
const TeamCom = () => {
    return (
        <section id="teamCom">
            <h1>सदस्य</h1>
            <img className='under' src={under} alt="" />
            <div className="row ">
                <div className="col-md-3 col-sm-6 col-6">
                    <div className="card infoCard team">
                        <img src={Frist} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">श्री कन्हैयालाल बरड़वा</h5>
                            <h5 className="card-title">मंत्री</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-6">
                    <div className="card infoCard team">
                        <img src={Frist} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">श्री हनुमान प्रसाद डोयल</h5>
                            <h5 className="card-title">अध्यक्ष</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-6">
                    <div className="card infoCard team">
                        <img src={Frist} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">श्री शिवप्रकाश डोयल</h5>
                            <h5 className="card-title">मंत्री</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-6">
                    <div className="card infoCard team">
                        <img src={Frist} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">श्री छगनलाल छड़िया </h5>
                            <h5 className="card-title">कोषाध्यक्ष</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamCom