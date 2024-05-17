import instance from "../Config/axios";
export const getProductos = async (buscar) => {
  const { data } = await instance.get(`/sites/MLA/search?q=${buscar}`);
  return data.results;
};
export const getProductosById = async (id) => {
  const { data } = await instance.get(`/items/${id}`);
  return data;
};
export const create = async (data) => {
  return await fetch("https://api.mercadolibre.com/sites/MLA/search?q=iphone", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};
