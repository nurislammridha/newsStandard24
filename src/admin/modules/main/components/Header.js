import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap/";
import { useHistory } from "react-router-dom";
const Header = () => {
  const history = useHistory();
  const [logout, setLogout] = useState(false);
  const handleLogout = () => {
    setLogout(true);

    localStorage.setItem("email", "");
    localStorage.setItem("isLoggedIn", false);
  };
  useEffect(() => {
    if (logout) {
      // history.push("/admin/login");
      window.location = "/admin/login";
      setLogout(false);
    }
  }, [logout]);
  return (
    <>
      <Navbar bg="light" expand="lg" className="nav-width">
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link>
              <a onClick={() => handleLogout()}>LOGOUT</a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
