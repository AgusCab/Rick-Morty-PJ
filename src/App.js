import './App.css'

import Cards from './components/Cards.jsx'
import Nav from "./components/Nav";
import { useState } from 'react';

function App () {
 const [characters, setCharacters] = useState([]);

  const onSearch = (character) => {
    
      fetch(`https://rickandmortyapi.com/api/character/${character}`)
         .then((response) => response.json())
         .then((data) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         });
   }
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch}/> 
      <div>
        <Cards
          characters={characters}
        />
      </div>
    </div>
    
  );


 //cambio

  


