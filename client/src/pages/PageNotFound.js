import React from 'react'
import PageNot from '../assets/img/not-found.svg'
import { NavLink } from 'react-router-dom'
import Layout from '../components/Layoout/Layout'

const PageNotFound = () => {
    return (
        <Layout>
            <main style={{marginTop: '50px'}}>
                <div className="container">
                    <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
                        <h1 style={{overflow: 'hidden'}}>404</h1>
                        <h2>The page you are looking for doesn't exist.</h2>
                        <NavLink className="btn btn-primary" to="/">Back to home</NavLink>
                        <img src={PageNot} className="img-fluid py-5" alt="Page Not Found" />
                        <div className="credits">
                            Designed by Ravikant Suthar
                        </div>
                    </section>
                </div>
            </main>
        </Layout>
    )
}

export default PageNotFound
