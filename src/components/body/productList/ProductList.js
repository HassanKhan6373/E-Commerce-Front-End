/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { TfiStar } from "react-icons/tfi";
import { useDispatch } from "react-redux";
import { addCart } from "../../../redux/actions";
import Materials from "../../data/materials.js";
import { useNavigate,Link } from "react-router-dom";
import { IoIosStats } from "react-icons/io";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useSelector } from "react-redux";

const ProductList = () => {
  const state = useSelector((state) => state.handleCart);

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [notificationTimeout, setNotificationTimeout] = useState(null);

  const notification = () => {
    setIsNavbarVisible(true);
    clearTimeout(notificationTimeout);
    const timeout = setTimeout(() => {
      setIsNavbarVisible(false);
    }, 4000);
    setNotificationTimeout(timeout);
  };

  const handleNotificationHover = () => {
    clearTimeout(notificationTimeout);
  };

  const handleNotificationLeave = () => {
    const timeout = setTimeout(() => {
      setIsNavbarVisible(false);
    }, 4000);
    setNotificationTimeout(timeout);
  };

  const addProduct = (Item) => {
    setIsLoading(true);
    dispatch(addCart(Item));
    setTimeout(() => {
      setIsLoading(false);
      notification();
    }, 1000);
  };

  const navigate = useNavigate();
  const gotoProductView = () => {
    navigate("/ProductView");
  };

  return (
    <div>
      <div>
        {state.map((Item) => (
          <div key={Item.id}>
            {isNavbarVisible && (
              <div
                className="fixed right-6 bottom-6 w-72 h-48 bg-white text-black text-center z-50 shadow-2xl rounded-lg"
                onMouseEnter={handleNotificationHover}
                onMouseLeave={handleNotificationLeave}
              >
                <div className="flex my-5 justify-center space-x-3 text-xs bg-gray-100 p-2 mx-6">
                  <div className="text-gray-400">Successfully added.</div>
                  <a className="flex items-center space-x-1 cursor-pointer">
                    <div>View Cart</div>
                    <div>
                      <AiOutlineShoppingCart />
                    </div>
                  </a>
                </div>
                <div className="flex items-center">
                  <div>
                    <img
                      className="h-24 w-20 mx-6 object-cover object-center cursor-pointer"
                      src={Item.image}
                      alt="blog"
                    />
                  </div>
                  <div className="flex flex-col space-y-2 items-start">
                    <p className="text-xs font-bold cursor-pointer hover:text-red-800">
                      {Item.name}
                    </p>
                    <p className="text-xs text-gray-400">{Item.size}</p>
                    <p className="text-sm">{Item.price}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <section>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Product List
            </h1>
          </div>
          {/* ............................ */}
          <div className="flex flex-wrap -m-2">
            {Materials.slice(0, 8).map((Item) => (
              <div key={Item.id} className="lg:w-1/4 md:w-1/2 p-4">
                <div className="relative block w-full bg-gray-900 group h-96">
                <Link to={`/Products/${Item.id}`} >
                  <img
                    
                    className="absolute inset-0 object-cover w-full h-96 group-hover:opacity-100 cursor-pointer"
                    src={Item.image}
                  /></Link>
                  <div className="relative ">
                    <div className="transition-all transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                      <div className="absolute top-2 right-4 flex flex-col space-y-4">
                        <div className=" bg-white rounded-full text-3xl flex  justify-center items-center text-gray-700 w-10 h-10">
                          <AiOutlineHeart />
                        </div>
                        <div className=" bg-white rounded-full text-3xl flex  justify-center items-center text-gray-700 w-10 h-10">
                          <IoIosStats />
                        </div>
                        <div className=" bg-white rounded-full text-3xl flex  justify-center items-center text-gray-700 w-10 h-10">
                          <AiOutlineSearch />
                        </div>
                      </div>
                      <button
                        className="absolute top-80 w-full py-3 my-5 text-sm font-bold text-white bg-black hover:drop-shadow-xl"
                        onClick={() => addProduct(Item)}
                      >
                        {isLoading ? (
                          <div className="flex justify-center items-center">
                            {/* will be adjust */}
                            {/* <span className="ml-3 pr-3">Adding card</span> */}
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          </div>
                        ) : (
                          "Add to cart"
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-gray-900 text-sm tracking-widest title-font mb-1">
                    {Item.name}
                  </p>
                  <p className="text-gray-900 mt-1">{Item.price}</p>
                  <ul className="mt-1 flex">
                    <li>
                      <TfiStar />
                    </li>
                    <li>
                      <TfiStar />
                    </li>
                    <li>
                      <TfiStar />
                    </li>
                    <li>
                      <TfiStar />
                    </li>
                    <li>
                      <TfiStar />
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductList;