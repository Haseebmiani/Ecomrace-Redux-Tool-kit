import React, { useState } from "react";
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";

const Navcart = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <div
        className="  flex  justify-end items-end   pr-6 pt-8  cursor-pointer   "
        onClick={handleOpen}>
        {totalAmount > 0 ? (
          <span className=" rounded-full bg-green-300  px-2 font-inter text-sm mr-2">
            {totalAmount}
          </span>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#000"
            className="size-8">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        )}

        <p className=" font-inter  text-xl   font-medium tracking-normal leading-none text-center ">
          Shopping Bag
        </p>
        <div>{open && <Cart openModal={open} setOpen={setOpen} />}</div>
      </div>
    </div>
  );
};

export default Navcart;
