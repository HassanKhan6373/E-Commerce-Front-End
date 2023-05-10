/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsPerson, BsArrowRight } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "./logo.png";

import { deleteCartItem } from "../../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const removeCard = (Item) => {
    dispatch(deleteCartItem(Item));
  };

  const [showNavbar, setShowNavbar] = useState(false);

  const navigate = useNavigate();
  // const gotoBlog = () => {
  //   navigate("/Blog");
  // };
  // const gotoAccounts = () => {
  //   navigate("/Accounts");
  // };
  // const gotoHome = () => {
  //   navigate("/");
  // };
  // const gotoProducts = () => {
  //   navigate("/Products");
  // };
  // const gotoLiked = () => {
  //   navigate("/Liked");
  // };
  // const gotoVeiwcart = () => {
  //   navigate("/viewcart");
  // };
  const gotoCheckout = () => {
    navigate("/checkout");
  };

  let total = 0;
  let totalCards = 0;
  state.map((item) => {
    return (total += item.price * item.qty);
  });

  state.map((item) => {
    return (totalCards += item.qty);
  });

  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible =
        currentScrollPos === 0 || currentScrollPos < window.innerHeight * 0.8;
      setShowNav(visible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full bg-white border-b border-gray-200 ${
          showNav ? "animate-slideDown" : "z-50 fixed top-0 animate-slideUp"
        }`}
      >
        <div className="">
          <div className="flex  top-0  justify-between py- border-b bg-white sm:px-4  w-full border-gray-200 dark:border-gray-600">
            <div className="flex flex-wrap items-center justify-between mx-auto container ">
              <a className="flex h-10 -mx-16 cursor-pointer ml-10">
                <img src={Logo} alt="Logo" />
              </a>

              <div className="flex  ml-12 items-center justify-between">
                <ul className="flex">
                  <li className="flex flex-row items-center space-x-6 text-md text-gray-700 ">
                    <a className="flex  items-center hover:text-red-800  pb-8 mt-8 cursor-pointer">
                      Shop
                    </a>

                    <a className="flex items-center hover:text-red-800 pb-8 mt-8 cursor-pointer">
                      Categories
                    </a>

                    <a className="flex items-center hover:text-red-800 pb-8 mt-8 cursor-pointer">
                      Men
                    </a>

                    <a className="flex items-center  hover:text-red-800 pb-8 mt-8 cursor-pointer">
                      Women
                    </a>

                    <a
                      href="#"
                      className="flex items-center hover:text-red-800"
                    >
                      Page
                    </a>
                    <a
                      href="#"
                      className="flex items-center hover:text-red-800"
                    >
                      Blog
                    </a>
                    <a
                      href="#"
                      className="flex items-center hover:text-red-800"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex -mx-14">
                <ul className="flex flex-row space-x-7">
                  {/* ok */}
                  <li className="flex space-x-5 text-xl">
                    <a>
                      <AiOutlineSearch />
                    </a>

                    <a className="Accounts hover:text-red-800 text-2xl">
                      <BsPerson />
                    </a>

                    <a className="Like hover:text-red-800 text-2xl">
                      <AiOutlineHeart />
                    </a>

                    <a
                      onClick={() => setShowNavbar(!showNavbar)}
                      className="Cart flex hover:text-red-800 text-2xl cursor-pointer"
                    >
                      <AiOutlineShoppingCart />
                      <p className="absolute text-xs bg-black text-white rounded-full w-5 text-center h-5 mx-5 -my-2 py-0.5">
                        {totalCards}
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="Cart">
            <div
              className={`${
                showNavbar ? "block" : "hidden"
              } fixed right-0 top-0 z-50 bg-gray-200 transform transition-all ease-in-out duration-1000`}
              style={{ right: showNavbar ? 0 : "-64px" }}
            >
              <div className="">
                <div className="relative z-40 scroll-m-4 w-96 h-screen shadow-md bg-white px-1 py-5">
                  <ul className="">
                    <li className="flex flex-row space-x-28">
                      <a className="flex text-sm py-4 px-9 h-12 font-bold overflow-hidden whitespace-nowrap transition duration-300 ease-in-out">
                        SHOPPING CART
                      </a>
                      <a
                        onClick={() => setShowNavbar(!showNavbar)}
                        className="flex items-center text-xs text-gray-500 hover:text-red-600 cursor-pointer"
                      >
                        close
                        <BsArrowRight />
                      </a>
                    </li>
                    <hr className="mx-7 my-2" />

                    {state.length > 0 ? (
                      <div className="flex flex-col w-full ">
                        <div className="w-full h-96 mt-6 overflow-hidden   scrollbar-thumb-stone-300 scrollbar-thin  scrollbar-h-24 ">
                          {/* rock */}

                          {state.map((item) => (
                            <div
                              key={item.key}
                              className="flex items-center w-52 h-28 mb-2 mx-8 border-gray-200"
                            >
                              <div className="flex justify-between">
                                <img
                                  className="h-28 cursor-pointer"
                                  src={item.image}
                                  alt={item.name}
                                />
                                <div className="  ml-1 w-48  pt-5  flex  flex-col  items-center ">
                                  <p className=" text-1xl font-medium pl-2  text-stone-700 cursor-pointer hover:text-red-600 duration-500">
                                    {item.name}

                                    {/* {item.qty} <span className="">X</span> {" "}<span className=" text-xl text-black"> ${item.price}</span> */}
                                  </p>

                                  <p className="text-xl mt-2 pl-2 text-gray-400">
                                    {item.qty} <span className="">X</span>{" "}
                                    <span className=" text-xl text-black">
                                      {" "}
                                      ${item.price}
                                    </span>
                                  </p>
                                  {/* <p className="pl-2 text-xl font-bold text-black">
                                    ${item.price}
                                  </p> */}

                                  {/* <button
                                    className="w-8 h-8 text-gray-400 hover:text-red-600"
                                    onClick={() => removeCard(item.id)}
                                  >
                                    <IoCloseCircleOutline className="w-5 h-5" />
                                  </button> */}
                                </div>
                              </div>
                              <div className="pl-24 justify-between h-full ">
                                <button
                                  className="w-8 h-8 pt-6 text-gray-400 hover:text-red-600"
                                  onClick={() => removeCard(item.id)}
                                >
                                  <IoCloseCircleOutline className="w-5 h-5" />
                                </button>
                                {/* <div className="flex ">
                                  <p className="text-xl text-gray-400">
                                    {item.qty} X
                                  </p>
                                  <p className="pl-2 text-xl font-bold text-black">
                                    ${item.price}
                                  </p>
                                </div> */}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="flex mt-5 h-10 space-x-28 border-gray-200 border-b-2">
                          <p className="text-sm text-gray-400">Subtotal</p>
                          <p className="font-semibold">${Math.round(total)}</p>
                        </div>

                        <div className="mt-3">
                          <button
                            className="bg-slate-900 text-white font-bold w-full h-10"
                            onClick={() => gotoCheckout()}
                          >
                            Checkout
                          </button>
                        </div>
                      </div>
                    ) : (
                      <p className="flex justify-center text-gray-500 text-xs mt-6">
                        Your cart is currently empty
                      </p>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
