import React from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import { Link, Route } from "wouter";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>Giffy</h1>
        <Link to="/">
          <img className="App-logo" alt='Giffy logo' src='/logo.png'/>          
        </Link>
        <Route
          component={Home}
          path='/'
        />
        <Route
          component={SearchResults}        
          path='/search/:keyword'
        />
        <Route
          component={Detail}
          path="/gif/:id"
        />        
      </section>
    </div>
  );
}

export default App;
