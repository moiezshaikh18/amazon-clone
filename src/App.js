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
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<h1>Login page</h1>}></Route>
          <Route path="/checkout" element={<h1>Checkout page</h1>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
