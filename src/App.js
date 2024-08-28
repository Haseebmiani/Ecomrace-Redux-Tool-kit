import React from "react";
import Main from "./component/Main/Main";
import { Route, Routes } from "react-router-dom";
import SingleProduct from "./component/filterProducts/SingleProduct";
import FilteredProducts from "./component/filterProducts/FilteredProducts";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/filteredProducts/:type" element={<FilteredProducts />} />
        <Route path="/filteredProducts/:type/:id" element={<SingleProduct />} />
      </Routes>
    </>
  );
};

export default App;
