import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import banner from "../assets/pastry.jpg"

const FaqPage = () => {
  return (
    <div className="container m-5 p-5">
      <div className="row">
        <div className="col-md-6">
          <h1 className="display-4 fw-bold">About Us</h1>
          <p className="lead text-muted">
            Welcome to NAPastry! We are a pastry shop dedicated to bringing you the finest selection of baked goods made from the freshest ingredients. Whether you’re craving a warm croissant, a savory sourdough loaf, or a deliciously sweet cromboloni, we’ve got something for every taste.
          </p>
          <p className="text-muted">
            At NAPastry, we take pride in our artisanal baking process, and our passion for creating unique and delicious pastries is what drives us every day. Our team of skilled bakers works tirelessly to craft every item from scratch, ensuring that every bite is fresh and flavorful.
          </p>
          <p className="text-muted">
            We believe in creating an experience that’s more than just about food; it’s about connecting with our customers and offering them a piece of joy with every pastry.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src={banner}
            alt="About Us"
            className="img-fluid rounded"
          />
        </div>
      </div>
      <hr />
      <div className="row mt-5">
        <div className="col-md-6">
          <h2 className="fw-bold">Our Mission</h2>
          <p className="text-muted">
            Our mission is to deliver high-quality, freshly baked pastries that bring comfort and delight to every customer. We aim to provide a warm and inviting atmosphere where everyone feels at home, whether you're grabbing a quick snack or sitting down to enjoy a leisurely coffee.
          </p>
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold">Our Values</h2>
          <ul className="list-group">
            <li className="list-group-item">Quality Ingredients</li>
            <li className="list-group-item">Customer Satisfaction</li>
            <li className="list-group-item">Sustainability</li>
            <li className="list-group-item">Innovation in Baking</li>
            <li className="list-group-item">Community Engagement</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;