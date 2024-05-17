import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/"}>Inicio</Link>
        </li>
        <li>
          <Link to={"/ingresar"}>Ingresar</Link>
        </li>
        <li>
          <Link to={"/alta"}>Registrarse</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
