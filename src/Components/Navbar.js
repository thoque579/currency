import React from 'react';
import { Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { HiCurrencyDollar } from 'react-icons/hi';
import { AiFillGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { RiCodepenLine } from "react-icons/ri"
const Navigation = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home"><span className ="nav-icon"><HiCurrencyDollar /></span>CurrencyExchange</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                 <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="" className = "text-white nav-item">Currency Converter</Nav.Link>
                        <Nav.Link href="" className = "text-white nav-item">Currency Chart</Nav.Link>
                        <Nav.Link href="https://github.com/thoque579ru" className = "text-white nav-item"><AiFillGithub/>GitHub</Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/tushar-hoque-434940191/" className = "text-white nav-item"><AiFillLinkedin/>Linkedln</Nav.Link>
                        <Nav.Link href="https://goofy-sammet-8acd27.netlify.app/" className = "text-white nav-item"><RiCodepenLine/>Portfolio</Nav.Link>
                        </Nav>
                    <Nav>
                </Nav>
            </Navbar.Collapse>
    </Navbar>
    )
}

export default Navigation;
