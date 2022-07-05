
import React,{ Component } from "react";
import {Routes,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Productlist from './components/Productlist';
import Details from './components/Details';
import Cart from './components/cart/Cart';

class App extends Component{
  render()
  {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route  path="" element={<Productlist/>}/>
        <Route path="details" element={<Details/>}/>
        <Route path="Cart" element={<Cart/>}/>
      </Routes>
      
      </div>
    
  );
}
}

export default App;
