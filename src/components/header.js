import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";


const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Navbar bg="dark" data-bs-theme="dark" style={{ height: "60px" }}>
      <Container>
        <NavLink to="/" className="text-decoration-none text-light mx-3">
          Add to Cart
        </NavLink>
        <Nav className="me-auto">
          <NavLink to="/" className="text-decoration-none text-light">
            Home
          </NavLink>
        </Nav>
        <Badge badgeContent={4} color="primary">
          <i
            className="fa-solid fa-cart-shopping text-light"
            style={{ fontSize: 25, cursor: "pointer" }}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          ></i>
        </Badge>
      </Container>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div
          className="card_details d-flex justify-content-center align-item-center"
          style={{ width: "15rem", padding: 10, position: "relative" }}
        >
          <i
            className="fas fa-close smallclose"
            onClick={handleClose}
            style={{
              position: "absolute",
              top: 2,
              right: 20,
              fontsize: 23,
              cursor: "pointer",
            }}
          ></i>
          <p style={{ fontsize: 22, marginTop: "20px" }}>Your carts is empty</p>
          <img
            src="cart.gif"
            alt="cart-logo"
            className="emptycart_img"
            style={{ width: "5rem", padding: 10 }}
          />
        </div>
      </Menu>
    </Navbar>
  );
};

export default Header;
