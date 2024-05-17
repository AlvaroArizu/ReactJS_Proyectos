import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Detalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showDescription, setShowDescription] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await axios.get(`https://api.mercadolibre.com/items/${id}`);
        setProducto(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener el producto:", error);
        setLoading(false);
        navigate("/not-found");
      }
    };
    fetchProducto();
  }, [id, navigate]);

  const toggleDescription = () => {
    setShowDescription(!showDescription); 
  };

  if (loading) {
    return <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px", textAlign: "center" }}>Cargando...</div>;
  } else {
    const { title, price, description, pictures, attributes } = producto;
    const sku = attributes.find(attr => attr.name === "SKU")?.value_name || '';
    return (
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px", textAlign: "center" }}>Detalle del Producto</h2>
        <p style={{ marginBottom: "10px", fontSize: "18px" }}>Nombre: {title}</p>
        <p style={{ marginBottom: "10px", fontSize: "18px" }}>Precio: ${price}</p>
        <p style={{ marginBottom: "10px", fontSize: "18px" }}>SKU: {sku}</p> {/* Muestra el SKU */}
        <div>
          {/* Verifica si el campo pictures existe y si tiene al menos una imagen */}
          {pictures && pictures.length > 0 && (
            <img src={pictures[0].secure_url} alt="" style={{ maxWidth: "100%", height: "auto", marginBottom: "20px" }} />
          )}
        </div>
        <div style={{ marginBottom: "10px", fontSize: "18px" }}>
          <button style={{ backgroundColor: "#3483FA", color: "white", padding: "10px 20px", borderRadius: "5px", border: "none", cursor: "pointer" }} onClick={toggleDescription}>Ver Descripción</button>
          {showDescription && (
            <div>
              <p style={{ marginTop: "10px", marginBottom: "10px" }}>Descripción: {description}</p>
              {attributes && attributes.map(attr => (
                <p key={attr.id} style={{ marginBottom: "5px", fontSize: "16px" }}>{attr.name}: {attr.value_name}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Detalle;





