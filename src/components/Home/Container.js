import React from "react";
import { useNavigate } from "react-router-dom";
const Container = () => {
  const navigate = useNavigate();
  return (
    <>
      <section id="banner">
        <div class="container-fluid" id="banner-container">
          <div class="row" id="banner-row">
            <div class="col-md-6" id="banner-col">
              <div class="d-grid gap-2 d-md-flex justify-content-center">
                <div className="mt-5"></div>
              </div>
            </div>
            <div class="col-md-6" id="banner-col2">
              <img
                class="img-responsive rounded mx-auto d-block"
                src="images/gfg.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- services --> */}
      <section id="service">
        <h1 class="text-center mt-5">SERVICES</h1>
        <div class="container-fluid" id="service-container">
          <div class="row" id="banner-row">
            <div class="col-md-4" id="service-col1">
              <img
                src="images/gfg.png"
                class="img-fluid rounded mx-auto d-block"
                alt="..."
              />
              <h3>Website Design</h3>

              <p>
                User Experience Design. Website Content Strategy. Cross Browser
                and Platform Testing.
              </p>
            </div>
            <div class="col-md-4" id="service-col2">
              <img
                src="images/gfg.png"
                class="img-fluid rounded mx-auto d-block"
                alt="..."
              />
              <h3>Bulk SMS</h3>

              <p>
                1.Toll Free Number 2. IVR 3. Virtual Number 4. Political or any
                Voice Broadcasting
              </p>
            </div>
            <div class="col-md-4" id="service-col3">
              <img
                src="images/gfg.png"
                class="img-fluid rounded mx-auto d-block"
                alt="..."
              />
              <h3>Payment Gateways</h3>

              <p>
                PayU India is the flagship company of Naspers group which is a
                $25 Billion internet and media conglomerate listed on London and
                Johannesburg stock exchanges respectively.
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr />

      {/* <!-- about Us --> */}
      <section id="about">
        <h1 class="text-center" onClick={() => navigate("/about#cz")}>
          About Us
        </h1>
        <div class="container-fluid" id="about-container">
          <div class="row" id="banner-row">
            <div class="col-md-6" id="about-col">
              <h3>Why Us</h3>
              <ul>
                <li>
                  Probuz is all about Delivering High Quality web design and
                  development services, Cost effective and reliable solutions.
                </li>
                <li>SCHOOL/COLLEGE MANAGEMENT SOFTWARE (CAMPUS PRO)</li>
                <li>
                  Let us take care of your Business needs. Customer Productivity
                  is our Priority.
                </li>
                <li>Our expertise in Business includes</li>
              </ul>
            </div>
            <div class="col-md-6" id="banner-col2">
              <img
                class="img-responsive rounded mx-auto d-block"
                src="images/gfg.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <hr />
      {/* <!-- product --> */}

      <section id="product">
        <h1 class="text-center">Our Products</h1>
        <div class="container-fluid" id="product-container">
          <div class="row" id="banner-row">
            <div class="col-md-6" id="about-col">
              <img
                class="img-responsive rounded mx-auto d-block"
                src="images/gfg.png"
                alt=""
              />
            </div>
            <div class="col-md-6" id="product-col2">
              <h3>Product List</h3>

              <ul>
                <li>CLINIC MANAGMENT SYSTEM</li>
                <li>SCHOOL/COLLEGE MANAGEMENT SOFTWARE (CAMPUS PRO)</li>
                <li>SERVICE MANAGEMENT SOFTWARE</li>
                <li>E-COMMERCE WEBSITE</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <hr />
      {/* <!-- social --> */}
      <section id="social">
        <h1 class="text-center">Get In Touch</h1>
        <div class="d-grid gap-2 d-md-flex justify-content-center">
          <div class="row align-items-center" id="social-row">
            <div class="col-md-4 social-col">
              <a href="">
                <img
                  class="img-responsive rounded mx-auto d-block"
                  src="images/gfg.png"
                  alt=""
                />
              </a>
            </div>
            <div class="col-md-4 social-col">
              <a href="">
                <img
                  class="img-responsive rounded mx-auto d-block"
                  src="images/icons8-instagram-64.png"
                  alt=""
                />
              </a>
            </div>
            <div class="col-md-4 social-col">
              <a href="">
                <img
                  class="img-responsive rounded mx-auto d-block"
                  src="images/icons8-twitter-64.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Container;
