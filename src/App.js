import Navigation from "./components/Navbar";
import Contacts from "./components/Contacts";
import AddContact from "./components/AddContact";
import store from "./store";
import {Provider} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
         <Router> 
    <Navigation />
     <Switch>
      <Route path="/" exact component={Contacts} ></Route>
      <Route path="/contact/add" exact component={AddContact} ></Route>
      </Switch>
     </Router>
    </Provider>
  );
}

export default App;
