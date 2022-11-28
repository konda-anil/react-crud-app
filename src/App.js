import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layouts/Navbar';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import User from './components/users/User';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from './components/layouts/PageNotFound';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/contact' exact component={Contact}></Route>
          <Route path='/about' exact component={About}></Route>
          <Route path='/user/add' exact component={AddUser}></Route>
          <Route exact path='/users/edit/:id' component={EditUser} />
          <Route exact path='/users/:id' component={User} />
          <Route path='*' exact component={PageNotFound}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
