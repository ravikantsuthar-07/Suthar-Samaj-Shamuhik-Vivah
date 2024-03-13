import React from 'react'
import Layout from '../../components/Layoout/Layout.js'
import {useAuth} from '../../context/auth.js'
import AdminMenu from '../../components/Layoout/AdminMenu.js'


const AdminDashboard = () => {
    const [auth] = useAuth()
    return (
        <Layout>
            <div className="container-fluid " style={{margin: '100px'}}>
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9">
                        <div className="card  w-75 p-3">
                            <h3>Admin Name: {auth.user[0].name}</h3>
                            <h3>Admin Email: {auth.user[0].email}</h3>
                            <h3>Admin Contact: {auth.user[0].phone}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AdminDashboard