import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark ">
        <div className="container-fluid">
          <center>
            <Link className="navbar-brand" to="/" id="Myportfolio">
    <img src="../image/pic.webp" alt="" id='FooterImg' /> 
              {" "}
              My Portfolio{" "}
               
            </Link>
          </center>
        </div>
        <marquee behavior="leftToright" direction="left" className = "text-dark">
          Hello! I’m Mangaladitya Chatterjee, a passionate Frontend Developer
          with a knack for transforming ideas into visually stunning and
          functional creations. With 2 years of coding experience, I specialize
          in HTML , CSS , JavaScript ,Bootstrap ,React ,Wrodpress ,Git ,
          wooCommerce , and I thrive on creating solutions that not only meet
          but exceed expectations.
        </marquee>
        <div>
          <button
            className="navbar-toggler bg-dark"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-start text-bg-dark w-75"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header" id="Aboutme">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                About Me
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div id="aboutme">
              <h3>
                I completed my 10th grade with an impressive 92.28% and my 12th
                grade with 87.28% from Bhadiswar Shyamapada Roy VidyaBhaban.
                Following my higher secondary education, I enrolled at Nalhati
                Government Polytechnic College, where I successfully completed
                my first semester with an 87% score and a cumulative GPA of
                87.7.
                <br />
                <br />
                <b>
                  <strong> My Journey in Frontend Development :- </strong>{" "}
                  <br />
                  <br />{" "}
                </b>
                My journey in frontend development began right after I passed
                10th grade. Over the years, I've honed my skills in HTML, CSS,
                JavaScript, Bootstrap , React , Wordpress , WooCommerce , git
                and various frontend frameworks, consistently striving to stay
                updated with the latest industry trends and technologies.
                <br />
                <br />
                <strong>
                  {" "}
                  What I Offer:- <br />
                  <br />{" "}
                </strong>
                1. Responsive Web Design: Crafting user-friendly and visually
                appealing websites that perform seamlessly across all devices.
                <br />
                2. Interactive User Interfaces: Developing interactive elements
                using HTML, CSS, JavaScript, and React to enhance user
                engagement and experience. <br />
                3.Framework Expertise: Utilizing frameworks like Bootstrap for
                streamlined and responsive designs. <br />
                4.Content Management Systems: Building and customizing websites
                using WordPress and WooCommerce. <br />
                5.Version Control: Managing code versions and collaborating
                effectively with Git <br />
                <br />
                <br />
                <br />
                <br />
                <strong> Why Work With Me? </strong> <br />
                <br />
                While I may not have real client experience, I have been
                passionately practicing and developing my frontend skills after
                10th grade. My dedication to continuous learning and improvement
                has equipped me with a robust skill set and a keen eye for
                detail. I approach every project with enthusiasm and a
                commitment to excellence, ensuring that I deliver high-quality
                work that meets your needs.
                <br />
                <br />
                <strong> Let’s Connect</strong> <br /> <br />
                I'm always excited to take on new challenges and help bring your
                vision to life. Feel free to contact me to discuss how we can
                work together.
              </h3>

              <h1>
                {" "}
                <center>My Email ID </center> <br />
                <center> mangaladityac@gmail.com</center>
              </h1>
            </div>
          </div>
        </div>
      </nav>
      <div>
     
      <ul className=" links nav col-md-4 justify-content-end">
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary"><strong>  Home</strong></Link></li>
      <li className="nav-item"><Link to="/education" className="nav-link px-2 text-body-secondary"><strong>  Educational Background</strong></Link></li>
      <li className="nav-item"><Link to="/skills" className="nav-link px-2 text-body-secondary"><strong>  Skills</strong></Link></li>
      <li className="nav-item"><Link to="/projects" className="nav-link px-2 text-body-secondary"><strong>  Projects</strong></Link></li>
      </ul>
     
      </div>
    </>
  );
}

export default Navbar;
