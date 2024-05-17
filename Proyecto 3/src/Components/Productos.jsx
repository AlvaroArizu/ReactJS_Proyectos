import Producto from "./Producto.jsx";
import Row from "react-bootstrap/Row";
import useFetchProducts from "../Utils/hooks/useFetchProducts.jsx";

function Productos() {
  const { productos, loading, buscar, handleBuscar, login } =
    useFetchProducts();

  if (loading) {
    return <div>Cargando ...</div>;
  } else {
    return (
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "20px" }}>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ marginRight: "10px", fontSize: "16px", color: "#666" }}>Buscar</label>
          <input type="text" value={buscar} onChange={handleBuscar} style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", fontSize: "16px" }} />
        </div>
        <Row>
          {productos.slice(0, 4).map((producto) => (
            <Producto
              key={producto.id}
              id={producto.id}
              title={producto.title}
              price={producto.price}
              sku={producto.sku}
              description={producto.description}
              thumbnail={producto.thumbnail} 
              isLogin={true} 
              style={{ marginBottom: "10px", marginTop: "5px", width: "100%" }} 
            />
          ))}
        </Row>
      </div>
    );
  }
}

export default Productos;




