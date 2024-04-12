import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            {/* <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <Link to='' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='facebook-f' />
                    </Link>
                    <Link to='' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='twitter' />
                    </Link>
                    <Link to='' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='google' />
                    </Link>
                    <Link to='' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='instagram' />
                    </Link>
                    <Link to='' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='linkedin' />
                    </Link>
                    <Link to='' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='github' />
                    </Link>
                </div>
            </section> */}

            <section id='footers'>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-2'>
                                <img src={logo} width={50} height={50} alt='logo' />
                                श्री विश्वकर्मा सुथार समाज सामूहिक विवाह समिति, बीकानेर
                            </h6>
                            <p>
                                हमें गर्व है कि हम इस परमपिता महान वास्तुविज्ञ शिल्पकार की संताने हैं। जिन्हें इस धरती का सौन्दर्य व आधुनिकीकरण का कार्य सौंपा।
                            </p>
                        </MDBCol>

                        <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Our Services</h6>
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

                        <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
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
                            <p>
                                <Link to='/' className='text-reset'>
                                    Orders
                                </Link>
                            </p>
                            <p>
                                <Link to='/' className='text-reset'>
                                    Help
                                </Link>
                            </p>
                        </MDBCol>

                        <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon color='secondary' icon='home' className='me-2' />
                                C-187 Antodaya Nagar, Bikaner
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                info@example.com
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
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
