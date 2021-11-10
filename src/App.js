import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Pages/Context/AuthProvider';
import Dashboard from './Pages/Home/Home/Dashboard/Dashboard';
import Home from './Pages/Home/Home/Home';
import Register from './Pages/Home/Home/Register/Register';
import Login from './Pages/Home/Login/Login';
import NavBar from './Pages/Home/Navabar/NavBar';
import PlaceOrder from './Pages/Home/PlaceOrder/PlaceOrder';
import PrivateRoute from './Pages/Home/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <NavBar></NavBar>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/dashboard'>
              <Dashboard></Dashboard>
            </Route>
            <PrivateRoute path='/placeorder'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path='/register'>
              <Register></Register>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
