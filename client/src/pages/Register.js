import React, { useState } from 'react'
import Layout from '../components/Layoout/Layout'
import under from '../img/Under.png'
import '../Styles/Register.css'
import axios from 'axios'

const Register = () => {
    const [groomName, setGroomName] = useState(null);
    const [groomFatherName, setGroomFatherName] = useState(null);
    const [groomGrandFatherName, setGroomGrandFatherName] = useState(null);
    const [groomMobile, setGroomMobile] = useState(null);
    const [groomAddress, setGroomAddress] = useState(null);
    const [groomDOB, setGroomDOB] = useState(null);
    const [groomImg, setGroomImg] = useState(null);
    const [brideName, setBrideName] = useState(null);
    const [brideFatherName, setBrideFatherName] = useState(null);
    const [brideGrandFatherName, setBrideGrandFatherName] = useState(null);
    const [brideMobile, setBrideMobile] = useState(null);
    const [brideAddress, setBrideAddress] = useState(null);
    const [brideDOB, setBrideDOB] = useState(null);
    const [brideImg, setBrideImg] = useState(null);
    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('groomName', groomName);
            formData.append('groomFatherName', groomFatherName);
            formData.append('groomGrandFatherName', groomGrandFatherName);
            formData.append('groomMobile', groomMobile);
            formData.append('groomAddress', groomAddress);
            formData.append('groomDOB', groomDOB);
            formData.append('groom', groomImg);
            formData.append('BrideName', brideName);
            formData.append('BrideFatherName', brideFatherName);
            formData.append('BrideGrandFatherName', brideGrandFatherName);
            formData.append('BrideMobile', brideMobile);
            formData.append('BrideAddress', brideAddress);
            formData.append('BrideDOB', brideDOB);
            formData.append('bride', brideImg);
            const { data } = await axios.post('/api/v1/weddingRegister/create', formData);
            if (data?.success) {
                alert(data?.message);
                window.location.reload();
            }
        } catch (error) {
            alert(error?.responce?.data?.message);
        }
    }
    return (
        <Layout>
            <div id='registerUser' className="container">
                <div className="col-sm-12 mb-4">
                    <h2 className="text-center">कर्मावती पैंशन के लिए फॉर्म भरे</h2>
                    <img src={under} className='under' alt='under' />
                </div>
                <form method='post' onSubmit={handleCreate} encType="multipart/form-data">
                    <div className="row jumbotron box8">
                    <div className="col-sm-6 form-group">
                            <label htmlFor="name-f">Groom Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="groomName"
                                value={groomName}
                                placeholder="Enter your Groom Name."
                                onChange={(e) => setGroomName(e.target.value)}
                            />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="pass">Groom Father Name</label>
                            <input
                                type="text"
                                name="groomFatherName"
                                className="form-control"
                                value={groomFatherName}
                                placeholder="Enter your Groom Father Name."
                                onChange={(e) => setGroomFatherName(e.target.value)}
                            />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="pass">Groom Grand Father Name</label>
                            <input
                                type="text"
                                name="groomGrandFatherName"
                                className="form-control"
                                value={groomGrandFatherName}
                                placeholder="Enter your Grand Groom Father Name."
                                onChange={(e) => setGroomGrandFatherName(e.target.value)}
                            />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="address-1">Groom Address</label>
                            <input
                                type="text"
                                className="form-control"
                                name="groomAddress"
                                value={groomAddress}
                                placeholder="Enter your Groom Address"
                                onChange={(e) => setGroomAddress(e.target.value)}
                            />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="tel">Mobile Number</label>
                            <input
                                type="text"
                                name="groomMobile"
                                className="form-control"
                                value={groomMobile}
                                placeholder="Enter Your Groom Contact Number."
                                onChange={(e) => setGroomMobile(e.target.value)}
                            />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="tel">Groom Date Of Birth</label>
                            <input
                                type="date"
                                name="groomDOB"
                                value={groomDOB}
                                className="form-control"
                                onChange={(e) => setGroomDOB(e.target.value)}
                            />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="pass2">Groom Picture</label>
                            <input
                                type="file"
                                name="groom"
                                className="form-control"
                                accept='image/*'
                                onChange={(e) => setGroomImg(e.target.files)}
                            />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="name-f">Bride Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="BrideName"
                                value={brideName}
                                placeholder="Enter your Bride Name."
                                onChange={(e) => setBrideName(e.target.value)}
                            />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="pass">Bride Father Name</label>
                            <input
                                type="text"
                                name="BrideFatherName"
                                className="form-control"
                                value={brideFatherName}
                                placeholder="Enter your Bride Father Name."
                                onChange={(e) => setBrideFatherName(e.target.value)}
                            />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="pass">Bride Grand Father Name</label>
                            <input
                                type="text"
                                name="brideGrandFatherName"
                                className="form-control"
                                value={brideGrandFatherName}
                                placeholder="Enter your Bride Grand Father Name."
                                onChange={(e) => setBrideGrandFatherName(e.target.value)}
                            />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="address-1">Bride Address</label>
                            <input
                                type="text"
                                className="form-control"
                                name="brideAddress"
                                value={brideAddress}
                                placeholder="Enter your Bride Address"
                                onChange={(e) => setBrideAddress(e.target.value)}
                            />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="tel">Bride Mobile Number</label>
                            <input
                                type="text"
                                name="brideMobile"
                                className="form-control"
                                value={brideMobile}
                                placeholder="Enter Your Bride Contact Number."
                                onChange={(e) => setBrideMobile(e.target.value)}
                            />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="tel">Bride Date Of Birth</label>
                            <input
                                type="date"
                                name="brideDOB"
                                value={brideDOB}
                                className="form-control"
                                onChange={(e) => setBrideDOB(e.target.value)}
                            />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="pass2">Bride Picture</label>
                            <input
                                type="file"
                                name="bride"
                                className="form-control"
                                accept='image/*'
                                onChange={(e) => setBrideImg(e.target.files[0])}
                            />
                        </div>
                        <div className="col-sm-12">
                            <input type="checkbox" className="form-check d-inline" id="chb" required />
                            <label htmlFor="chb" className="form-check-label">
                                &nbsp;I accept all terms and conditions .
                            </label>
                        </div>

                        <div className="col-sm-12 form-group m-2">
                            <button className="btn btn-primary">Submit</button>
                        </div>

                    </div>
                </form>
            </div>
        </Layout >
    )
}

export default Register
