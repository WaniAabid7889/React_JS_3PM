import React from 'react';
import './App.css';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';
import Home from './components/pages/Home';
function App() {
  return(
    <div className='App'>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;