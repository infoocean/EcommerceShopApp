import React from 'react';
import {Routes,Route} from "react-router-dom";
import LoginForm from '../FormComponents/LoginForm';
import SignUpForm from '../FormComponents/RegistrationForm';
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
        </Routes>
    );
  }
  
  export default RouterComponent;