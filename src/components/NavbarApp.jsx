import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import logo from "../images/Libreriaeltrebol2.webp";
import CartWidget from "./CartWidget";

export default function NavbarApp() {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container className="contenedor">
          <Navbar.Brand href="#home">
            <img
              className="logoTrebol"
              src={logo}
              alt="Logo de librería El trébol"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <div className="container-fluid">
              <h1>Librería El trébol </h1>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <Nav className="me-auto mb-2 mb-lg-0">
                  <Nav.Link href="#home" className="itemNombre">
                    Promociones
                  </Nav.Link>
                  <NavDropdown
                    className="itemNombre"
                    title="Productos"
                    id="basic-nav-ddProductos"
                  >
                    <NavDropdown.Item href="#">Escolar</NavDropdown.Item>
                    <NavDropdown.Item href="#">Artística</NavDropdown.Item>
                    <NavDropdown.Item href="#">Comercial</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    className="itemNombre"
                    title="Servicios"
                    id="basic-nav-ddServicios"
                  >
                    <NavDropdown.Item href="#">Fotocopias</NavDropdown.Item>
                    <NavDropdown.Item href="#">Impresiones</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#" className="itemNombre">
                    Contacto
                  </Nav.Link>
                  <CartWidget />
                </Nav>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
