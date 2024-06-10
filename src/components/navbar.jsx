import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";


export const Navbar = () => {
  return (
    <div className="w-[100%] h-[80px] bg-slate-600">
      <div className="mr-[50px] flex items-center  justify-between pl-[900px]">
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
