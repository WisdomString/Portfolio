import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './scripts/footer.js'
import Navbar from './scripts/navbar.js'

import './css/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './scripts/content.js'


ReactDOM.render(
  <React.StrictMode>
  
    <Navbar></Navbar>
    <Content></Content>
    
    <Footer></Footer>
   
  </React.StrictMode>,
  document.getElementById('root')
);

//always capital ang first letter