import React, { useState } from 'react';
import Layout from '../components/Layoout/Layout';
import under from '../img/Under.png';
import axios from 'axios';

const RegisterKarmawatiPage = () => {
    const [name, setName] = useState("");
    const [husbandname, setHusbandName] = useState("");
    const [address, setAddress] = useState("");
    const [mobile, setMobile] = useState("");
    const [img, setImg] = useState("");

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            const karmawatiData = new FormData();
            karmawatiData.append('name', name);
            karmawatiData.append('husbandname', husbandname);
            karmawatiData.append('address', address);
            karmawatiData.append('mobile', mobile);
            karmawatiData.append('img', img);
            const { data } = await axios.post('/api/v1/karmawati/create', karmawatiData);
            if (data?.success) {
                alert(data?.message);
                window.location.reload();
            } else {
                alert(data?.message);
                window.location.reload();
            }
        } catch (error) {
            alert(error?.response?.data?.message);
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
                            <label htmlFor="name-f">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Enter your Name."
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="pass">HusBand Name</label>
                            <input
                                type="text"
                                name="Husbandname"
                                className="form-control"
                                placeholder="Enter your HusBand Name."
                                onChange={(e) => setHusbandName(e.target.value)}
                            />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="address-1">Address</label>
                            <input
                                type="address"
                                className="form-control"
                                name="Locality"
                                placeholder="Enter your Address"
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="tel">Mobile Number</label>
                            <input
                                type="text"
                                name="mobile"
                                className="form-control"
                                placeholder="Enter Your Contact Number."
                                onChange={(e) => setMobile(e.target.value)}
                            />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="pass2">Picture</label>
                            <input
                                type="file"
                                name="img"
                                className="form-control"
                                accept='image/*'
                                onChange={(e) => setImg(e.target.files[0])}
                            />
                        </div>

                        <div className="col-sm-12 form-group m-2">
                            <button className="btn btn-primary">Submit</button>
                        </div>

                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default RegisterKarmawatiPage
