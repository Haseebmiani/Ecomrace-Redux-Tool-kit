import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Typography,
  CardFooter,
  Tooltip,
} from "@material-tailwind/react";
import { singleProduct } from "../features/Slice/productSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { addToCart } from "../features/Slice/cartSlice";

const ProductSectionItem = ({
  id,
  name,
  img,
  text,
  price,
  size,
  color,
  totalPrice,
}) => {
  const { type } = useParams();
  const dispatch = useDispatch();
  const defaultSize = size[0];
  const defaultColor = color[0];

  return (
    <div>
      <Card className="w-96 relative">
        <Typography
          variant="h4"
          className="mb-2 absolute -rotate-45 top-12 right-8  z-10  text-red-600 ">
          SALE%
        </Typography>
        <Link to={`/filteredProducts/${type}/` + id}>
          <div onClick={() => dispatch(singleProduct(id))}>
            <p>{type}</p>
            <CardHeader floated={false} className="h-80">
              <img src={img} alt="" />
            </CardHeader>
            <CardBody className="text-center ">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                {name}
              </Typography>
              <Typography color="gray" className="font-medium" textGradient>
                {text}
              </Typography>
              <div className="flex justify-between items-center pt-4">
                <Typography
                  color="red"
                  size
                  className="font-medium"
                  textGradient>
                  Size left:
                  <span className="text-gray-400 text-base font-extralight">
                    {defaultSize}
                  </span>
                </Typography>
                <Typography color="gray" className="font-medium" textGradient>
                  Color:
                  <span
                    className="px-2 rounded-full ml-2"
                    style={{ backgroundColor: defaultColor }}></span>
                </Typography>
              </div>
            </CardBody>
          </div>
        </Link>
        <CardFooter className=" flex justify-center gap-8  pt-2">
          <Tooltip content="Add to Cart" placement="bottom">
            <Button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: id,
                    img: img,
                    text: text,
                    amount: 1,
                    price: price,
                    totalPrice: totalPrice,
                    name: name,
                    size: defaultSize,
                    color: defaultColor,
                  })
                )
              }
              size="lg"
              color="gray"
              variant="outlined"
              ripple={true}>
              Add to Cart
            </Button>
          </Tooltip>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductSectionItem;
