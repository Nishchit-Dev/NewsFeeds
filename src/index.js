import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./component/News";
import Connect from "./component/connect";
import Header from "./component/headerComponents/header";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/News" element={<News />} />
      <Route path="/Connect" element={<Connect />} />
    </Routes>
  </BrowserRouter>
);
