import React ,{useState} from "react";
import "./App.css";
import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";
import Home from "./components/pages/Home";
import Operator from "./components/pages/Operator";
import List from "./components/pages/List";
import FromExp from "./components/pages/FromExp";

function App() {
  return (
    <div classNameName="App">
      <Header />
      {/* <Operator/> */}
      {/* <List/> */}
      <FromExp/>
    </div>
  );
}

export default App;
