import React from 'react'
import Layout from '../components/Layoout/Layout'
import Frist from '../img/1.jpg';

const GalleryYear = () => {
    return (
        <Layout>
            <section id="gallery">
                <h1>फोटो 2023 सामूहिक विवाह</h1>
                <hr />
                <div className="row ">
                    <div className="col-md-4 col-sm-12">
                        <div className="card infoCard">
                            <img src={Frist} className="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="card infoCard">
                            <img src={Frist} className="card-img-top" alt="..." />
                        </div>
                    </div>      
                    <div className="col-md-4 col-sm-12">
                        <div className="card infoCard">
                            <img src={Frist} className="card-img-top" alt="..." />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default GalleryYear
