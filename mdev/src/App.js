import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Start from './components/Start'
import WebDesign from './components/WebDesign'
import Productos from './components/Productos'
import AutoPublicador from './components/AutoPublicador'
import InstaMensajes from './components/InstaMensajes'
import Proximamente from './components/Proximamente'
import Info from './components/Info'
import Contacto from './components/Contacto'


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Start}/>
          <Route path="/WebDesign" component={WebDesign}/>
          <Route path='/Productos' component={Productos}/>
          <Route path='/AutoPublicador'component={AutoPublicador}/>
          <Route path='/InstaMensajes' component={InstaMensajes}/>
          <Route path='/Info' component={Info}/>
          <Route path='/Contacto' component={Contacto}/>
          <Route path='/Automatizaciones' component={Proximamente}/>
          <Route path='/Aplicaciones' component={Proximamente}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
