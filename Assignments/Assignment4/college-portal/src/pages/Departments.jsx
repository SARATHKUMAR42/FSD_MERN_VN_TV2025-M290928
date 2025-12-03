import React, { useEffect, useState } from "react";
import DepartmentCard from "../components/DepartmentCard";
import departmentsData from "../data/departments.json";

function Departments() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    setDepartments(departmentsData);
  }, []);

  return (
    <div className="container py-3">

      {/* TITLE */}
      <h2 className="section-title mb-3">Our Departments</h2>
      <p className="lead" data-aos="fade-up">
        At Global Academy, each department is dedicated to academic excellence,
        research innovation, and the holistic growth of students. With modern
        labs, industry-aligned curriculum, and experienced faculty, our programs
        equip students for successful careers in the global landscape.
      </p>

      {/* DEPARTMENT GRID */}
      <div className="row mt-4">
        {departments.map((dept) => (
          <DepartmentCard key={dept.id} dept={dept} />
        ))}
      </div>

      {/* ABOUT OUR ACADEMICS */}
      <div className="mt-5 p-4 bg-light rounded shadow-sm" data-aos="zoom-in">
        <h3 className="section-title">Academic Excellence</h3>
        <p className="mt-3">
          Our departments follow a strong academic structure that blends theory,
          hands-on training, and industry exposure. Students participate in
          research, innovative projects, national competitions, and workshops
          that prepare them for real-world challenges.
        </p>

        <ul className="mt-3">
          <li>Updated curriculum based on industry standards</li>
          <li>Well-structured laboratory and research facilities</li>
          <li>Highly qualified and research-focused faculty members</li>
          <li>Active student clubs and department associations</li>
          <li>Regular seminars, guest lectures, and tech summits</li>
        </ul>
      </div>

      {/* LABS & FACILITIES */}
      <div className="row mt-5">
        <h3 className="section-title mb-4">Labs & Facilities</h3>

        <div className="col-md-4 mb-4" data-aos="fade-up">
          <div className="card p-3 shadow-sm h-100">
            <h5>Advanced Computing Labs</h5>
            <p>
              High-performance systems, AI labs, coding workspaces, and
              cloud-enabled environments for hands-on development.
            </p>
          </div>
        </div>

        <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
          <div className="card p-3 shadow-sm h-100">
            <h5>Electronics & Engineering Labs</h5>
            <p>
              Fully equipped labs for embedded systems, robotics, VLSI, IoT, and
              communication systems.
            </p>
          </div>
        </div>

        <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="400">
          <div className="card p-3 shadow-sm h-100">
            <h5>Research & Innovation Centers</h5>
            <p>
              Dedicated spaces for research, innovation, prototyping, and startup
              incubation support.
            </p>
          </div>
        </div>
      </div>

      {/* TOP RECRUITERS */}
      <div className="mt-5 p-4 rounded shadow-sm bg-white" data-aos="fade-up">
        <h3 className="section-title">Top Recruiters</h3>
        <p className="text-muted mb-4">
          Our students are placed in top multinational companies, thanks to strong
          industry collaborations and effective training programs.
        </p>

        <div className="row text-center">
          <div className="col-6 col-md-3 mb-3">
            <div className="p-3 bg-light rounded shadow-sm">TCS</div>
          </div>

          <div className="col-6 col-md-3 mb-3">
            <div className="p-3 bg-light rounded shadow-sm">CTS</div>
          </div>

          <div className="col-6 col-md-3 mb-3">
            <div className="p-3 bg-light rounded shadow-sm">Infosys</div>
          </div>

          <div className="col-6 col-md-3 mb-3">
            <div className="p-3 bg-light rounded shadow-sm">Wipro</div>
          </div>
        </div>
      </div>


      {/* CAREER OPPORTUNITIES */}
      <div className="mt-5 p-4 bg-primary text-white rounded shadow-sm" data-aos="zoom-in">
        <h3 className="fw-bold">Career Opportunities</h3>
        <p className="mt-3">
          Students graduating from our departments gain access to global career
          opportunities across software, core engineering, research, data science,
          management, and more.
        </p>

        <ul className="mt-3">
          <li>Software Engineer / Developer</li>
          <li>Research Analyst & Lab Engineer</li>
          <li>Data Scientist / AI Engineer</li>
          <li>Project Manager / Business Analyst</li>
          <li>Industry Research & Innovation Roles</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center mt-5 mb-5" data-aos="fade-up">
        <h4 className="fw-bold">Want to know more about a department?</h4>
        <p>Explore course structure, faculty, labs, and student achievements.</p>
        <a href="/contact" className="btn btn-primary btn-lg">
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default Departments;
