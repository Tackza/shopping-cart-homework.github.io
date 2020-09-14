import React from 'react'
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css'



function Header() {
    return (
        <Navbar bg="light" expand="lg" > 
            <Navbar.Brand href="#home" className="namaHome">Tack IT <FontAwesomeIcon icon={faHome} size="lg" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">

                    <Form inline >
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success" className="mr-sm-2-button">Search</Button>
                    </Form>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <Nav.Link href="#link">Cart</Nav.Link>
                    <Nav.Link href="#link">Login</Nav.Link>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
