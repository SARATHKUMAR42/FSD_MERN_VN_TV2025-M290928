import React from "react";

function Footer() {
  return (
    <footer 
      className="text-white text-center py-4 mt-5"
      style={{
        backgroundImage: "url('/assets/banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div style={{ background: "rgba(0,0,0,0.5)", padding: "20px" }}>
        <h5>Global Academy</h5>
        <p>Excellence. Innovation. Leadership.</p>
        <small>© {new Date().getFullYear()} Global Academy</small>
      </div>
    </footer>
  );
}

export default Footer;

