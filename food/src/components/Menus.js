import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";
import Header from "./Header";
import Checkout from "./Checkout";
import { AppProvider } from "./context/AppProvider";

import { AllMenus } from "./AllMenuContext";

function Menus() {
  return (
    <div>
      <Router>
        <AppProvider>
        <Header />
        <Hero />
        <Routes>
          <Route
            path="/"
            element={
              <AllMenus>
                <SpecialDishes />
                <FilteredDishes />
              </AllMenus>
            }
          />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        </AppProvider>
      </Router>
    </div>
  );
}

export default Menus;
