import React from 'react'
import Layout from '../components/Layoout/Layout'
import under from '../img/Under.png';
import Frist from '../img/1.jpg'

const NewsPage = () => {
    return (
        <Layout>
            <section id="news">
                <h1>समाचार</h1>
                <img className='under' src={under} alt="" />
                <div className="row ">
                    <div className="col-md-4 col-sm-12">
                        <div className="card infoCard">
                            <img src={Frist} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">सामूहिक विवाह - 2023</h5>
                                <h6>01-02-2024</h6>
                                <a href="/wedding/1" className="btn btn-outline-danger">अधिक जानकारी</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="card infoCard">
                            <img src={Frist} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">सामूहिक विवाह - 2022</h5>
                                <a href="/wedding/1" className="btn btn-outline-danger">अधिक जानकारी</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="card infoCard">
                            <img src={Frist} className="card-img-top" alt="..." />
                            <div className="card-body" >
                                <h5 className="card-title">सामूहिक विवाह - 2021</h5>
                                <a href="/wedding/1" className="btn btn-outline-danger">अधिक जानकारी</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default NewsPage
