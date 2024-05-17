import { useEffect, useState } from "react";
import axios from 'axios';

function useFetchProducts() {
  
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [buscar, setBuscar] = useState("ipod");
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${buscar}`);
        setProductos(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener productos:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [buscar]);

  const handleBuscar = (event) => {
    const { value } = event.target;
    setBuscar(value);
  };

  return {
    productos,
    loading,
    buscar,
    handleBuscar,
    login: true, // Suponiendo que siempre estás logueado
  };
}

export default useFetchProducts;

