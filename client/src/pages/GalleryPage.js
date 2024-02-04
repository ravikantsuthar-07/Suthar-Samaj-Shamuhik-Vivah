import React from 'react'
import Layout from '../components/Layoout/Layout'
import Frist from '../img/1.jpg'
import Under from '../img/Under.png';

const GalleryPage = () => {
    return (
        <Layout>
            <section id="gallery">
                <h1>गैलरी</h1>
                <img className='under' src={Under} alt="" />
                <div className="row ">
                    <div className="col-md-4 col-sm-12">
                        <div className="card infoCard">
                            <img src={Frist} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">सामूहिक विवाह - 2023</h5>
                                <a href="/gallery/1" className="btn btn-danger">अधिक जानकारी</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="card infoCard">
                            <img src={Frist} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">सामूहिक विवाह - 2022</h5>
                                <a href="/gallery/2" className="btn btn-danger">अधिक जानकारी</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="card infoCard">
                            <img src={Frist} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">सामूहिक विवाह - 2021</h5>
                                <a href="/gallery/3" className="btn btn-danger">अधिक जानकारी</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default GalleryPage
