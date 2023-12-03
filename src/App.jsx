/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Loginr";
import Signup from "./Components/Login/Signup";
import Home from "./Components/Home/Home";
import MyAC from "./Components/Login/MyAccount";
import { AuthProvider } from "../src/Components/Login/AuthContext";
import Support from "./Components/Support/Support";
import BookingForm from "./Components/BookingForm/BookingForm";
import RegisterUserForm from "./Components/RegisterUserForm/RegisterUserForm";
import BusReserve from "./Components/BusReserve/BusReserve";
import SoonApp from "./Components/SoonApp/SoonApp";
import Footer from "./Components/Footer/Footer";
import Info from "./Components/Info/Info";
import Test from "./Components/Test/Test";
import UI from "./Components/UIX/UI";
import SelectPlan from "./Components/SelectPlan/SelectPlan";

const App = () => {
  return (
    <AuthProvider>
      <div>
        <Navbar />
        <Home />
        <Support />
        <SoonApp />
        <Footer />

        {/* {/* 
        
        <Login />
        <Test />
        <UI/>
        <SelectPlan />
        
        <RegisterUserForm />
        <BusReserve />
        <BookingForm /> 
        
        <UserForm /> 
        <Info />
        
        <Signup />
        <MyAC /> */}
      </div>
    </AuthProvider>
  );
};

export default App;
