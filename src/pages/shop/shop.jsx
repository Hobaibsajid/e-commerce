import React from "react";
import { PRODUCTS } from "../../product";
import { Product } from "./product";


export const Shop = () => {
  return (
    <div className="shop">
      <div className="mt-[100px] text-center font-[40px]">
        <h1>PakTech Shop</h1>
      </div>

      <div className="w-[100%] h-auto grid grid-cols-3 items-center">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
