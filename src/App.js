import React, {useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from "./components/header/header.component.jsx"
import SignUpAndSignInPage from './pages/sign-in-up-page/sign-in-up.component.jsx';
import CheckoutPage from './pages/checkout/checkout.component';


import { selectCurrentUser } from './redux/user/user.selectors';
import {checkUserSession} from './redux/user/user.actions';




const App = ({checkUserSession, currentUser}) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  
    return (
       <div>
        {/* <HomePage /> */}
        <Header/> 
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/shop' component={ShopPage} /> 
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact  path='/signin' render={ () => currentUser ? (<Redirect to='/' />) : (<SignUpAndSignInPage/>) } />
        </Switch>
      </div> 
    );
}

// const mapStateToProps = ({user}) => ({
//   currentUser: user.currentUser
// })

// added createstructredselector from reselect incase we need to pass other values later
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  a: () => true
})

const mapDispatchToProps = dispatch =>({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
 