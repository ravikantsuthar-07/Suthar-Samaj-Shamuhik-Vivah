import React, { useState } from 'react'
import Layout from '../components/Layoout/Layout';
import under from '../img/Under.png'
import axios from 'axios';

const ContactPage = () => {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleContact = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`/api/v1/contact/create`, { FName: fName, LName: lName, Email: email, Subject: subject, Message: message });
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

    return (
        <Layout>
            <div id='contactForm' >
                <h1 className="mb-3">सवाल करें</h1>
                <img src={under} className='under' alt='under' />
                <div className="row">
                    <div className="col-md-6 col-12 col-sm-12 col-lg-6">
                        <div className="container ">
                            <div className="row justify-content-center">
                                <div className="col-lg-9">
                                    <form onSubmit={handleContact} method='post' style={{ textAlign: 'start' }}>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label htmlFor="your-name" className="form-label">नाम</label>
                                                <input type="text" className="form-control" id="your-name" name="your-name" value={fName} onChange={(e) => setFName(e.target.value)} required />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="your-surname" className="form-label">उपनाम</label>
                                                <input type="text" className="form-control" id="your-surname" name="your-surname" required value={lName} onChange={(e) => setLName(e.target.value)} />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="your-email" className="form-label">ईमेल</label>
                                                <input type="email" className="form-control" id="your-email" name="your-email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="your-subject" className="form-label">विषय</label>
                                                <input type="text" className="form-control" id="your-subject" name="your-subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="your-message" className="form-label">संदेश</label>
                                                <textarea className="form-control" id="your-message" name="your-message" rows="5" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                            </div>
                                            <div className="col-12">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <button type="submit" className="btn btn-outline-danger w-50 fw-bold" >भेजें</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 col-sm-12 col-lg-6 mt-5">
                        <div className="mapouter m-10" style={{ position: "relative", textAlign: "right", height: "400px", width: "450px" }}>
                            <div className="gmap_canvas" style={{ overflow: "hidden", background: "none !important", height: "400px", width: "450px" }}>
                                <iframe title='Shree Vishvakarma Suthar Samaj Samuhik Vivah Samiti Bikaner' width="450" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Shree+Vishvakarma+Suthar+Samaj+Samuhik+Vivah+Samiti+Bikaner&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default ContactPage
