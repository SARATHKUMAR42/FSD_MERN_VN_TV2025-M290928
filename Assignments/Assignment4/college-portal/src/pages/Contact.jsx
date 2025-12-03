import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="container py-4">

      {/* PAGE TITLE */}
      <h2 className="section-title mb-3">Contact Us</h2>
      <p className="lead" data-aos="fade-up">
        We're here to help you with admissions, academics, or general enquiries.
        Reach out to us anytime — our team will respond as soon as possible.
      </p>

      {/* CONTACT & MAP SECTION */}
      <div className="row mt-4">

        {/* LEFT SIDE — CONTACT DETAILS */}
        <div className="col-md-5" data-aos="fade-right">
          <div className="card p-4 shadow-sm mb-4">
            <h5 className="fw-bold">Main Campus Address</h5>
            <p className="mb-2">Global Academy</p>
            <p className="text-muted">
              No. 12, Knowledge Park, Academic Road,<br />
              Chennai - 600095, India
            </p>
          </div>

          <div className="card p-4 shadow-sm mb-4">
            <h5 className="fw-bold">Contact Information</h5>
            <p className="mb-1">📞 <strong>Phone:</strong> +91 98765 43210</p>
            <p className="mb-1">📧 <strong>Email:</strong> info@globalacademy.edu</p>
            <p>🌐 <strong>Website:</strong> www.globalacademy.edu</p>
          </div>

          <div className="card p-4 shadow-sm mb-4">
            <h5 className="fw-bold">Office Timings</h5>
            <p className="mb-1">Monday – Friday: 9:00 AM to 5:00 PM</p>
            <p className="mb-1">Saturday: 9:00 AM to 1:00 PM</p>
            <p>Sunday: Holiday</p>
          </div>
        </div>

        {/* RIGHT SIDE — MAP */}
        <div className="col-md-7" data-aos="fade-left">
          <div className="rounded shadow-sm overflow-hidden">
            <iframe
              title="Campus Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.129768540374!2d80.210198!3d13.0826805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265bb8b4efc23%3A0x8a1a3547351826c8!2sChennai!5e0!3m2!1sen!2sin!4v1706510000000!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>

      {/* ENQUIRY FORM */}
      <motion.div
        className="mt-5 p-4 bg-light rounded shadow-sm"
        data-aos="zoom-in"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="mb-3 section-title">Quick Enquiry</h3>

        <form>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="Enter your full name" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Phone Number</label>
              <input type="text" className="form-control" placeholder="Enter your phone number" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Department</label>
              <select className="form-select">
                <option>Select Department</option>
                <option>Computer Science Engineering</option>
                <option>Information Technology</option>
                <option>Electronics & Communication</option>
                <option>Mechanical Engineering</option>
                <option>Civil Engineering</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" rows="4" placeholder="Write your message..."></textarea>
          </div>

          <button className="btn btn-primary btn-lg mt-2">Submit Enquiry</button>
        </form>

      </motion.div>

      {/* ADDITIONAL INFORMATION */}
      <div className="text-center mt-5" data-aos="fade-up">
        <h4 className="fw-bold">Need more information?</h4>
        <p>
          Our team will be happy to assist you with admissions, fee details,
          academic queries, or campus visits.
        </p>
        <a href="mailto:info@globalacademy.edu" className="btn btn-primary">
          Email Us
        </a>
      </div>

    </div>
  );
}

export default Contact;
