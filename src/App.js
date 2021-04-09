

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
import { localMealCartGet } from './components/Utility/StoringUser';


export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({});
  // const [mealCart, setMealCart] = useState(localMealCartGet()?.length>0? localMealCartGet() :[]);
  
  return (
    <div className="app">
      <Router>
        <UserContext.Provider value={{user, setUser}}>
          <NavBarCustom />
        

        <Switch>
          <Route path="/delivery-detail">
            <DeliveryDetail/>
          </Route>
          <Route path="/create-account">
              <SignUp/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
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
