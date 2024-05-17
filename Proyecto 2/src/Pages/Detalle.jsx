import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductosById } from "../Services/productosServices";
import { useNavigate } from "react-router-dom";

function Detalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const request = async () => {
      try {
        const response = await getProductosById(id);
        setProducto(response);
        setLoading(false);
      } catch (e) {
        navigate("/not-found");
      }
    };
    request();
  }, [id, navigate]);

  if (loading) {
    return <div>Cargando...</div>;
  } else {
    const { title, price, pictures } = producto;
    return (
      <div>
        <h2>Detalle del Producto</h2>
        <p>Nombre: {title}</p>
        <p>Precio: ${price}</p>
        <div>
          {pictures.map(({ id, secure_url }) => (
            <img key={id} src={secure_url} alt="" />
          ))}
        </div>
        <button onClick={() => console.log("Comprar")}>Comprar</button>
      </div>
    );
  }
}

export default Detalle;
