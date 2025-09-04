import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineShopping,
  AiOutlineLogin,
  AiOutlineUserAdd,
  AiOutlineShoppingCart,
  AiOutlineLogout,
} from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <div
      id="navigation-container"
      style={{ zIndex: 999 }}
      className={`${showSidebar ? "hidden" : "flex"}
        xl:flex lg:flex md:hidden h-screen sm:hidden flex-col justify-between p-4 text-white rounded-tr-2xl rounded-br-2xl bg-black w-[4%] fixed hover:w-[15%]
        `}
    >
      <div className="flex flex-col justify-center space-y-4">
        <Link
          to="/"
          className="flex items-center transition-transform transform hover:translate-x-2 "
        >
          <AiOutlineHome className="mr-2 mt-[3rem]" size={26} />
          <span className="hidden nav-item-name mt-[3rem]">HOME</span>{" "}
        </Link>
        <Link
          to="/"
          className="flex items-center transition-transform transform hover:translate-x-2 "
        >
          <AiOutlineShopping className="mr-2 mt-[3rem]" size={26} />
          <span className="hidden nav-item-name mt-[3rem]">SHOP</span>{" "}
        </Link>
        <Link
          to="/"
          className="flex items-center transition-transform transform hover:translate-x-2 "
        >
          <AiOutlineShoppingCart className="mr-2 mt-[3rem]" size={26} />
          <span className="hidden nav-item-name mt-[3rem]">CART</span>{" "}
        </Link>
        <Link
          to="/"
          className="flex items-center transition-transform transform hover:translate-x-2 "
        >
          <FaHeart className="mr-2 mt-[3rem]" size={26} />
          <span className="hidden nav-item-name mt-[3rem]">FAVORITE</span>{" "}
        </Link>
      </div>

      <ul>
        <li>
         <Link
          to="/"
          className="flex items-center transition-transform transform hover:translate-x-2 "
        >
          <AiOutlineLogin className="mr-2 mt-[3rem]" size={26} />
          <span className="hidden nav-item-name mt-[3rem]">LOGIN</span>{" "}
        </Link>
        </li>
        <li>
         <Link
          to="/"
          className="flex items-center transition-transform transform hover:translate-x-2 "
        >
          <AiOutlineUserAdd className="mr-2 mt-[3rem]" size={26} />
          <span className="hidden nav-item-name mt-[3rem]">REGISTER</span>{" "}
        </Link>
        </li>
        <li  >
         <Link
          to="/"
          className="flex items-center transition-transform transform hover:translate-x-2 "
        >
          <AiOutlineLogout className="mr-2 mt-[3rem]" size={26} />
          <span className="hidden nav-item-name mt-[3rem]">LOGOUT</span>{" "}
        </Link>
        </li>
      </ul>

    </div>
  );
};

export default Navigation;
