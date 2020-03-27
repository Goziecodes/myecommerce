import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';


const Hatspage = () => (
  <div>
    <h1>I am hatspage </h1>
  </div>
)


function App() {
  return (
    <div>
      {/* <HomePage /> */}
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop/hats' component={Hatspage} />
    </div>
  );
}

export default App;
 