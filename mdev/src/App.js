import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Inicio from './components/Inicio'
import SobreMi from './components/SobreMi'
import Conocimientos from './components/Conocimientos'
import Contacto from './components/Contacto'
import BomJogo from './components/BomJogo'
import GitGud from './components/GitGud'
import Cestoni from './components/Cestoni'


function App() {
  return (
      <Router>
        <div className="App">
          <Switch>
            <Route path='/' exact component={Inicio}/>
            <Route path="/SobreMi" component={SobreMi}/>
            <Route path="/Conocimientos" component={Conocimientos}/>
            <Route path="/Contacto" component={Contacto}/>
            <Route path="/BomJogo" component={BomJogo}/>
            <Route path="/GitGud" component={GitGud}/>
            <Route path="/Cestoni" component={Cestoni}/>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
