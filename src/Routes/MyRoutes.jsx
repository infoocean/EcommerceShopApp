import React from 'react';
import {Routes,Route} from "react-router-dom";
import LoginForm from '../FormComponents/LoginForm';
import SignUpForm from '../FormComponents/RegistrationForm';
import FashionPage from '../MyComponents/FashionPage/Fashion';
import HomePage from '../MyComponents/HomePage/HomePage';
import ShopPage from '../MyComponents/ShopPage/ShopPage';

function RouterComponent() {
    return (
        <Routes>
            {/*Login form Component*/}
            <Route path="/" element={<LoginForm />} />
            <Route path="/loginform" element={<LoginForm />} />
            <Route path="/signupform" element={<SignUpForm />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/fashion" element={<FashionPage />} />
        </Routes>
    );
  }
  
  export default RouterComponent;