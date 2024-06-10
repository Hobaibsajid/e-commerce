import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className=" w-[300px] h-[350px] m-[100px] flex flex-col justify-center items-center hover:cursor-pointer duration-75">
      <img className="w-[400px]" src={productImage} />
      <div className="text-center">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="bg-transparent rounded-lg min-w-[100px] pl-[10px] pr-[10px] pt-[5px] pb-[5px]  hover:bg-slate-400 cursor-pointer" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
