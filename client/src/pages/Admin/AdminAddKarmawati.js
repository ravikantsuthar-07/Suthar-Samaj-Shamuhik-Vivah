import React, { useState } from 'react'
import AdminMenu from '../../components/Layoout/AdminMenu'
import axios from 'axios';
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';

const AdminAddKarmawati = () => {
    const navigate = useNavigate();
    const [name, setName] = useState(null);
    const [year, setYear] = useState(null);
    const [mobile, setMobile] = useState(null);
    const [img, setImg] = useState(null);
    const [address, setAddress] = useState(null);
    const [fName, setFName] = useState(null);
    const [amount, setAmount] = useState(null);
    const [auth] = useAuth();

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            const karmawatiData = new FormData();
            karmawatiData.append('name', name);
            karmawatiData.append('fname', fName);
            karmawatiData.append('address', address);
            karmawatiData.append('mobile', mobile);
            karmawatiData.append('amount', amount);
            karmawatiData.append('year', year);
            karmawatiData.append('img', img);
            const {data} = await axios.post(`/api/v1/karmawati/create-whose`, karmawatiData, {
                headers:{
                    'Authorization' : auth.token
                }
            });
            if (data?.success) {
                alert(data?.message);
                navigate(`/dashboard/admin/karma`);
            } else {
                alert(data?.message);
                navigate(`/dashboard/admin/add_karma`);
            }
        } catch (error) {
            console.log(error?.response?.data?.message);
        }
    }
    return (
        <>
            <AdminMenu />
            <main id="main" className="main">
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">सदस्य जोड़ें जो पेंशन देते है</h5>
                                    <form onSubmit={handleCreate} encType="multipart/form-data">
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                                            <div className="col-sm-10">
                                                <input type="text" name='SrNo' value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="inputName" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Post</label>
                                            <div className="col-sm-10">
                                                <select onChange={(e) => setYear(e.target.value)} value={year} className="form-control" >
                                                    <option value={''} >--- Year ---</option>
                                                    <option value={2024}>  2024 </option>
                                                    <option value={2023} > 2023</option>
                                                    <option value={2022} > 2022 </option>
                                                    <option value={2021} > 2021 </option>
                                                    <option value={2020} > 2020 </option>
                                                    <option value={2019} > 2019 </option>
                                                    <option value={2018} > 2018 </option>
                                                    <option value={2017} > 2017 </option>
                                                    <option value={2016} > 2016 </option>
                                                    <option value={2015} > 2015 </option>
                                                    <option value={2014} > 2014 </option>
                                                    <option value={2013} > 2013 </option>
                                                    <option value={2012} > 2012 </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Father Or HusBand Name</label>
                                            <div className="col-sm-10">
                                                <input type="text" name='FName' value={fName} placeholder='Enter Father or Husband Name' className="form-control" id="inputMobile" onChange={(e) => setFName(e.target.value)} />
                                            </div>
                                        </div><div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Mobile</label>
                                            <div className="col-sm-10">
                                                <input type="text" name='Mobile' value={mobile} placeholder='Enter Mobile Number' className="form-control" id="inputMobile" onChange={(e) => setMobile(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Address</label>
                                            <div className="col-sm-10">
                                                <input type="text" name='Address' value={address} placeholder='Enter Address' className="form-control" id="inputMobile" onChange={(e) => setAddress(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Amount</label>
                                            <div className="col-sm-10">
                                                <input type="text" name='Amount' value={amount} placeholder='Enter Amount' className="form-control" id="inputMobile" onChange={(e) => setAmount(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Image</label>
                                            <div className="col-sm-10">
                                                <input type="file" name='img' accept='image/*' onChange={(e) => setImg(e.target.files[0])} className="form-control" id="inputImage" />
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                            <button type="reset" className="btn btn-secondary">Reset</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default AdminAddKarmawati
