import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Inicio from './components/Inicio'
import Femenino from './components/Femenino'
import Masculino from './components/Masculino'
import Arqueros from './components/Arqueros'
import ScrollToTop from './components/ScrollToTop';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Inicio}/>
          <Route path="/Femenino" component={Femenino}/>
          <Route path="/Masculino" component={Masculino}/>
          <Route path="/Arqueros" component={Arqueros}/>
          <Route path="/Nav" component={Nav}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
