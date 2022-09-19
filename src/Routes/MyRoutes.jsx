import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "../FormComponents/LoginForm";
import SignUpForm from "../FormComponents/RegistrationForm";
import ComputerAcceseries from "../MyComponents/Computer&Accesseries/ComputerAccesserires";
import FashionPage from "../MyComponents/FashionPage/Fashion";
import HomePage from "../MyComponents/HomePage/HomePage";
import OrderPage from "../MyComponents/OrderPage/OrderPage";
import ProductDetailsFilter from "../MyComponents/ProductDetailsFilter/ProductDetailsFilter";
import ShopPage from "../MyComponents/ShopPage/ShopPage";
import UserProfilePage from "../MyComponents/UserProfilePage/Userprofilepage";
import Shopingcart from "../OtherComnponents/ShopingCart";

function RouterComponent() {
  return (
    <Routes>
      {/*Login form Component*/}
      <Route path="/" element={<LoginForm />} />
      <Route path="/loginform" element={<LoginForm />} />
      <Route path="/signupform" element={<SignUpForm />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/computer&accesseries" element={<ComputerAcceseries />} />
      <Route path="/fashion" element={<FashionPage />} />
      <Route path="/productdetails&filter" element={<ProductDetailsFilter />} />
      <Route path="/shopingcart" element={<Shopingcart />} />
      <Route path="/userprofile/:id" element={<UserProfilePage />} />
      <Route path="/orderpage/:id" element={<OrderPage />} />
    </Routes>
  );
}

export default RouterComponent;
