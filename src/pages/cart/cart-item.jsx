import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="w-[700px] h-[250px] flex items-center border-r-[25px] m-[30px]">
      <img className="w-[200px]" src={productImage} />
      <div className="w-[100%] text-[30px]">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="w-[40px] text-center font-bold">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
