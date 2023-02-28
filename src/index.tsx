import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './components/counter/Counter';
import { Pokemon } from './models/Pokemon';
import PokemonList from './components/PokemonList/PokemonList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let pokemon: Pokemon = {
  name: 'Ditto',
  level: 3,
  health: 100,
  damage: 20,
  image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
}

let pokemonList: Pokemon[] = [
  {
    name: 'Ditto',
    level: 3,
    health: 100,
    damage: 20,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
  },
  {
    name: 'Pikachu',
    level: 5,
    health: 400,
    damage: 10,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
  }
]

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={ <App /> } />
        <Route path='/pokeList' element={ <PokemonList /> } />
      </Routes>
    </BrowserRouter>
    {/* <Counter />
    <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
