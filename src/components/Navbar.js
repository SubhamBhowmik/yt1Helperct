import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const navbar = () => {
  return (
    <>
      <nav class="navbar">
        <div class="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
          <ul class="menu-items">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="#">Category</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Testimonial</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <h1 class="logo">Helper</h1>
        </div>
      </nav>
    </>
  );
};

export default navbar;
