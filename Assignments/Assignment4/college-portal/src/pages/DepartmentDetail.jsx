import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import departmentsData from "../data/departments.json";
import { motion } from "framer-motion";

function DepartmentDetail() {
  const { id } = useParams();
  const [dept, setDept] = useState(null);

  useEffect(() => {
    const found = departmentsData.find((d) => d.id === id);
    setDept(found);
  }, [id]);

  if (!dept) return <p>Loading...</p>;

  return (
    <div className="container py-4">

      {/* Banner Section */}
      <motion.div
        className="mb-4 rounded shadow-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <img
          src={`/assets/departments/${dept.id}.jpg`}
          alt={dept.name}
          className="img-fluid rounded"
          style={{ width: "100%", maxHeight: "360px", objectFit: "cover" }}
        />
      </motion.div>

      {/* Department Name */}
      <h2 className="section-title mb-3">{dept.name}</h2>

      {/* Full Description */}
      <p className="lead" data-aos="fade-up">
        {dept.fullDescription}
      </p>

      {/* Courses Offered */}
      <div className="mt-5" data-aos="fade-right">
        <h4>Courses Offered</h4>
        <ul className="mt-3">
          {dept.courses.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </div>

      {/* Faculty Members */}
      <div className="mt-5" data-aos="fade-left">
        <h4>Faculty Members</h4>
        <div className="row mt-3">
          {dept.faculty.map((f, i) => (
            <div className="col-md-4 mb-3" key={i}>
              <div className="card p-3 shadow-sm h-100">
                <h6>{f}</h6>
                <p className="text-muted">
                  Highly qualified faculty member with experience in teaching,
                  research, and industry collaboration.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Labs & Facilities */}
      <div className="mt-5" data-aos="fade-up">
        <h4>Labs & Facilities</h4>
        <div className="row mt-3">
          {dept.labs.map((l, i) => (
            <div className="col-md-4 mb-3" key={i}>
              <div className="card p-3 shadow-sm h-100">
                <h6>{l}</h6>
                <p>
                  Equipped with modern tools and systems to support hands-on 
                  experiments, research, and innovation.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Research Areas */}
      <div className="mt-5 p-4 bg-light rounded shadow-sm" data-aos="zoom-in">
        <h4>Research Focus Areas</h4>
        <ul className="mt-3">
          <li>Emerging technologies and core engineering innovation</li>
          <li>Real-world industry problem solving</li>
          <li>Interdisciplinary research collaborations</li>
          <li>National & international conference publications</li>
        </ul>
      </div>

      {/* Student Achievements */}
      <div className="mt-5" data-aos="fade-up">
        <h4>Student Achievements</h4>
        <ul className="mt-3">
          <li>Winners of national hackathons and coding challenges</li>
          <li>Research papers published in reputed journals</li>
          <li>Projects incubated into startup initiatives</li>
          <li>Top performers in university examinations</li>
        </ul>
      </div>

      {/* Recruiters */}
      <div className="mt-5 p-4 rounded shadow-sm bg-white" data-aos="fade-up">
        <h4>Top Recruiters</h4>
        <p className="text-muted">
          Graduates from the {dept.name} department secure excellent placements 
          in leading MNCs and core companies.
        </p>

        <div className="row text-center">
          <div className="col-6 col-md-3 mb-3">
            <div className="p-3 bg-light rounded shadow-sm">TCS</div>
          </div>

          <div className="col-6 col-md-3 mb-3">
            <div className="p-3 bg-light rounded shadow-sm">Infosys</div>
          </div>

          <div className="col-6 col-md-3 mb-3">
            <div className="p-3 bg-light rounded shadow-sm">Accenture</div>
          </div>

          <div className="col-6 col-md-3 mb-3">
            <div className="p-3 bg-light rounded shadow-sm">Wipro</div>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="mt-5 p-4 bg-primary text-white rounded shadow-sm" data-aos="zoom-in">
        <h4>Department Highlights</h4>
        <p className="mt-3">
          The {dept.name} department promotes innovation, hands-on learning, 
          industry collaboration, and student research. Students gain real-world 
          experience through internships, workshops, seminars, and major projects 
          guided by expert faculty.
        </p>
      </div>

      {/* Back Button */}
      <Link to="/departments" className="btn btn-primary mt-4 mb-5">
        Back to Departments
      </Link>

    </div>
  );
}

export default DepartmentDetail;
