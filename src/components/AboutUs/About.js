import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../Navbar";

const About = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <section class="about-section ">
        <div class="container py-5">
          <div class="row mt-5">
            <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div class="inner-column">
                <div class="sec-title">
                  <span class="title mt-5">About Css3transition</span>
                  <h2>We are Creative Tech Enthusiast working since 2015</h2>
                </div>
                <div class="text">
                  I am Rahul Yaduvanshi works at Css3 Transition since last 3
                  years. We are here to provide touch notch solution for your
                  website or web application that helps you to make your website
                  look attractive & efficient in handling by creating usefull
                  plugins thats you need.
                </div>
                <div class="text">
                  We are here to serve you next level tutorial that currently in
                  trend to match you with your expertise. Css3 transition is a
                  learning website. where you can find many good quality content
                  related to web development and tutorials about plugins. here
                  we are using html, html5, css, css3, jquery & javascript along
                  with inspirational UI design layout by professionals by using
                  Photoshop and adobe allustrator.
                </div>
                <div class="btn-box">
                  <a href="#" class="theme-btn btn-style-one">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Image Column --> */}
            <div class="image-column col-lg-6 col-md-12 col-sm-12">
              <div class="inner-column wow fadeInLeft">
                <div class="author-desc">
                  <h2>Rahul Kumar Yadav</h2>
                  <span>Web Developer</span>
                </div>
              </div>
            </div>
          </div>
          <div class="sec-title">
            <span class="title">Our Future Goal</span>
            <h2>We want to lead in innovation & Technology</h2>
          </div>
          <div class="text">
            We works on UI/UX and functionality as well so that a plugins comes
            with proper stucture & stunning looks which suits to your web app &
            website.
          </div>
          <div class="text">
            We take a small toolkit here and ride it well so that it is fit for
            your use. One who performs well and looks even better.
          </div>
          <div class="text">
            Here we are trying to give you all kinds of technical content,
            whether it is related to designing or functionality. We are creating
            content on a lot of languages and will continue to make it free of
            cost even if you use it without any problem. Which is a very
            important thing.
          </div>
          <div class="text">
            Here you can also share the content you create, if our technical
            team likes it, then we will also share it on our blog.
          </div>
          <div class="text">
            In the end, I would say keep visiting our website and enjoy the
            quality content.
          </div>

          <div className="text">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
              incidunt consequuntur esse repellat maiores asperiores doloremque
              quod architecto quos debitis suscipit obcaecati, explicabo hic
              magni molestiae voluptates repudiandae. Cupiditate, recusandae!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quae molestiae explicabo reprehenderit blanditiis totam
              quasi, eaque asperiores fugit, omnis, nemo similique repudiandae!
              Mol litia maxime atque explicabo optio ab architecto? Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Labore, ut accusamus
              quibusdam harum assumenda vero quasi qui numquam iure.
              Exercitationem repellendus assumenda voluptates pariatur nisi
              beatae harum reprehenderit laboriosam nostrum.
            </p>
          </div>
          <div className="text mt-5">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
              incidunt consequuntur esse repellat maiores asperiores doloremque
              quod architecto quos debitis suscipit obcaecati, explicabo hic
              magni molestiae voluptates repudiandae. Cupiditate, recusandae!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quae molestiae explicabo reprehenderit blanditiis totam
              quasi, eaque asperiores fugit, omnis, nemo similique repudiandae!
              Mol litia maxime atque explicabo optio ab architecto? Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Labore, ut accusamus
              quibusdam harum assumenda vero quasi qui numquam iure.
              Exercitationem repellendus assumenda voluptates pariatur nisi
              beatae harum reprehenderit laboriosam nostrum.
            </p>
          </div>
          <div class="text">
            We works on UI/UX and functionality as well so that a plugins comes
            with proper stucture & stunning looks which suits to your web app &
            website.
          </div>
          <div class="text">
            We take a small toolkit here and ride it well so that it is fit for
            your use. One who performs well and looks even better.
          </div>
          <div class="text">
            Here we are trying to give you all kinds of technical content,
            whether it is related to designing or functionality. We are creating
            content on a lot of languages and will continue to make it free of
            cost even if you use it without any problem. Which is a very
            important thing.
          </div>
          <div class="text">
            Here you can also share the content you create, if our technical
            team likes it, then we will also share it on our blog.
          </div>
          <div class="text">
            In the end, I would say keep visiting our website and enjoy the
            quality content.
          </div>

          <div className="text">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
              incidunt consequuntur esse repellat maiores asperiores doloremque
              quod architecto quos debitis suscipit obcaecati, explicabo hic
              magni molestiae voluptates repudiandae. Cupiditate, recusandae!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quae molestiae explicabo reprehenderit blanditiis totam
              quasi, eaque asperiores fugit, omnis, nemo similique repudiandae!
              Mol litia maxime atque explicabo optio ab architecto? Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Labore, ut accusamus
              quibusdam harum assumenda vero quasi qui numquam iure.
              Exercitationem repellendus assumenda voluptates pariatur nisi
              beatae harum reprehenderit laboriosam nostrum.
            </p>
          </div>
        </div>
      </section>
      <section class="about-section ">
        <div class="container py-5">
          <div class="row mt-5">
            <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div class="inner-column">
                <div class="sec-title">
                  <span class="title mt-5">About Css3transition</span>
                  <h2>We are Creative Tech Enthusiast working since 2015</h2>
                </div>
                <div class="text">
                  I am Rahul Yaduvanshi works at Css3 Transition since last 3
                  years. We are here to provide touch notch solution for your
                  website or web application that helps you to make your website
                  look attractive & efficient in handling by creating usefull
                  plugins thats you need.
                </div>
                <div class="text">
                  We are here to serve you next level tutorial that currently in
                  trend to match you with your expertise. Css3 transition is a
                  learning website. where you can find many good quality content
                  related to web development and tutorials about plugins. here
                  we are using html, html5, css, css3, jquery & javascript along
                  with inspirational UI design layout by professionals by using
                  Photoshop and adobe allustrator.
                </div>
                <div class="btn-box">
                  <a href="#" class="theme-btn btn-style-one">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Image Column --> */}
            <div class="image-column col-lg-6 col-md-12 col-sm-12">
              <div class="inner-column wow fadeInLeft">
                <div class="author-desc">
                  <h2></h2>
                  <span>Web Developer</span>
                </div>
              </div>
            </div>
          </div>
          <div class="sec-title">
            <span class="title">Our Future Goal</span>
            <h2>We want to lead in innovation & Technology</h2>
          </div>
          <div class="text">
            We works on UI/UX and functionality as well so that a plugins comes
            with proper stucture & stunning looks which suits to your web app &
            website.
          </div>
          <div class="text">
            We take a small toolkit here and ride it well so that it is fit for
            your use. One who performs well and looks even better.
          </div>
          <div class="text">
            Here we are trying to give you all kinds of technical content,
            whether it is related to designing or functionality. We are creating
            content on a lot of languages and will continue to make it free of
            cost even if you use it without any problem. Which is a very
            important thing.
          </div>
          <div class="text">
            Here you can also share the content you create, if our technical
            team likes it, then we will also share it on our blog.
          </div>
          <div class="text">
            In the end, I would say keep visiting our website and enjoy the
            quality content.
          </div>

          <div className="text">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
              incidunt consequuntur esse repellat maiores asperiores doloremque
              quod architecto quos debitis suscipit obcaecati, explicabo hic
              magni molestiae voluptates repudiandae. Cupiditate, recusandae!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quae molestiae explicabo reprehenderit blanditiis totam
              quasi, eaque asperiores fugit, omnis, nemo similique repudiandae!
              Mol litia maxime atque explicabo optio ab architecto? Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Labore, ut accusamus
              quibusdam harum assumenda vero quasi qui numquam iure.
              Exercitationem repellendus assumenda voluptates pariatur nisi
              beatae harum reprehenderit laboriosam nostrum.
            </p>
          </div>
          <div className="text mt-5">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
              incidunt consequuntur esse repellat maiores asperiores doloremque
              quod architecto quos debitis suscipit obcaecati, explicabo hic
              magni molestiae voluptates repudiandae. Cupiditate, recusandae!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quae molestiae explicabo reprehenderit blanditiis totam
              quasi, eaque asperiores fugit, omnis, nemo similique repudiandae!
              Mol litia maxime atque explicabo optio ab architecto? Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Labore, ut accusamus
              quibusdam harum assumenda vero quasi qui numquam iure.
              Exercitationem repellendus assumenda voluptates pariatur nisi
              beatae harum reprehenderit laboriosam nostrum.
            </p>
          </div>
          <div class="text">
            We works on UI/UX and functionality as well so that a plugins comes
            with proper stucture & stunning looks which suits to your web app &
            website.
          </div>
          <div class="text">
            We take a small toolkit here and ride it well so that it is fit for
            your use. One who performs well and looks even better.
          </div>
          <div class="text">
            Here we are trying to give you all kinds of technical content,
            whether it is related to designing or functionality. We are creating
            content on a lot of languages and will continue to make it free of
            cost even if you use it without any problem. Which is a very
            important thing.
          </div>
          <div class="text">
            Here you can also share the content you create, if our technical
            team likes it, then we will also share it on our blog.
          </div>
          <div class="text">
            In the end, I would say keep visiting our website and enjoy the
            quality content.
          </div>

          <div className="text">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
              incidunt consequuntur esse repellat maiores asperiores doloremque
              quod architecto quos debitis suscipit obcaecati, explicabo hic
              magni molestiae voluptates repudiandae. Cupiditate, recusandae!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quae molestiae explicabo reprehenderit blanditiis totam
              quasi, eaque asperiores fugit, omnis, nemo similique repudiandae!
              Mol litia maxime atque explicabo optio ab architecto? Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Labore, ut accusamus
              quibusdam harum assumenda vero quasi qui numquam iure.
              Exercitationem repellendus assumenda voluptates pariatur nisi
              beatae harum reprehenderit laboriosam nostrum.
            </p>
          </div>
        </div>
      </section>
      <section class="about-section ">
        <div class="container py-5">
          <div class="row mt-5">
            <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div class="inner-column">
                <div class="btn-box"></div>
              </div>
            </div>

            {/* <!-- Image Column --> */}
            <div
              class="image-column col-lg-6 col-md-12 col-sm-12 pt-5"
              id="cz"
              smooth={true}
            >
              <div class="inner-column wow fadeInLeft">
                <div class="author-desc pt-5">
                  <h2>Subham Bhowmik</h2>
                  <span>Web Developer</span>
                </div>
              </div>
            </div>
          </div>
          <div class="sec-title">
            <span class="title">Our Future Goal</span>
            <h2>We want to lead in innovation & Technology</h2>
          </div>
          <div class="text">
            We works on UI/UX and functionality as well so that a plugins comes
            with proper stucture & stunning looks which suits to your web app &
            website.
          </div>
          <div class="text">
            We take a small toolkit here and ride it well so that it is fit for
            your use. One who performs well and looks even better.
          </div>
          <div class="text">
            Here we are trying to give you all kinds of technical content,
            whether it is related to designing or functionality. We are creating
            content on a lot of languages and will continue to make it free of
            cost even if you use it without any problem. Which is a very
            important thing.
          </div>
          <div class="text">
            Here you can also share the content you create, if our technical
            team likes it, then we will also share it on our blog.
          </div>
          <div class="text">
            In the end, I would say keep visiting our website and enjoy the
            quality content.
          </div>

          <div className="text">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
              incidunt consequuntur esse repellat maiores asperiores doloremque
              quod architecto quos debitis suscipit obcaecati, explicabo hic
              magni molestiae voluptates repudiandae. Cupiditate, recusandae!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quae molestiae explicabo reprehenderit blanditiis totam
              quasi, eaque asperiores fugit, omnis, nemo similique repudiandae!
              Mol litia maxime atque explicabo optio ab architecto? Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Labore, ut accusamus
              quibusdam harum assumenda vero quasi qui numquam iure.
              Exercitationem repellendus assumenda voluptates pariatur nisi
              beatae harum reprehenderit laboriosam nostrum.
            </p>
          </div>
          <div className="text mt-5">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
              incidunt consequuntur esse repellat maiores asperiores doloremque
              quod architecto quos debitis suscipit obcaecati, explicabo hic
              magni molestiae voluptates repudiandae. Cupiditate, recusandae!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quae molestiae explicabo reprehenderit blanditiis totam
              quasi, eaque asperiores fugit, omnis, nemo similique repudiandae!
              Mol litia maxime atque explicabo optio ab architecto? Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Labore, ut accusamus
              quibusdam harum assumenda vero quasi qui numquam iure.
              Exercitationem repellendus assumenda voluptates pariatur nisi
              beatae harum reprehenderit laboriosam nostrum.
            </p>
          </div>
          <div class="text">
            We works on UI/UX and functionality as well so that a plugins comes
            with proper stucture & stunning looks which suits to your web app &
            website.
          </div>
          <div class="text">
            We take a small toolkit here and ride it well so that it is fit for
            your use. One who performs well and looks even better.
          </div>
          <div class="text">
            Here we are trying to give you all kinds of technical content,
            whether it is related to designing or functionality. We are creating
            content on a lot of languages and will continue to make it free of
            cost even if you use it without any problem. Which is a very
            important thing.
          </div>
          <div class="text">
            Here you can also share the content you create, if our technical
            team likes it, then we will also share it on our blog.
          </div>
          <div class="text">
            In the end, I would say keep visiting our website and enjoy the
            quality content.
          </div>

          <div className="text">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
              incidunt consequuntur esse repellat maiores asperiores doloremque
              quod architecto quos debitis suscipit obcaecati, explicabo hic
              magni molestiae voluptates repudiandae. Cupiditate, recusandae!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quae molestiae explicabo reprehenderit blanditiis totam
              quasi, eaque asperiores fugit, omnis, nemo similique repudiandae!
              Mol litia maxime atque explicabo optio ab architecto? Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Labore, ut accusamus
              quibusdam harum assumenda vero quasi qui numquam iure.
              Exercitationem repellendus assumenda voluptates pariatur nisi
              beatae harum reprehenderit laboriosam nostrum.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
