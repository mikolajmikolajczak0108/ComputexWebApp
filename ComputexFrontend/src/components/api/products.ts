const API_URL = "https://computexapi-55f3a80f11dd.herokuapp.com/products/";

export const fetchProducts = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was an error fetching the products:", error);
    throw error;
  }
};
