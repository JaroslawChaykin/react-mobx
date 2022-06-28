import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';


function App() {
    return (
      <BrowserRouter>
          <div>
              <NavLink to={'/'}>Home</NavLink>
              <NavLink to={'portfolio'}>Portfolio</NavLink>
          </div>
          <Routes>
              <Route path={'/'} element={<Home/>} />
              <Route path={'/portfolio'} element={<Portfolio/>} />
          </Routes>
      </BrowserRouter>

);
}

export default App;
