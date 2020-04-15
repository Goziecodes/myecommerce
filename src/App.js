import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from "./components/header/header.component.jsx"
import SignUpAndSignInPage from './pages/sign-in-up-page/sign-in-up.component.jsx';
import CheckoutPage from './pages/checkout/checkout.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';




class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    // console.log(this.props);

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      // this.setState({currentUser: user});
      // createUserProfileDocument(user);
      // console.log(user);
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          // console.log(snapShot.data());
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
      
          
          console.log(this.state); 
        });
    
      }
      setCurrentUser(userAuth);
      
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        {/* <HomePage /> */}
        <Header/> 
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/shop' component={ShopPage} /> 
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact  path='/signin' render={ () => this.props.currentUser ? (<Redirect to='/' />) : (<SignUpAndSignInPage/>) } />
        </Switch>
      </div>
    );
  }
}

// const mapStateToProps = ({user}) => ({
//   currentUser: user.currentUser
// })

// added createstructredselector from reselect incase we need to pass other values later
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps )(App);
 