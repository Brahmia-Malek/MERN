
import './App.css';
import {useState, useEffect} from "react";

import axios from 'axios';


function App() {
   const [pokemon, setPokemon] = useState([]);

    const axiosPokemon = () =>{
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then((response) =>{
      console.log(response.data);
      setPokemon(response.data);
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="App">
       <h1>POKEMON API 🦸‍♀️🦸‍♂️</h1>

       <button onClick={axiosPokemon}>Axios 💪 Pokemon</button> 
         <hr />
      
      <table>
        <thead>
          <tr>
           
            <th> name</th>
           
          </tr>
        </thead>
      <tbody>
        {pokemon.map((pokemon)=>{
          return (
            <tr key={pokemon.id}>
              
              <td>{pokemon.name}</td>
              
            </tr>
          )
        })}
      </tbody>

      </table>

      

      
    </div>
  );
}

export default App;
