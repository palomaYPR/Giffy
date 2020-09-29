import React from 'react'
import './App.css'
import ListOfGifs from './components/ListOfGifs'
import {Link, Route} from 'wouter'

function App() {  

  return (
    <div className="App">
      <section className="App-content">
        <h1>Giffy</h1>
        <Link to='/gif/desencanto'>Des-encanto Netflix Gifs</Link>
        <Link to='/gif/nation Z'>Nation Z Netflix Gifs</Link>
        <Link to='/gif/castlevania'>Castlevania Netflix Gifs</Link>
        <Route 
          component={ListOfGifs}
          path="/gif/:keyword"
        />        
      </section>             
    </div>
  );
}

export default App;
