import React from "react";

const students = [
  { name: "Samuel", dept: "CSBS", year: "3rd Year" },
  { name: "Monisha", dept: "ECE", year: "2nd Year" },
  { name: "Thiyanika", dept: "IT", year: "1st Year" },
  { name: "ilavarasan", dept: "CSBS", year: "4th Year" },
];

export default function StudentCards() {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "15px" }}>Student List</h2>

      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        {students.map((stu, index) => (
          <div
            key={index}
            style={{
              width: "200px",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              background: "black",
            }}
          >
            <h3>{stu.name}</h3>
            <p>Department: {stu.dept}</p>
            <p>Year: {stu.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}