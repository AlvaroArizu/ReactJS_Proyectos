import { Link } from "react-router-dom";
function Producto({ id, title, price, thumbnail }) {
  return (
    <div>
      <div>
        <img src={thumbnail} alt="" />
      </div>
      <h3>{title}</h3>
      <p>$ {price}</p>
      <button>
        <Link to={`/producto/${id}`}>Ver detalle</Link>
      </button>
    </div>
  );
}

export default Producto;
