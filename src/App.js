import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Home />
        <Routes>
          <Route path="/" element={<Header />}>
            {/* <Home /> */}
          </Route>
          <Route path="/login">Login</Route>
          <Route path="/checkout">
            Checkout
            {/* <Header /> */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
