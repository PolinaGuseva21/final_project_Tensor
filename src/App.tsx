import React from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './components/Router/Router';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Router/>
      <Footer/>
    </BrowserRouter>      
  );
}

export default App;
