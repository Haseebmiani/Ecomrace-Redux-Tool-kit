import React from "react";
import { Button } from "@material-tailwind/react";
import clothes from "../../assets/images/clothes.jpg";
import { filterProducts } from "../features/Slice/productSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const NavigateButtons = () => {
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes ",
    "T-Shirts ",
    "Jeans",
    "Jackets",
    "Bags",
  ];
  const dispatch = useDispatch();

  return (
    <div>
      <div className=" flex justify-center  items-center  py-8">
        {buttons.map((button, index) => {
          return (
            <div key={index} className=" mr-4">
              <Link to={"/filteredProducts/" + button}>
                <Button
                  onClick={() => dispatch(filterProducts(button))}
                  color="gray"
                  variant="outline"
                  size="lg"
                  className=" hover: bg-light-green-300 duration-300  ease-in-out">
                  {button}
                </Button>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="   bg-green-300 p-4 w-[55%]  mx-auto rounded-md ">
        <h3 className=" text-orange-900 text-center text-lg rounded-md font-bold font-inter  tracking-normal  leading-none">
          Sales upt0 50%
        </h3>
      </div>
      <div className=" flex justify-center items-center py-4">
        <img
          className="h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600"
          src={clothes}
          alt=""
        />
      </div>
    </div>
  );
};

export default NavigateButtons;
