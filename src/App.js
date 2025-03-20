import React ,{useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";
import Home from "./components/pages/Home";
import Operator from "./components/pages/Operator";
import List from "./components/pages/List";
import FromExp from "./components/pages/FromExp";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Gallery from "./components/pages/Gallery";
import PropDrilling from "./components/pages/PropDrilling";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/about" element={<FromExp/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/gallery" element={<Gallery/>} />
      </Routes>
      <PropDrilling name="Bhanu" />
    </BrowserRouter>
  );
}

export default App;
