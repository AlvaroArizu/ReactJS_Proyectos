// Productos.jsx
import React, { useState, useEffect } from "react";
import Producto from "./Producto";
import { getProductos } from "../Services/productosServices";

function Productos() {
  // Inicializar el estado
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  // componentDidMount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProductos();
        setProductos(data.slice(0, 4)); // Mostrar solo los primeros 4 productos
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  } else {
    return (
      <div>
        {productos.map((producto) => (
          <Producto
            key={producto.id}
            id={producto.id}
            title={producto.title}
            price={producto.price}
            thumbnail={producto.thumbnail}
          />
        ))}
      </div>
    );
  }
}

export default Productos;
