import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Remotebricks Assignment</h1>
      <ul>
        <li>
          {/* Correct route for Todo List */}
          <Link to="/todo">Todo List</Link>
        </li>
        <li>
          {/* Correct route for Employee List */}
          <Link to="/employee">Employee List</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
