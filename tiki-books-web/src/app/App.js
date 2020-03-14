import React from 'react';
import './App.css';
import RouterURL from "../component/RouterURL";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <RouterURL/>
    </div>
    </Router>
  );
}

export default App;
