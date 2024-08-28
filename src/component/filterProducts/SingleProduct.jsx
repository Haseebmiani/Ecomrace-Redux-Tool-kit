import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Tooltip, Button } from "@material-tailwind/react";
import { addToCart } from "../features/Slice/cartSlice";
import Navcart from "../Navbar/Navcart";

const SingleProduct = () => {
  const product = useSelector((state) => state.products.singleProduct);
  const sizeProduct =
    Array.isArray(product) &&
    product.length > 0 &&
    Array.isArray(product[0].size) &&
    product[0].size.length > 0
      ? product[0].size[0]
      : "";

  const colorProduct =
    Array.isArray(product) &&
    product.length > 0 &&
    Array.isArray(product[0].color) &&
    product[0].color.length > 0
      ? product[0].color[0]
      : "";

  const [size, setSize] = useState(sizeProduct);
  console.log("size", size);
  const [color, setColor] = useState(colorProduct);
  console.log("color", color);
  const { id } = useParams();
  const dispatch = useDispatch();

  if (!Array.isArray(product)) {
    return <div>Error: Products data is not an array.</div>;
  }

  return (
    <div>
      <Navcart />
      {product
        .filter((product) => product.id === id)
        .map((item, index) => {
          return (
            <div
              className=" flex justify-center items-center py-10"
              key={index}>
              <div className=" pl-44 grow-[2]">
                <img className=" h-[850px] rounded-lg" src={item.img} alt="" />
              </div>
              <div className=" grow-[3]">
                <div className="max-w-lg">
                  <h5 className="text-2xl font-inter font-bold tracking-normal leading-none pb-4">
                    {item.name}
                  </h5>
                  <p className="text-orange-700 text-xl font-inter font-bold tracking-normal leading-none pb-4">
                    15% OFF
                  </p>
                  <p className="text-gray-600 text-xl font-inter font-bold tracking-normal leading-none pb-4">
                    {item.text}
                  </p>
                  <div className="pb-4">
                    {item.siz ? (
                      <div>
                        <label
                          htmlFor="size"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Pick a size
                        </label>
                        <select
                          id="size"
                          name="size"
                          value={size}
                          onChange={(e) => setSize(e.target.value)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          {item.size.map((item, index) => {
                            return (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    ) : (
                      <div>
                        <div>
                          <label
                            htmlFor="size"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            pick a size
                          </label>

                          <select
                            id="size"
                            name="size"
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {item?.size?.map((item, index) => {
                              return (
                                <option key={index} value={item}>
                                  {item}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                        <div className=" pb-4">
                          <label
                            htmlFor="color"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Pick a color
                          </label>
                          <select
                            id="color"
                            name="color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {item.color.map((color, index) => {
                              return (
                                <option key={index} value={color}>
                                  {color}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                        <Tooltip content="Add to Cart" placement="bottom">
                          <Button
                            color="gray"
                            size="lg"
                            variant="outlined"
                            ripple={true}
                            onClick={() =>
                              dispatch(
                                addToCart({
                                  id: item.id,
                                  name: item.name,
                                  img: item.img,
                                  text: item.text,
                                  size: size,
                                  color: color,
                                  price: item.price,
                                  amount: 1,
                                  totalPrice: item.price,
                                })
                              )
                            }>
                            Add to Cart
                          </Button>
                        </Tooltip>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SingleProduct;
