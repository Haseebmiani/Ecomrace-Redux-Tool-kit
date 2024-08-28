import React from "react";
import { storeData } from "../../assets/data/dummyData";
import ProductSectionItem from "../ProductSection/ProductSectionItem";

const ProductSection = () => {
  return (
    <div>
      <div className=" py-2  rounded-md bg-black w-[50%] mx-auto ">
        <h2 className=" text-red-600 text-lg text-center font-bold   leading-none tracking-normal   ">
          Summer T.Shirt 30% Sale
        </h2>
      </div>
      <div className=" grid grid-cols-3 justify-items-center py-8 mx-auto max-w-7xl gap-4">
        {storeData.slice(0, 6).map((product, index) => {
          return (
            <div key={index}>
              <ProductSectionItem
                id={product.id}
                name={product.name}
                img={product.img}
                text={product.text}
                price={product.price}
                totalPrice={product.totalPrice}
                color={product.color}
                size={product.size}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSection;
