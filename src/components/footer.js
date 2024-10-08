import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerStyle = {
    backgroundColor: "#333",
    color: "white",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    width:"100%",
    marginTop:"50px",
    borderRadius:" 10px",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  };

  const sectionStyle = {
    flex: "1 1 200px",
    marginBottom: "1rem",
  };

  const headingStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "2rem",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
  };

  const listItemStyle = {
    marginBottom: "0.5rem",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    
  };

  const copyrightStyle = {
    marginTop: "2rem",
    textAlign: "center",
    width: "100%",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <h3 style={headingStyle}>Quick Links</h3>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <a href="/" style={linkStyle}>
                Home
              </a>
            </li>
            <li style={listItemStyle}>
              <a href="/menu" style={linkStyle}>
                Menu
              </a>
            </li>
            <li style={listItemStyle}>
              <a href="/about" style={linkStyle}>
                About Us
              </a>
            </li>
            <li style={listItemStyle}>
              <a href="/contact" style={linkStyle}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div style={sectionStyle}>
          <h3 style={headingStyle}>Contact Us</h3>
          <p>123 Food Street</p>
          <p>Foodville, FD 12345</p>
          <p>Phone: 1234567890</p>
          <p>Email: arkamfoodvilla.com</p>
        </div>
        <div style={sectionStyle}>
          <h3 style={headingStyle}>Follow Us</h3>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Snapchat</p>
        </div>
        <div style={copyrightStyle}>
          <p>&copy; {currentYear} Food App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
