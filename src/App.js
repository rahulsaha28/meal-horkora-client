

import './App.css';
import Info from './components/Info/Info';
import Main from './components/Main/Main';
import NavBarCustom from './components/NavBarCustom/NavBarCustom';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import SpecificMeal from './components/SpecificMeal/SpecificMeal';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import { createContext, useState } from 'react';
import DeliveryDetail from './components/DeliveryDetail/DeliveryDetail';
import { localMealCartGet, useLocalStorage } from './components/Utility/StoringUser';
import LoginRoute from './components/LoginRoute/LoginRoute';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import LogoutRoute from './components/LogoutRoute/LogoutRoute';


export const UserContext = createContext();

function App() {
  // const [user, setUser] = useState({});
  const [user, setUser] = useLocalStorage('user', {});
  const [mealCart, setMealCart] = useLocalStorage('mealCart', []);
  
  return (
    <div className="app">
      <Router>
        <UserContext.Provider value={{user, setUser, mealCart, setMealCart}}>
          <NavBarCustom />
        

        <Switch>
          <LoginRoute path="/place-order">
            <PlaceOrder/>
          </LoginRoute>
          <Route path="/delivery-detail">
            <DeliveryDetail/>
          </Route>
          <LogoutRoute path="/create-account">
              <SignUp/>
          </LogoutRoute>
          <LogoutRoute path="/login">
            <Login/>
          </LogoutRoute>
          <Route path="/meal/:type/:id">
              <SpecificMeal/>
          </Route>
          <Route path="/meal/:type">
            <>
              <Info />
              <Main />
            </>
          </Route>

          <Route path="/">
            <>
              <Info />
              <Main />
            </>
          </Route>
        </Switch>
        </UserContext.Provider>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
