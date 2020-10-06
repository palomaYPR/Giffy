import React from "react";
import "./App.css";
import Home from './pages/Home/'
import Detail from './pages/Detail'
import SearchResults from './pages/SearchResults'
import { Link, Route } from "wouter";


export default function App() {
  return (
    <div className="App">
      <section className="App-content">         
        <Link to="/">
          <img className="App-logo" alt='Giffy logo' src='/logo512.png'/>          
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

