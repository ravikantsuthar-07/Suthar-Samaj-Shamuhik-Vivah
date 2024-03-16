import React, { useEffect, useState } from 'react'
import AdminMenu from '../../components/Layoout/AdminMenu'
import axios from 'axios';
import { useAuth } from '../../context/auth';

const AdminContact = () => {
    const [contact, setContact] = useState([]);
    const [auth] = useAuth();

    const contactData = async () => {
        const {data} = await axios.get(`/api/v1/contact/get-contact`, {
            headers:{
                "Authorization": auth.token
            }
        });
        if (data?.success) {
            setContact(data?.results);
        }
    }

    useEffect(()=>{
        contactData();
    })
    return (
        <>
            <AdminMenu />

            <main id="main" className="main">

                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Contact</h5>

                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Subject</th>
                                                <th scope="col">Message</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {contact?.map((c, i) => (
                                                <tr key={i}>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>{c.Name}</td>
                                                    <td>{c.Email}</td>
                                                    <td>{c.Subject}</td>
                                                    <td>{c.Message}</td>
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

export default AdminContact
