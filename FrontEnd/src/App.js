import React from 'react';
import { BrowserRouter as Router,Switch,Route, } from 'react-router-dom';
import './style/style.css'

import Data from './data/data'
import Home from './component/Home/home'
import Header from './component/Home/Header/header'
import Login from './component/User/Login/login'
import Register from './component/User/Register/register'
import Cart from './component/User/Cart/cart'
import Footer from './component/Home/Footer/footer'
export default function App() {
  return (
    <Data>   
      <Router>
        <Header/>
        <Switch>    
          <Route exact path='/'>
            <Home/>
          </Route>   

          <Route path='/community'></Route>
          <Route path='/about'></Route>
          <Route path='/support'></Route>  
              
          <Route path='/user/login'>
            <Login/>
          </Route>

          <Route path='/user/register'>
            <Register/>
          </Route> 

          <Route path='/user/cart'>
            <Cart/>
          </Route>
        </Switch>

        <Footer/>        
      </Router>
    </Data>
  );
}
