import React from 'react';
import { BrowserRouter, Routes, Route, Link, } from 'react-router-dom';
import './index.css';
//add to any doc using bootstrap styling, the import the components like below
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//use this for any specific css component 
import { Button, ButtonGroup } from 'react-bootstrap';
import TodoApp from './ToDo/todoApp';
import About from './About/About';
import JournalApp from './Journal/journalApp';



export default function App() {
  return (
    <div id='background'>

      <BrowserRouter>
        <ButtonGroup id='navbar' size="lg" aria-label="Basic example">
          <Link to="/"><Button variant="info">About</Button></Link>
          <Link to="/todo"><Button variant="info">ToDo</Button></Link>
          <Link to="/notes"><Button variant="info">Notes</Button></Link>
        </ButtonGroup>
      
        <Routes>
          <Route path='/todo' element={<TodoApp />} />
          <Route path='/' element={<About />} />
          <Route path='/notes' element={<JournalApp />} />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}



