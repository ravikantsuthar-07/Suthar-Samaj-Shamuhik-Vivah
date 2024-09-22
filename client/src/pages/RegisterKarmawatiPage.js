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
    const [age, setAge] = useState("");
    const [dODOfHusband, setDODOfHusband] = useState("");
    const [maholaReport, setMaholaReport] = useState("");
    const [samitiReport, setSamitiReport] = useState("");
    const [BANKNAME, setBANKNAME] = useState("");
    const [ACC, setAcc] = useState("");
    const [IFCECODE, setIFCECODE] = useState("");
    const [last, setLast] = useState("");

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            const karmawatiData = new FormData();
            karmawatiData.append('name', name + last);
            karmawatiData.append('husbandname', husbandname);
            karmawatiData.append('address', address);
            karmawatiData.append('mobile', mobile);
            karmawatiData.append('img', img);
            karmawatiData.append('age', age);
            karmawatiData.append('DODOfHusband', dODOfHusband);
            karmawatiData.append('MaholaReport', maholaReport);
            karmawatiData.append('SamitiReport', samitiReport);
            karmawatiData.append('BANKNAME', BANKNAME);
            karmawatiData.append('ACC', ACC);
            karmawatiData.append('IFCECODE', IFCECODE);
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
                            <label htmlFor="name-f">नाम कर्मावती श्रीमती</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="नाम कर्मावती श्रीमती"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="col-sm-6 col-lg-3 col-6 form-group">
                            <label htmlFor="name-f">उम्र</label>
                            <input
                                type="text"
                                className="form-control"
                                name="age"
                                placeholder="उम्र"
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </div>
                        <div className="col-sm-6 col-6  col-lg-3 form-group">
                            <label htmlFor="name-f">गौत्र</label>
                            <input                                           
                                type="text"
                                className="form-control"
                                name="LName"
                                placeholder="गौत्र"
                                onChange={(e) => setLast(e.target.value)}
                            />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="pass">पति का नाम</label>
                            <input
                                type="text"
                                name="Husbandname"
                                className="form-control"
                                placeholder="पति का नाम"
                                onChange={(e) => setHusbandName(e.target.value)}
                            />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="address-1">पता</label>
                            <input
                                type="address"
                                className="form-control"
                                name="Locality"
                                placeholder="पता"
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="tel">मोबाईल न.</label>
                            <input
                                type="text"
                                name="mobile"
                                className="form-control"
                                placeholder="मोबाईल न."
                                onChange={(e) => setMobile(e.target.value)}
                            />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="pass2">फ़ोटो</label>
                            <input
                                type="file"
                                name="img"
                                className="form-control"
                                accept='image/*'
                                onChange={(e) => setImg(e.target.files[0])}
                            />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="pass">पति के ब्रह्मलीन की दिनाक</label>
                            <input
                                type="date"
                                name="DODOfHusband"
                                className="form-control"
                                placeholder="पति के ब्रह्मलीन की दिनाक"
                                onChange={(e) => setDODOfHusband(e.target.value)}
                            />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="address-1">मौहल्ला प्रभारी की रिपोर्ट</label>
                            <input
                                type="text"
                                className="form-control"
                                name="MaholaReport"
                                placeholder="मौहल्ला प्रभारी की रिपोर्ट"
                                onChange={(e) => setMaholaReport(e.target.value)}
                            />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="tel">समिति सदस्य की रिपोर्ट</label>
                            <input
                                type="text"
                                name="SamitiReport"
                                className="form-control"
                                placeholder="समिति सदस्य की रिपोर्ट"
                                onChange={(e) => setSamitiReport(e.target.value)}
                            />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="pass2">बैंक का नाम</label>
                            <input
                                type="text"
                                name="BANKNAME"
                                placeholder="बैंक का नाम"
                                className="form-control"
                                onChange={(e) => setBANKNAME(e.target.value)}
                            />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="pass2">बैंक खाता संख्या</label>
                            <input
                                type="text"
                                name="ACC"
                                placeholder="बैंक खाता संख्या"
                                className="form-control"
                                onChange={(e) => setAcc(e.target.value)}
                            />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="pass2">बैंक IFCE Code</label>
                            <input
                                type="text"
                                name="IFCECODE"
                                placeholder="बैंक IFCE Code"
                                className="form-control"
                                onChange={(e) => setIFCECODE(e.target.value)}
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
