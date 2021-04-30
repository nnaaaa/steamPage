import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import {useContext} from 'react'
import './style/style.css'

import Data from './data/data'
import { DataConsumer } from './data/data'
import Header from './component/Home/Header/header'
import Footer from './component/Home/Footer/footer'
import Home from './component/Home/home'
import Login from './component/User/Login/login'
import Register from './component/User/Register/register'
import Cart from './component/User/Cart/cart'
import ListGame from './component/Game/ListGame/listGame'
import DetailGame from './component/Game/DetailGame/detailGame'
export default function App() {
  return (
    <Data>   
      <Router>
        <Header/>
        <Switch>    
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/store'>
            <ListGame/>
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
          <Route path='/game/detailCart'>
            <DetailGame/>
          </Route> 
        </Switch>

        <Footer/>        
      </Router>
    </Data>
  );
}
