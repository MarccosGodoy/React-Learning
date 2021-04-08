import './App.css';
import Nav from './components/Nav';
import burger from './images/burger.svg'
import {useState} from 'react'



function App() {
  const [showMenu, setShowMenu] = useState(false)
  
  return (
    <div className="App">
      <div className="uno">
        <h1>MDev</h1>
      </div>
      <div className="dos">
        <img src={burger} alt="" className="burger" onClick={() => setShowMenu(!showMenu)}/>
        
        <Nav show={showMenu}/>
      </div>
      
      
    </div>
  );
}

export default App;
