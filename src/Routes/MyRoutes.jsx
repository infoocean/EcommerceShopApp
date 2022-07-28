import React from 'react';
import {Routes,Route} from "react-router-dom";
import LoginForm from '../FormComponents/LoginForm';
import SignUpForm from '../FormComponents/RegistrationForm';

function RouterComponent() {
    return (
        <Routes>
            {/*Login form Component*/}
            <Route path="/" element={<LoginForm />} />
            <Route path="/loginform" element={<LoginForm />} />
            <Route path="/signupform" element={<SignUpForm />} />
        </Routes>
    );
  }
  
  export default RouterComponent;