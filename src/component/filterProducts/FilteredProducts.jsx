import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const FilteredProducts = () => {
  const products = useSelector((state) => state.products.FilteredProducts);
  const { type } = useParams();
  return (
    <div className=" pt-14">
      <div className=" pl-14">
        <div className=" text-gray-600 font-inter font-bold  text-4xl tracking-normal  leading-none">
          {type}
        </div>
        <div className="grid grid-cols-4 justify-items-center py-8 gap-12 ">
          {products
            .filter((product) => product.type === type)
            .map((product, index) => {
              return (
                <div key={index}>
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    text={product.text}
                    img={product.img}
                    price={product.price}
                    colors={product.color}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default FilteredProducts;
