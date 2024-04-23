import React from "react";
import { Home } from "../features/products/home";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <Link to="/products/add">Add Product</Link>
      <Home />
    </>
  );
};
