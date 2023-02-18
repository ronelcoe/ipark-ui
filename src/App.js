import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import NewPlace from './places/pages/NewPlace';
import Header from './shared/components/Header';
import Login_Reister from './user/components/Login_Reister';
import Search from './search/pages/Search';

var userIsRegistered = true;

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Search/>} />
          <Route path='/register' element={<Login_Reister isRegistered={userIsRegistered}/>} />
          <Route path='/places/new' element={<NewPlace/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;