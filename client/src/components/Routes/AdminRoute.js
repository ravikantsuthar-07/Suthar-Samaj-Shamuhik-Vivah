import { useState, useEffect } from 'react'
import { useAuth } from '../../context/auth'
import { Outlet } from 'react-router-dom';
import '../../assets/vendor/bootstrap/css/bootstrap.min.css'
import '../../assets/vendor/bootstrap-icons/bootstrap-icons.css'
import '../../assets/vendor/boxicons/css/boxicons.min.css'
import '../../assets/vendor/quill/quill.snow.css'
import '../../assets/vendor/quill/quill.bubble.css'
import '../../assets/vendor/remixicon/remixicon.css'
import '../../assets/vendor/simple-datatables/style.css'
import '../../assets/css/style.css'
import axios from 'axios'
import Spinner from '../Spinner';

export default function AdminRoute() {
    const [ok, setOk] = useState(false);
    const [auth] = useAuth()

    useEffect(() => {
        const authCheck = async () => {
            const res = await axios.get('/api/v1/rgister/admin-auth',
                {
                    headers: {
                        "Authorization": auth?.token
                    }
                }
            )
            if (res.data.ok) {
                setOk(true)
            } else {
                setOk(false)
            }
        }
        if (auth?.token) authCheck()
    }, [auth?.token])
    return ok ? <Outlet /> : <Spinner path='' />
}