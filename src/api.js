import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

export const fetchProducts = () =>
  axios.get(`${BASE_URL}/products`).then(res => res.data);

export const fetchCategories = () =>
  axios.get(`${BASE_URL}/products/categories`).then(res => res.data);

export const fetchProductDetails = (productId) =>
  axios.get(`${BASE_URL}/products/${productId}`).then(res => res.data);

export const fetchProductsByCategory = async (category) => {
  console.log("category recieved on api ", category)
  const url = category
    ? `${BASE_URL}/products/category/${category}`
    : `${BASE_URL}/products`;
  const res = await axios.get(url);
  return res.data;
};
