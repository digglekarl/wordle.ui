import React from 'react';
import './App.css';
import Home from './components/pages/home';
import About from './components/pages/about';
import Users from './components/pages/users';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Link to='/'>Home</Link>
          <Link to='/users'>Users</Link>
          <Link to='/about'>About</Link>
        </Nav>

      </Navbar>

      


      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/users' element={<Users />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
