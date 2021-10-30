import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import AddItem from './components/AddItem';
import AllLists from './components/AllLists';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Mylists from './components/Mylists';
import NotFound from './components/NotFound';
import PlaceDetails from './components/PlaceDetails';
import SignUp from './components/SignUp';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './private/PrivateRoute';

function App() {
  return (
    <div className="App">
<AuthProvider>
      <BrowserRouter>
      <Header></Header>
         <Switch>
           <Route path="/login" exact>
              <SignUp></SignUp>
           </Route>
           <Route path="/" exact>
              <Home></Home>
           </Route>
           <Route path="/home" exact>
              <Home></Home>
           </Route>
           <PrivateRoute path="/additem" exact>
              <AddItem></AddItem>
           </PrivateRoute>
           <PrivateRoute path="/mylists" exact>
              <Mylists></Mylists>
           </PrivateRoute>
           <PrivateRoute path="/all_lists" exact>
              <AllLists></AllLists>
           </PrivateRoute>
           <PrivateRoute path="/place/:id" exact>
              <PlaceDetails></PlaceDetails>
           </PrivateRoute>
           <Route path="*" exact>
              <NotFound></NotFound>
           </Route>
         </Switch>
         <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
