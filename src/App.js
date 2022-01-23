import React from 'react';

import {Switch, Route, Redirect} from 'react-router-dom';

import { connect } from 'react-redux';

import HomePage from './Pages/HomePage/Homepage.component';
import ShopPage from './Pages/ShopPage/ShopPage.component';
import SignInAndSignUp from './Pages/Sign-in-and-up/Sign-in-and-up.component';
import CheckoutPage from './Pages/checkout/checkout.component';

import Header from './Components/header/Header.component';

import { setCurrentUser } from './redux/user/user.actions';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import { selectCurrentUser } from './redux/user/user,selector';

import { createStructuredSelector } from 'reselect';

import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null;
  
  componentDidMount(){
    
    const { setCurrentUser } = this.props;
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser : {
              id : snapShot.id,
              ...snapShot.data(),
            }
          });
        });
      }
      else {
        setCurrentUser(userAuth);
      }
    });
  }
  
  componentWillUnmount(){
    this.unsubscribeFromAuth(); 
  }
  
  render(){
  console.log(this.props);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path= '/' component = {HomePage} />
        <Route path='/shop' component = {ShopPage} />
        <Route exact path='/checkout' component = {CheckoutPage}/>
        <Route exact path='/signin' render = { ()=> this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUp /> } />

      </Switch>
    
    </div>
  );
}
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => {
  return(
    {
    setCurrentUser : user => dispatch(setCurrentUser(user)),  // note that this setCurrentUser which is in the dispatch, is different from the setCurrentUser in the object field.
  });
}

export default connect(mapStateToProps ,mapDispatchToProps)(App);
