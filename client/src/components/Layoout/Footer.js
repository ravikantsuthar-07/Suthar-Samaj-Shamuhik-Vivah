import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>

            <section id='footers'>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md='4' lg='4' xl='4' className='mx-auto mb-4'>
                            <div style={{ display: 'flex', alignItems: 'center', lineHeight: 'normal' }}>
                                <img src={logo} width={65} alt='logo' />
                                <h6 className='text-uppercase fw-bold m-2' style={{ lineHeight: 'normal', fontSize: '20px' }}>
                                    श्री विश्वकर्मा सुथार समाज सामूहिक विवाह समिति, बीकानेर
                                </h6>
                            </div>
                            <p className='mt-3'>
                                हमें गर्व है कि हम इस परमपिता महान वास्तुविज्ञ शिल्पकार की संताने हैं। जिन्हें इस धरती का सौन्दर्य व आधुनिकीकरण का कार्य सौंपा।
                            </p>
                        </MDBCol>

                        <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-3'>Our Services</h6>
                            <p>
                                <Link to='/wedding' className='text-reset'>
                                    Wedding
                                </Link>
                            </p>
                            <p>
                                <Link to='/karmawati' className='text-reset'>
                                    Karmawati Pansion
                                </Link>
                            </p>
                            <p>
                                <Link to='/saman' className='text-reset'>
                                    75+ Saman Samarow
                                </Link>
                            </p>
                        </MDBCol>

                        <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-3'>Useful links</h6>
                             
                            <p>
                                <Link to='/about' className='text-reset'>
                                    About Us
                                </Link>
                            </p>
                            <p>
                                <Link to='/contact' className='text-reset'>
                                    Contact Us
                                </Link>
                            </p>
                        </MDBCol>

                        <MDBCol md='4' lg='4' xl='4' className='mx-auto mb-md-0 mb-4'>
                            <h6 className=' fw-bold mb-3'>Contact</h6>
                            <p>
                                <MDBIcon color='secondary' icon='home' className='me-2' />
                                C-187 Antodaya Nagar, Bikaner
                            </p>
                            <p>
                                <Link to='#' className='text-reset' onClick={() => window.location = 'mailto:svsbkn@gmail.com'}>
                                    <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                    svsbkn@gmail.com
                                </Link>
                            </p>
                            <p>
                                <Link to='#' className='text-reset' onClick={() => window.open("tel:+91 8949384032")}>
                                    <MDBIcon color='secondary' icon='phone' className='me-3' /> +91 894 938 4032
                                </Link>

                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', fontSize: 'small' }}>
                    © 2024 Copyright:
                    <span className='text-reset fw-bold'>
                        Ravikant Suthar
                    </span>
                </div>
            </section>

        </MDBFooter>
    )
}

export default Footer
