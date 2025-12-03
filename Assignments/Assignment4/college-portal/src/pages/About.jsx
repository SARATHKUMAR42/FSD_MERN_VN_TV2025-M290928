import React from "react";

function About() {
  return (
    <div className="container py-4">

      {/* PAGE TITLE */}
      <h2 className="section-title mb-3">About Global Academy</h2>

      {/* BANNER IMAGE */}
      <img
        src="/assets/banner.jpg"
        className="img-fluid w-100 rounded mb-4 shadow-sm"
        data-aos="zoom-in"
        alt="Campus Banner"
      />

      {/* INTRODUCTION */}
      <p className="lead" data-aos="fade-up">
        Global Academy stands as a premier institution of higher learning,
        empowering students with world-class education, innovation-driven
        programs, and a multicultural learning environment. Since its inception
        in 1990, the institution has grown into a hub of academic excellence and
        leadership development.
      </p>

      <p data-aos="fade-up">
        Our curriculum is designed to foster critical thinking, research
        potential, and real-world problem-solving. With strong industry
        partnerships, cutting-edge laboratories, and a vibrant student culture,
        Global Academy continues to shape future leaders and innovators across
        multiple disciplines.
      </p>

      {/* MISSION & VISION */}
      <div className="row mt-5">
        <div className="col-md-6 mb-4" data-aos="fade-right">
          <h4>Mission</h4>
          <p>
            To empower students to think globally, innovate freely, and lead
            responsibly with knowledge, values, and purpose.
          </p>
        </div>

        <div className="col-md-6 mb-4" data-aos="fade-left">
          <h4>Vision</h4>
          <p>
            To be recognized internationally for excellence in teaching,
            research, industry collaboration, and shaping future-ready leaders.
          </p>
        </div>
      </div>

      {/* VALUES */}
      <h4 className="mt-4">Our Core Values</h4>
      <ul className="mb-4" data-aos="fade-up">
        <li>Integrity and Ethics</li>
        <li>Innovation and Curiosity</li>
        <li>Inclusiveness and Diversity</li>
        <li>Sustainability and Responsibility</li>
        <li>Commitment to Excellence</li>
      </ul>

      {/* FACILITIES SECTION */}
      <h3 className="section-title mt-5 mb-4">State-of-the-Art Facilities</h3>
      <div className="row">
        <div className="col-md-4 mb-4" data-aos="fade-up">
          <img
            src="/assets/campus2.jpg"
            className="img-fluid rounded shadow-sm mb-3"
            alt="Library"
          />
          <h5>World-Class Library</h5>
          <p>
            A vast collection of books, research journals, digital resources,
            and silent reading zones.
          </p>
        </div>

        <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
          <img
            src="/assets/campus3.jpg"
            className="img-fluid rounded shadow-sm mb-3"
            alt="Labs"
          />
          <h5>Modern Laboratories</h5>
          <p>
            Fully equipped labs for engineering, technology, science, and
            advanced research.
          </p>
        </div>

        <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="400">
          <img
            src="/assets/students.jpg"
            className="img-fluid rounded shadow-sm mb-3"
            alt="Hostel"
          />
          <h5>Comfortable Campus Living</h5>
          <p>
            Safe and spacious hostels with Wi-Fi, recreation areas, and dining
            facilities.
          </p>
        </div>
      </div>

      {/* LEADERSHIP SECTION */}
      <h3 className="section-title mt-5 mb-3">Leadership & Governance</h3>
      <p data-aos="fade-up">
        The institution is guided by a team of distinguished academicians,
        industry veterans, and visionary administrators who work collectively to
        ensure high educational standards and holistic student development.
      </p>

      <div className="row mt-3">
        <div className="col-md-6" data-aos="fade-right">
          <div className="card p-3 shadow-sm">
            <h5>Dr. Anand Kumar</h5>
            <p className="text-muted">Chairman & Founder</p>
            <p>
              A visionary leader with over 30 years of experience in education
              and institutional development.
            </p>
          </div>
        </div>

        <div className="col-md-6" data-aos="fade-left">
          <div className="card p-3 shadow-sm">
            <h5>Dr. Priya Raman</h5>
            <p className="text-muted">Dean, Academic Affairs</p>
            <p>
              Renowned academician and researcher leading the curriculum
              development and quality standards.
            </p>
          </div>
        </div>
      </div>

      {/* ACHIEVEMENTS */}
      <h3 className="section-title mt-5 mb-3">Achievements & Recognition</h3>

      <ul data-aos="fade-up" className="mb-5">
        <li>Ranked among Top 10 Colleges in the region for Engineering.</li>
        <li>Recipient of National Award for Innovation in Education (2023).</li>
        <li>Over 95% placement success across major disciplines.</li>
        <li>MoUs with international universities for global learning programs.</li>
        <li>Active student clubs, cultural events, and national-level competitions.</li>
      </ul>

    </div>
  );
}

export default About;
