import React from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Ser from './Component/Header/service';
import Footer from './Component/Footer/Footer';
import Test from './Component/Content/test';
function App() {
  return (
    <React.Fragment>
      <Header></Header>
    <Test/>
    <Ser/>
      <Footer></Footer>
    </React.Fragment>
    
  );
}

export default App;
