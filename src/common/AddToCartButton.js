import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../../src/redux/actions";
import {AiOutlineShoppingCart} from 'react-icons/ai'

const AddToCartButton = ({ Item }) => {
  const dispatch = useDispatch();
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const notification = () => {
    setIsNavbarVisible(true);
    setTimeout(() => {
      setIsNavbarVisible(false);
    }, 4000);
  };

  const addProduct = (Item) => {
    setIsLoading(true);
    dispatch(addCart(Item));
    setTimeout(() => {
      setIsLoading(false);
      setIsNavbarVisible(false);
      notification();
    }, 1000);
  };

  return (
    <div>
      <div>
      {isNavbarVisible && (
        <div className="fixed right-6 bottom-6 w-72 h-48 bg-white text-black text-center z-50 shadow-2xl rounded-lg">
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
                src="https://dummyimage.com/720x400"
                alt="blog"
              />
            </div>
            <div className="flex flex-col space-y-2 items-start">
              <p className="text-xs font-bold">HP LP3065</p>
              <p className="text-xs text-gray-400">Size: L</p>
              <p className="text-sm">$ 100</p>
            </div>
          </div>
        </div>
      )}
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
  );
};

export default AddToCartButton;
