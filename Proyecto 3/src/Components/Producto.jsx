import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const styles = {
  card: { marginBottom: "10px", marginTop: "5px" },
};

function Producto({ id, title, price, thumbnail }) {
  return (
    <div>
      <div>
        <img src={thumbnail} alt="" />
      </div>
      <h3>{title}</h3>
      <p>$ {price}</p>
      <Button variant="primary">
        <Link to={`/producto/${id}`} style={{ color: "white", textDecoration: "none" }}>
          Ver detalle
        </Link>
      </Button>
    </div>
  );
}

export default Producto;
