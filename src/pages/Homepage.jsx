import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Pastry from "../assets/banner.png";
import Croissant from "../assets/Croissant.jpg";
import Cromboloni from "../assets/Cromboloni.jpg";
import Sourdough from "../assets/Sourdough.jpg";
import ComingSoon from "../assets/Cominsoon.png";
import CroissantBanner from "../assets/Croissantbanner.jpg";

const Homepage = () => {
    // Referensi untuk elemen target
    const targetSectionRef = useRef(null);

    // Fungsi untuk menggulir ke elemen target
    const scrollToSection = () => {
        targetSectionRef.current.scrollIntoView({ behavior: "smooth" });
    };

    const products = [
        { id: 1, name: "Croissant", image: Croissant },
        { id: 2, name: "Cromboloni", image: Cromboloni },
        { id: 3, name: "Sourdough", image: Sourdough },
    ];

    return (
        <>
            {/* Banner Section */}
            <div className="Banner1 d-flex justify-content-center">
                <div className="d-flex flex-row align-items-center py-5">
                    <img src={Pastry} alt="Pastry Banner" className="w-50" />
                    <div className="text-lg-start ps-5">
                        <h2 className="text-muted">Welcome to</h2>
                        <h1 className="fw-bold text-dark">NAPastry</h1>
                        <p className="text-secondary">Find the best products at the best prices!</p>
                        <button onClick={scrollToSection} className="btn login-btn mt-3 ms-auto">
                            ORDER NOW!
                        </button>
                    </div>
                </div>
            </div>

            {/* Product List Section */}
            <div className="List-Product" ref={targetSectionRef} id="product">
                <div className="bg-brown py-5">
                    <h2 className="text-white text-center mb-5">Menu NAPastry</h2>
                    <div className="container">
                        <div className="row g-4">
                            {products.map((product) => (
                                <div className="col-md-4 d-flex justify-content-center" key={product.id}>
                                    <div className="card text-center shadow border-0">
                                        <img src={product.image} className="card-img-top rounded" alt={product.name} />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.name}</h5>
                                            <Link to={`/product/${product.id}`} className="btn login-btn mt-3">
                                                Show more
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Coming Soon Banner */}
            <div className="Banner2 d-flex justify-content-center">
                <div className="d-flex flex-column flex-lg-row align-items-center py-5">
                    <div className="text-center text-lg-start pe-lg-5">
                        <h2 className="text-muted">COMING SOON!</h2>
                        <h1 className="fw-bold text-dark">GARLIC BREAD</h1>
                        <p className="text-secondary">New products</p>
                    </div>
                    <img src={ComingSoon} alt="Garlic Bread" className="w-50" />
                </div>
            </div>

            {/* Discount Banner */}
            <div className="Banner3 bg-brown d-flex justify-content-center">
                <div className="d-flex flex-column flex-lg-row align-items-center py-5">
                    <img src={CroissantBanner} alt="Croissant Discount" className="w-50" />
                    <div className="text-center text-lg-start ps-lg-5">
                        <h2 className="text-light">DISCOUNT UP TO 20% !</h2>
                        <h1 className="fw-bold text-light">Croissant</h1>
                        <div className="d-flex gap-3 my-3">
                            <p className="text-decoration-line-through text-muted">Rp. 45.000,-</p>
                            <p className="text-light">Rp. 36.000,-</p>
                        </div>
                        <button onClick={scrollToSection} className="btn login-btn ms-auto">
                            ORDER NOW!
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Homepage;
