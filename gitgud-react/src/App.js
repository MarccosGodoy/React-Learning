import './App.css';
import Start from './components/Start'
import Footer from './components/Footer'
import Session from './components/Sesion'
import ChooseSession from './components/ChooseSession'
import Aproved from './components/Aproved'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Start}/>
          <Route path="/chooseSesion" component={ChooseSession}/>
          <Route path="/Tutorial"/>
          <Route path="/Session" component={Session}/>
          <Route path="/Session" component={Session}/>
          <Route path="/Session" component={Session}/>
          <Route path="/Aproved" component={Aproved}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
