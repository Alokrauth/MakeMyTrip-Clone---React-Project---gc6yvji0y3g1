import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../styles/App.css";
import Login from "./Login/Login";

import Master from "./Flight/Master";
import MasterTrain from "./Train/MasterTrain";
import MasterHotel from "./Hotel/MasterHotel";
import Header from "./Header/Header";
import Checkout from "./CheckOut/Checkout";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Master />} />
        <Route exact path='/masterTrain' element={<MasterTrain />} />
        <Route exact path='/masterHotel' element={<MasterHotel />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/checkout' element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default App;
