import React from 'react'

import logo from '../../assets/img/logo.png'
import profile from '../../assets/img/profile-img.jpg'
import { NavLink } from 'react-router-dom'



const AdminMenu = () => {
    return (
        <>

            <header id="header" className="header fixed-top d-flex align-items-center">

                <div className="d-flex align-items-center justify-content-between">
                    <NavLink to="/dashboard/admin" className="logo d-flex align-items-center">
                        <img src={logo} alt="" />
                        <span className="d-none d-lg-block" style={{ overflow: 'hidden' }}>सामूहिक विवाह</span>
                    </NavLink>
                    <i className="bi bi-list toggle-sidebar-btn"></i>
                </div>

                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">

                        <li className="nav-item dropdown pe-3">

                            <button type='button' className="nav-link nav-profile d-flex align-items-center pe-0" data-bs-toggle="dropdown" id="dropdownMenuButton" aria-haspopup="true">
                                <img src={profile} alt="Profile" className="rounded-circle" />
                                <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
                            </button>

                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li className="dropdown-header">
                                    <h6>Kevin Anderson</h6>
                                    <span>Web Designer</span>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <i className="bi bi-person"></i>
                                        <span>My Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <i className="bi bi-box-arrow-right"></i>
                                        <span>Sign Out</span>
                                    </a>
                                </li>

                            </ul>
                        </li>
                    </ul>
                </nav>

            </header>

            <aside id="sidebar" className="sidebar">

                <ul className="sidebar-nav" id="sidebar-nav">

                    <li className="nav-item">
                        <a className="nav-link " to="/dashboard/admin">
                            <i className="bi bi-grid"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" to="">
                            <i className="bi bi-menu-button-wide"></i><span>Slider</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">

                            <li>
                                <NavLink to="/dashboard/admin/add_slider">
                                    <i className="bi bi-circle"></i><span>Add Slider</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/admin/slider">
                                    <i className="bi bi-circle"></i><span>Sliders</span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" to="">
                            <i className="bi bi-journal-text"></i><span>Wedding</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <NavLink to="/dashboard/admin/add_wedding_member">
                                    <i className="bi bi-circle"></i><span>Add Wedding Member</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/admin/wedding">
                                    <i className="bi bi-circle"></i><span>Wedding</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/admin/gift">
                                    <i className="bi bi-circle"></i><span>Gift</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/admin/add_gifts">
                                    <i className="bi bi-circle"></i><span>Add Gift</span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-layout-text-window-reverse"></i><span>News</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <NavLink to="/dashboard/admin/add_news">
                                    <i className="bi bi-circle"></i><span>Add News</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/admin/news">
                                    <i className="bi bi-circle"></i><span>News</span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-layout-text-window-reverse"></i><span>Gallery</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <NavLink to="/dashboard/admin/add_gallery_image">
                                    <i className="bi bi-circle"></i><span>Add Gallery</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/admin/gallery">
                                    <i className="bi bi-circle"></i><span>Gallery</span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-layout-text-window-reverse"></i><span>Team</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <NavLink to="/dashboard/admin/add_team">
                                    <i className="bi bi-circle"></i><span>Add Team</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/admin/team">
                                    <i className="bi bi-circle"></i><span>Team</span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link collapsed" to="/dashboard/admin/contact">
                            <i className="bi bi-file-earmark"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>

                </ul>

            </aside>

        </>
    )
}

export default AdminMenu