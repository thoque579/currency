import React from 'react';
import { Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { HiCurrencyDollar } from 'react-icons/hi';
const Navigation = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home"><span className ="nav-icon"><HiCurrencyDollar /></span>CurrencyExchange</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                 <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="" className = "text-white nav-item">Currency Converter</Nav.Link>
                            <Nav.Link href="" className = "text-white nav-item">Currency Chart</Nav.Link>
                            </Nav>
                        <Nav>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;