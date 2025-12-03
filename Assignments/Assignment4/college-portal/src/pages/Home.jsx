import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <div>

      {/* HERO SECTION */}
      <div 
        className="hero position-relative text-white mb-5"
        style={{
          backgroundImage: "url('/assets/campus1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "65vh",
          display: "flex",
          alignItems: "center"
        }}
      >
        {/* Dark Layer */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ background: "rgba(0,0,0,0.55)" }}
        />

        <motion.div 
          className="container position-relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="display-4 fw-bold">Welcome to Global Academy</h1>
          <p className="lead mb-4">
            Excellence in education, research, and global learning.
          </p>

          <Link className="btn btn-light btn-lg" to="/departments">
            Explore Departments
          </Link>
        </motion.div>
      </div>


      {/* CAMPUS LIFE SECTION */}
      <div className="container">

        <h3 className="section-title mb-4">Campus Life</h3>

        <div className="row mb-5">
          {/* CARD 1 */}
          <div className="col-md-4 mb-4" data-aos="fade-up">
            <img 
              src="/assets/campus2.jpg" 
              className="img-fluid rounded shadow-sm mb-3" 
            />
            <h5>Modern Infrastructure</h5>
            <p>
              Our campus blends historic charm with modern facilities, offering
              world-class architecture and peaceful green spaces.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
            <img 
              src="/assets/campus3.jpg" 
              className="img-fluid rounded shadow-sm mb-3" 
            />
            <h5>World-Class Facilities</h5>
            <p>
              Advanced libraries, innovation labs, research centers, and 
              high-tech learning spaces enhance student learning.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="400">
            <img 
              src="/assets/students.jpg" 
              className="img-fluid rounded shadow-sm mb-3" 
            />
            <h5>Diverse Student Community</h5>
            <p>
              A multicultural environment where students collaborate, innovate, 
              and participate in vibrant cultural activities.
            </p>
          </div>
        </div>


        {/* NEW SECTION — WHY CHOOSE US */}
        <h3 className="section-title mb-4">Why Choose Global Academy?</h3>

        <div className="row mb-5">
          <div className="col-md-6" data-aos="fade-right">
            <ul className="list-group shadow-sm">
              <li className="list-group-item">
                🎓 Highly qualified and experienced faculty
              </li>
              <li className="list-group-item">
                🧪 Modern research facilities and industry partnerships
              </li>
              <li className="list-group-item">
                🌍 Focus on global exposure and international programs
              </li>
              <li className="list-group-item">
                💼 Strong placement support and career guidance
              </li>
              <li className="list-group-item">
                🏆 Recognized for academic excellence and innovation
              </li>
            </ul>
          </div>

          <div className="col-md-6" data-aos="fade-left">
            <img 
              src="/assets/department1.jpg" 
              className="img-fluid rounded shadow-sm" 
            />
          </div>
        </div>


        {/* NEW SECTION — OUR COMMITMENT */}
        <div 
          className="p-5 rounded shadow-sm text-white mb-5"
          style={{ background: "var(--primary)" }}
          data-aos="zoom-in"
        >
          <h3 className="fw-bold">Our Commitment</h3>
          <p className="mt-3">
            At Global Academy, we are committed to shaping the leaders of 
            tomorrow. We provide an ecosystem where students grow academically, 
            socially and professionally with access to cutting-edge technology 
            and holistic development.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Home;
