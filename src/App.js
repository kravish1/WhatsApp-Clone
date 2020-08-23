import React from 'react';
import {useStateValue} from './StateProvider';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';

function App() {
  const [{user},dispatch] = useStateValue(); 
  return (
    <div className="app">
      <div className="app__body">
        {!user ? (
          <Login />
        ) : (
        <Router>
          <Sidebar />
          <Switch>
            <Route path='/rooms/:roomId'>
              <Chat />
            </Route>
            <Route path='/'>
              <Chat />
            </Route>
          </Switch>
        </Router>
        )}
      </div>
    </div>
  );
}

export default App;
