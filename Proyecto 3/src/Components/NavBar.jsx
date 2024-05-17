import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthContext } from "../Context/AuthContext";

function NavBar() {
  const { login, handleLogout, user } = useAuthContext();

  return (
    <Navbar expand="lg" style={{ backgroundColor: "#3483fa", color: "white" }}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: "#ffffff" }} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to={"/"} style={{ color: "white", marginRight: "10px" }}>
            Inicio
          </Nav.Link>
          {!login && (
            <>
              <Nav.Link as={Link} to={"/ingresar"} style={{ color: "white" }}>
                Ingresar
              </Nav.Link>
              <Nav.Link as={Link} to={"/alta"} style={{ color: "white" }}>
                Registrarse
              </Nav.Link>
            </>
          )}
          {login && (
            <>
              <NavDropdown title="Productos" id="basic-nav-dropdown" style={{ color: "white" }}>
                <NavDropdown.Item as={Link} to={"/productos/alta"} style={{ color: "#000000" }}>
                  Alta
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/productos/listado"} style={{ color: "#000000" }}>
                  Listado
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={() => handleLogout()} style={{ color: "white" }}>Salir</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
      {login && <div style={{ color: "white", marginLeft: "10px" }}>Hola {user.name}</div>}
    </Navbar>
  );
}

export default NavBar;
