import React, { useState } from "react";
import axios from "axios";

export default function Q18() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://dummyjson.com/posts/add",
        {
          title,
          body,
          userId: 1,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setMessage("Post Added!");
      setTitle("");
      setBody("");
    } catch (err) {
      setMessage("Error adding post");
      console.log(err);
    }
  };

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>Add New Post</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          style={styles.input}
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          style={styles.textarea}
          placeholder="Enter body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button style={styles.btn} type="submit">
          Add Post
        </button>
      </form>

      {message && <p style={styles.msg}>{message}</p>}
    </div>
  );
}

const styles = {
  wrapper: {
    maxWidth: "450px",
    margin: "40px auto",
    padding: "20px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "15px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "10px",
    height: "80px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  btn: {
    padding: "10px",
    background: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  msg: {
    textAlign: "center",
    marginTop: "15px",
    fontWeight: "bold",
  },
};

