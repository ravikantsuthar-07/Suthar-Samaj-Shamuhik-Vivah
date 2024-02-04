import React from 'react'
import Frist from '../img/1.jpg'
import under from '../img/Under.png';

const InformationCom = () => {
    return (
        <section id="info">
            <h1>आयोजित सामूहिक विवाह</h1>
            <img className='under' src={under} alt="" />
            <div className="row ">
                <div className="col-md-4 col-sm-12">
                    <div className="card infoCard">
                        <img src={Frist} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">सामूहिक विवाह - 2023</h5>
                            <a href="/" className="btn btn-outline-danger">अधिक जानकारी</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="card infoCard">
                        <img src={Frist} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">सामूहिक विवाह - 2022</h5>
                            <a href="/" className="btn btn-outline-danger">अधिक जानकारी</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="card infoCard">
                        <img src={Frist} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">सामूहिक विवाह - 2021</h5>
                            <a href="/" className="btn btn-outline-danger">अधिक जानकारी</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InformationCom
