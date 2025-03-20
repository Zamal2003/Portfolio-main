import React from "react";
import { FaReact, FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa"; 

const services = [
  {
    id: 1,
    icon: <FaReact size={40} color="#61DBFB" />,
    title: "React Frontend Development",
    description: "Building fast, scalable, and modern UI with React.js.",
  },
  {
    id: 2,
    icon: <FaCode size={40} color="#facc15" />,
    title: "Full-Stack Web Development",
    description: "Developing complete web applications using MERN Stack.",
  },
  {
    id: 3,
    icon: <FaPaintBrush size={40} color="#f43f5e" />,
    title: "Custom UI/UX Solutions",
    description: "Creating unique, user-friendly, and aesthetic designs.",
  },
  {
    id: 4,
    icon: <FaMobileAlt size={40} color="#10b981" />,
    title: "Mobile-Responsive Design",
    description: "Ensuring websites are fully optimized for mobile devices.",
  },
];

const Services = () => {
  return (
    <section id="services" style={styles.container}>
      <h2 style={styles.heading}>My Services</h2>
      <div style={styles.grid}>
        {services.map((service) => (
          <div key={service.id} style={styles.card}>
            <div style={styles.icon}>{service.icon}</div>
            <h3 style={styles.title}>{service.title}</h3>
            <p style={styles.description}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: "50px 20px",
    textAlign: "center",
    backgroundColor: "#76a3b0",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#333",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    maxWidth: "1000px",
    margin: "auto",
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s",
  },
  icon: {
    marginBottom: "10px",
  },
  title: {
    fontSize: "1.5rem",
    marginBottom: "10px",
    color: "#222",
  },
  description: {
    fontSize: "1rem",
    color: "#555",
  },
};

export default Services;
