import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logowhite.png";
import { navLinks } from "../data/index";
import { FaAngleLeft } from "react-icons/fa6";

const NavbarComponent = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Fungsi navigasi ke halaman sebelumnya
    const handleIconClick = () => {
        navigate(-1); // Navigasi ke halaman sebelumnya
    };

    // Cek lokasi halaman
    const isHomePage = location.pathname === "/";
    const isDetailPage = location.pathname.startsWith("/product/");

    return (
        <div>
            <Navbar expand="lg" fixed="top" className="custom-bg">
                <Container>
                    {/* Tampilkan ikon Back hanya di halaman detail */}
                    {isDetailPage && (
                        <FaAngleLeft
                            size="1.7em"
                            style={{ color: "white", marginRight: "10px", cursor: "pointer", transition: "transform 0.2s" }}
                            onClick={handleIconClick}
                        />
                    )}
                    <Navbar.Brand href="#">
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
                        {/* Tampilkan tombol Sign Up hanya di homepage */}
                        {isHomePage && (
                            <div>
                                <Link to="/signup" className="btn login-btn ms-3">
                                    Sign Up
                                </Link>
                            </div>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarComponent;
