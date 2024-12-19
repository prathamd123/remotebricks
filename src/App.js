import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Todo from './Todo';
import Employee from './Employee';

function App() {
  return (
    <div className='Main'>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/todo" element={<Todo />} /> {/* Todo List */}
        <Route path="/employee" element={<Employee />} /> {/* Employee List */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
