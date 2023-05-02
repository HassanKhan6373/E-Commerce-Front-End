import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../components/home/Homepage";

import { Provider } from "react-redux";
import store from "../redux/store/store";

import CheckOut from "../components/cart/checkout/CheckOut";


// it is line for store working not
store.subscribe(() => console.log(store.getState()));

function Routs() {
  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/Checkout" element={<CheckOut />} />


        </Routes>
      </Provider>
    </div>
  );
}

export default Routs;
