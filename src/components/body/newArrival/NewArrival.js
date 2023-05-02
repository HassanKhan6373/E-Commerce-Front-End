/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import RightImage from "./NewArrivalRight.png";
import LeftImage from "./NewArrivalLeft.png";
import { TfiStar } from "react-icons/tfi";
import { useDispatch } from "react-redux";
import { addCart } from "../../../redux/actions";
import Materials from "../../data/materials.js";
import { useNavigate } from "react-router-dom";

import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosStats } from "react-icons/io";
import { useSelector } from "react-redux";

const NewArrival = () => {
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
                <a className="flex items-center space-x-1">
                  <div>View Cart</div>
                  <div>
                    <AiOutlineShoppingCart />
                  </div>
                </a>
              </div>
              <div className="flex items-center">
                <div>
                  <img
                    className="h-24 w-20 mx-6 object-cover object-center"
                    src={Item.image}
                    alt="blog"
                  />
                </div>
                <div className="flex flex-col space-y-2 items-start">
                  <p className="text-xs font-bold">{Item.name}</p>
                  <p className="text-xs text-gray-400">{Item.size}</p>
                  <p className="text-sm">{Item.price}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    
      
    </div>
  );
};

export default NewArrival;