import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logowhite.png";
import { navLinks } from "../data/index";

const NavbarComponent = () => {
    return (
        <div>
            <Navbar expand="lg" fixed="top" className="custom-bg">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                        <span className="ms-2 text-white">Pastry</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {navLinks.map((link) => (
                                <div key={link.id}>
                                    <NavLink to={link.path} className="nav-link text-white">
                                        {link.text}
                                    </NavLink>
                                </div>
                            ))}
                        </Nav>
                        {/* Login Button */}
                        <div>
                            <Link to="/signup" className="btn login-btn ms-3">
                                Sign Up
                            </Link>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarComponent;
