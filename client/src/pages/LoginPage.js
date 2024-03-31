import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useAuth } from '../context/auth';
import logo from '../assets/img/logo.png';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useAuth();

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/api/v1/rgister/login', { email, password });
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

        <main style={{background: '#fff'}}>
            <div class="container">

                <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                                <div class="d-flex justify-content-center py-4">
                                    <Link href="/" class="logo d-flex align-items-center w-auto">
                                        <img src={logo} alt="" />
                                        <span class="d-none d-lg-block" style={{ overflow: 'hidden' }}>सामूहिक विवाह</span>
                                    </Link>
                                </div>

                                <div class="card mb-3">

                                    <div class="card-body">

                                        <div class="pt-4 pb-2">
                                            <h5 class="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                            <p class="text-center small">Enter your username & password to login</p>
                                        </div>

                                        <form method='post' onSubmit={handleSubmit} class="row g-3 needs-validation" novalidate>

                                            <div class="col-12">
                                                <label for="yourUsername" class="form-label">Username</label>
                                                <div class="input-group has-validation">
                                                    <span class="input-group-text" id="inputGroupPrepend">@</span>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        class="form-control"
                                                        id="yourUsername"
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        required />
                                                    <div class="invalid-feedback">Please enter your username.</div>
                                                </div>
                                            </div>

                                            <div class="col-12">
                                                <label for="yourPassword" class="form-label">Password</label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    class="form-control"
                                                    id="yourPassword"
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required />
                                                <div class="invalid-feedback">Please enter your password!</div>
                                            </div>

                                            <div class="col-12">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                                                    <label class="form-check-label" for="rememberMe">Remember me</label>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <button class="btn btn-primary w-100" type="submit">Login</button>
                                            </div>
                                        </form>

                                    </div>
                                </div>

                                <div class="credits">
                                    Designed by Ravikant Suthar
                                </div>

                            </div>
                        </div>
                    </div>

                </section>

            </div>
        </main>
    )
}

export default LoginPage
