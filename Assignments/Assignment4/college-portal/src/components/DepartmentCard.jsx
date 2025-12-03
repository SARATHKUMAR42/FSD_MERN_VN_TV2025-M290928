import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function DepartmentCard({ dept }) {
  return (
    <div className="col-md-4 mb-4">
      <motion.div 
        whileHover={{ scale: 1.03 }}
        className="card p-3 h-100 shadow-sm"
        data-aos="fade-up"
      >
        <img 
          src={`/assets/departments/${dept.id}.jpg`} 
          className="img-fluid rounded mb-3"
        />

        <h5>{dept.name}</h5>
        <p>{dept.description}</p>

        <Link to={`/departments/${dept.id}`} className="btn btn-primary">
          View More
        </Link>
      </motion.div>
    </div>
  );
}

export default DepartmentCard;
