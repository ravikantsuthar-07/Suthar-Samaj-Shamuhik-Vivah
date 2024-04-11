import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuth } from '../../context/auth';

const AdminMenu = () => {
    const [auth, setAuth] = useAuth();
    const handleLogout = () => {
        setAuth({
            ...auth, user: null, token: ''
        });
        localStorage.removeItem('auth');
    }
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" style={{ top: '0px', background: '#f5f665' }}>
                <Container>
                    <Navbar.Brand href="/dashboard/admin">सामूहिक विवाह समिति</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/dashboard/admin">Dashboard</Nav.Link>
                            <NavDropdown title="Slider" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/dashboard/admin/add_slider">Add Slider</NavDropdown.Item>
                                <NavDropdown.Item href="/dashboard/admin/slider">Sliders</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Wedding" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/dashboard/admin/add_wedding_member">Add Wedding Member</NavDropdown.Item>
                                <NavDropdown.Item href="/dashboard/admin/wedding">Wedding</NavDropdown.Item>
                                <NavDropdown.Item href="/dashboard/admin/gift">Gift</NavDropdown.Item>
                                <NavDropdown.Item href="/dashboard/admin/add_gifts">Add Gift</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Blogs" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/dashboard/admin/add_news">Add Blog</NavDropdown.Item>
                                <NavDropdown.Item href="/dashboard/admin/news">Blogs</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Gallery" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/dashboard/admin/add_gallery_image">Add Gallery</NavDropdown.Item>
                                <NavDropdown.Item href="/dashboard/admin/gallery">Gallery</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Team" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/dashboard/admin/add_team">Add Team Member</NavDropdown.Item>
                                <NavDropdown.Item href="/dashboard/admin/team">Team Member</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Karmavati Pansion" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/dashboard/admin/karmawati">सदस्य जो पेंशन लेटे है</NavDropdown.Item>
                                <NavDropdown.Item href="/dashboard/admin/karma">सदस्य जो पेंशन देते है</NavDropdown.Item>
                                <NavDropdown.Item href="/dashboard/admin/add_karma">सदस्य जोड़ें जो पेंशन देते है</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/dashboard/admin/book">Sutradhar</Nav.Link>
                            <Nav.Link href="/dashboard/admin/karmawati"></Nav.Link>
                            <Nav.Link href="/dashboard/admin/contact">Contact</Nav.Link>
                            <NavDropdown title={auth?.user[0]?.name} id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={handleLogout} href="/">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default AdminMenu