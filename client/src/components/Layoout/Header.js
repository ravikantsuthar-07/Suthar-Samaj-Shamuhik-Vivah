import React from 'react'
import logo from '../../img/logo.png';
import Ganesh from '../../img/Ganesh.png'
const Header = () => {
    return (
        <div id="navbar">
            <div className="logos" style={{ width: '100%' }}>
                <div className='row' style={{ width: '100%' }}>
                    <div className='col-2 col-md-1 col-sm-1 col-lg-1'>
                        <img src={logo} alt="logo" width="100%" height="65" />
                    </div>
                    <div className='col-8 col-md-10 col-sm-10 col-lg-10'>
                        <h1>श्री विश्वकर्मा सुथार समाज सामूहिक विवाह समिति</h1>
                    </div>
                    <div className='col-2 col-md-1 col-sm-1 col-lg-1'>
                        <img className="img2" src={Ganesh} alt="logo" width="100%" height="60" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
