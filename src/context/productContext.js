// import { queries } from "@testing-library/react";
import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const productsContext = createContext();

export const useProducts = () => {
  return useContext(productsContext);
};

const INIT_STATE = {
  products: [],
  oneProduct: {},
};

let API = "http://34.170.17.83/children/";
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_ONE_PRODUCTS":
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
};

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const location = useLocation();
  const navigate = useNavigate();

  const getProducts = async () => {
    try {
      // !!! ТОКЕН НУЖЕН, ХОТЬ И В ДОКУМЕНТАЦИИ НЕ ОБЯЗАТЕЛЕН
      const token = JSON.parse(localStorage.getItem("token"));
      console.log(token);
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API}${window.location.search}`, config);
      dispatch({ type: "GET_PRODUCTS", payload: res.data });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const addProduct = async (newProduct) => {
    const token = localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : "";

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token.access}`,
      },
    };

    try {
      const res = await axios.post(
        `http://34.170.17.83/children/`,
        newProduct,
        config
      );
      console.log(token.access);
      alert(res);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };
  const addChildren = async (newProduct) => {
    const token = localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : "";

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token.access}`,
      },
    };
    try {
      const res = await axios.post(API, newProduct, config);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const getOneProduct = async (id) => {
    try {
      const { data } = await axios(`${API}/${id}`);
      let action = {
        type: "GET_ONE_PRODUCT",
        payload: data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  const saveEditedProduct = async (id, newProduct) => {
    try {
      await axios.patch(`${API}/${id}`, newProduct);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(location.search);

    if (value == "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }

    const url = `${location.pathname}?${search.toString()}`;
    navigate(url);
  };

  let values = {
    products: state.products,
    oneProduct: state.oneProduct,
    saveEditedProduct,

    getProducts,
    deleteProduct,
    getOneProduct,
    fetchByParams,
    addChildren,
  };

  return (
    <productsContext.Provider value={values}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
