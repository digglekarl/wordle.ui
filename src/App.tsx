import React from 'react';
import './App.css';
import Home from './components/pages/home';
import About from './components/pages/about';
import Users from './components/pages/users';
import GameApp from './components/pages/game';
import GameState from './components/pages/game';

import { Navbar, Nav } from 'react-bootstrap';
import { Routes, Route, Link, NavLink  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img src='logo192.png' width={48} />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
          <Nav.Link as={NavLink} to='/users'>Scoreboard</Nav.Link>
          <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
        </Nav>
      </Navbar>

      <Routes>
        <Route path='/' element={<GameApp row={[]} rowIndex={0} currentIndex={0} letters={[]} />} ></Route>
        <Route path='/users' element={<Users />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
