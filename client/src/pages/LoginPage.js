import React , {useState} from 'react'
import Layout from '../components/Layoout/Layout'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useAuth } from '../context/auth';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useAuth();

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/api/v1/rgister/login', { email, password });
            console.log("@@@@RAvi");
            if (res.data.success) {
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token
                })
                localStorage.setItem('auth', JSON.stringify(res.data))
                navigate("/dashboard/admin")
            } else {
                console.log(res.data.message);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Layout>
            <div id='registerUser' className="container">
                <form method='post' onSubmit={handleSubmit}>
                    <div className="row jumbotron box8">
                        <div className="col-sm-12 mb-4">
                            <h2 className="text-center text-info">Admin Login</h2>
                        </div>

                        <div className="col-sm-6 form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control" 
                                name="email" 
                                id="email" 
                                placeholder="Enter your email."
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="pass">Password</label>
                            <input 
                                type="Password" 
                                name="password" 
                                className="form-control" 
                                id="pass" 
                                placeholder="Enter your password." 
                                onChange={(e) => setPassword(e.target.value)}
                                required />
                        </div>


                        <div className="col-sm-12 form-group mb-0">
                            <button className="btn btn-primary float-right">Login</button>
                        </div>

                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default LoginPage
