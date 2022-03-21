import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/">{/* <Header /> */}</Route>
        <Route path="/login">Login</Route>
        <Route path="/checkout">
          Checkout
          {/* <Header /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
