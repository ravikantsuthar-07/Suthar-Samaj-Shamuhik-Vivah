import React from 'react'
import logo from '../../img/logo.png';
import Ganesh from '../../img/Ganesh.png'
const Header = () => {
    return (
        <>
            <div id="navbar">
                <div className="logos">
                    <img src={logo} alt="logo" width="65" height="75" />
                    <h1>श्री विश्वकर्मा सुथार समाज सामूहिक विवाह समिति बीकानेर</h1>
                    <img className="img2" src={Ganesh} alt="logo" width="65" height="75" />
                </div>
            </div>
        </>
    )
}

export default Header
