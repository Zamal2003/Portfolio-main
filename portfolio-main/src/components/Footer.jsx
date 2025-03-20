import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#222",
    color: "white",
    textAlign: "center",
    padding: "15px 0",
    fontSize: "1rem",
    marginTop: "20px",
  };

  const linkStyle = {
    color: "#ff6b6b",
    textDecoration: "none",
    margin: "0 10px",
    fontWeight: "bold",
  };

  const linkHoverStyle = {
    textDecoration: "underline",
  };

  return (
    <footer style={footerStyle}>
      <p>© {new Date().getFullYear()} MD Jamaluddin. All Rights Reserved.</p>
      <div>
        <a href="https://github.com/Zamal2003?tab=repositories" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/md-jamaluddin-52175a250/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          LinkedIn
        </a>
        <a href="mailto:mdjamaluddina008@gmail.com" style={linkStyle}>
  Email
</a>

      </div>
    </footer>
  );
};

export default Footer;
