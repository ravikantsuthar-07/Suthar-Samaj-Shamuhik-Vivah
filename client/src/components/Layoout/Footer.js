import React from 'react'
import logo from '../../img/logo.png'
const Footer = () => {
    return (
        <>
            <footer id="footers">
                <div className="container">
                    <div className="row" >
                        <div className="col-md-4 col-sm-12" >
                            <div className='footerHead'>
                                <img src={logo} alt="Vishwakarma ji" width="70" height="45" className="p-2"/>
                                    <h3 >श्री विश्वकर्मा सुथार समाज सामूहिक विवाह समिति बीकानेर</h3>
                            </div>
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                                odio voluptate voluptatibus
                                expedita beatae eos numquam sapiente laboriosam rem quo? Quam velit quas omnis, expedita vero
                                repudiandae. Rerum, nobis tenetur?</p>
                        </div>
                        <div className="col-md-4 col-sm-12" >
                            <h3 >लिंक</h3>
                            <ul >
                                <li >Home</li>
                                <li >About</li>
                                <li >Book</li>
                                <li >News</li>
                                <li >Contact</li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-sm-12" >
                            <h3 >संपर्क करें</h3>
                            <ul >
                                <li ><i className="fa-solid fa-phone p-2"
                                    ></i> +91 8949384032</li>
                                <li ><i className="fa-solid fa-envelope p-2"
                                    ></i>ravikantsuthar[at]gmail[dot]com</li>
                                <li ><i className="fa-brands fa-chrome p-2"
                                    ></i>www.ravikant.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12.col-md-12.col-sm-12'>
                            <p style={{textAlign: 'center'}}>Design and Developed By Ravikant Suthar</p>
                        </div>
                    </div>
                </div>
            </footer >
        </>
    )
}

export default Footer
