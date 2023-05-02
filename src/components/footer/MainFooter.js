/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";
import { BsTwitter, BsPinterest, BsYoutube } from "react-icons/bs";

const MainFooter = () => {
  return (
    <div className="">
      <div className="flex flex-row flex-wrap justify-center space-x-16">
        <div className="flex flex-col md:flex-row md:space-x-36 ">
          <div className="mb-10 w-full">
            <ul>
              <a className="hover:text-red-600 mb-2 inline-block cursor-pointer">
                Jeans
              </a>
              <br />
              <a className="hover:text-red-600 mb-2 inline-block cursor-pointer">
                Jacket & Coats
              </a>
              <br />
              <a className="hover:text-red-600 mb-2 inline-block cursor-pointer">
                Loungewear
              </a>
              <br />
              <a className="hover:text-red-600 mb-2 inline-block cursor-pointer">
                Polo Shirts
              </a>
              <br />
              <a className="hover:text-red-600 mb-2 inline-block cursor-pointer">
                Underwear
              </a>
              <br />
              <a className="hover:text-red-600 mb-2 inline-block cursor-pointer">
                Shirts
              </a>
            </ul>
          </div>
           <div className="w-full md:px-4">
            <ul>
              <a className="hover:text-red-600 mb-2 inline-block cursor-pointer">
                Shorts
              </a>
              <br />
              <a className="hover:text-red-600 mb-2 inline-block cursor-pointer">
                Suits
              </a>
              <br />
              <a className="hover:text-red-600 mb-2 inline-block cursor-pointer">
                Swimwear
              </a>
              <br />
              <a className="hover:text-red-600 mb-2 inline-block cursor-pointer">
                Tracksuits
              </a>
              <br />
              <a className="hover:text-red-600 mb-2 inline-block cursor-pointer">
                Trousers
              </a>
              <br />
              <a className="hover:text-red-600 mb-2 inline-block cursor-pointer">
                T-Shirts
              </a>
            </ul>
          </div>
          <div className="w-full md:px-4">
            <ul>
              <a className="hover:text-red-600 mb-2 inline-block cursor-pointer">
                My Account
              </a>
              <br />
              <a className="hover:text-red-600 mb-2 inline-block cursor-pointer">
                Order History
              </a>
              <br />
              <a className=" hover:text-red-600 mb-2 inline-block  cursor-pointer">
                Wish List
              </a>
              <br />
              <a className="hover:text-red-600 mb-2 inline-block cursor-pointer">
                Newsletter
              </a>
              <br />
              <a className="hover:text-red-600 mb-2 inline-block cursor-pointer">
                Affiliate
              </a>
              <br />
              <a className="hover:text-red-600 mb-2 inline-block cursor-pointer">
                Returns
              </a>
            </ul>
          </div>
        </div>
        <div></div>
        <div>
          <p className="text-gray-900 bg-black-100  : 0.75rem;">
            <h1 className="text-3xl font-bold">
              Join our newsletter and get $20 for <br />
              your first order
            </h1>
          </p>
          <form className="w-full mt-6">
            <div className="rounded-md sm:flex inset-5 ">
              <input
                type="email"
                id="UserEmail"
                placeholder="Email address"
                className="text-gray-400 w-80 mr-2 px-4 border rounded-full focus:outline "
              />
              <button
                type="button"
                className="bg-red-600 hover:bg-red-300 h-10 px-8 rounded-full text-white "
              >
                Subscribe
              </button>
            </div>
            <div className=" flex mt-2 space-x-3 sm:justify-left sm:mt-6  rounded-full ">
              <a className=" text-lg px-2 py-2 mt-2 text-gray-900 rounded-full  hover:bg-slate-500 cursor-pointer">
                <FaFacebookF />
              </a>
              <a className=" text-lg px-2 py-2 mt-2 text-gray-900   rounded-full hover:bg-cyan-700 cursor-pointer">
                <BsTwitter />
              </a>
              <a className="text-lg px-2 py-2 mt-2 text-gray-900 rounded-full  hover:bg-red-800 cursor-pointer">
                <BsPinterest />
              </a>
              <a className=" text-lg px-2 py-2 mt-2 text-gray-900 rounded-full hover:bg-cyan-600 cursor-pointer">
                <RxInstagramLogo />
              </a>
              <a className="text-lg px-2 py-2 mt-2 text-gray-900 rounded-full  hover:bg-red-800 cursor-pointer">
                <BsYoutube />
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
