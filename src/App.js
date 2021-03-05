
import './App.css';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Personalform from './Personalform';
import Shiftplan from './Shiftplan';
import Reports from './Reports';
import Einstellungen from './Einstellungen';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/> 
        <div className='content'>
          <Switch>
            <Route exact path='/Personalform'>
              <Personalform/>
            </Route>
            <Route path='/Shiftplan'>
              <Shiftplan/>
            </Route> 
            <Route exact path='/Reports'>
              <Reports/>
            </Route> 
            <Route path='/Einstellungen'>
              <Einstellungen/>
            </Route> 
          </Switch>  
          
        </div>
      
    </div>
    </Router>
  );
}

export default App;
