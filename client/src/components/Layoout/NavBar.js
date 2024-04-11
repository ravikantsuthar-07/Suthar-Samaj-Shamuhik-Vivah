import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Header from './Header';

function NavBar() {
    return (
        <>
            <Header />
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/wedding">Wedding</Nav.Link>
                            <Nav.Link href="/karmawati">Karmawati Pansion</Nav.Link>
                            <Nav.Link href="/">Saman Samarow</Nav.Link>
                            <Nav.Link href="/news">Blogs</Nav.Link>
                            <Nav.Link href="/sutradhar">Sutradhar</Nav.Link>
                            <Nav.Link href="/gallery">Gallery</Nav.Link>
                            <NavDropdown title="Registraction" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/register">Samuhik Vivah</NavDropdown.Item>
                                <NavDropdown.Item href="/registerkarmawati">Karmavati Pansion</NavDropdown.Item>
                                <NavDropdown.Item href="/">Varisth Nagrik Saman Samroh</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;