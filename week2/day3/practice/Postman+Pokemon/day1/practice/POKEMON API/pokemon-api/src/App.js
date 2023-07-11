import {useState} from 'react'
import './App.css';

function App() {

  const [pokemon,setPokemon]=useState([]);
  const fetchPOKEMON =()=>{
       fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then((serverResponse)=>{
      return serverResponse.json();
    })
    .then((jsonResponse) =>{
      console.log(jsonResponse);
      // set state here where I have access
      setPokemon(jsonResponse)
    })
    .catch((errObj)=>{console.log("❌❌ Got an Error =>", errObj)})    
  }
  
  return (
    <div className="App">
     <h1>POKEMON API</h1>
     <button  onClick={fetchPOKEMON}>fetch Pokemon</button>
     {    
                pokemon.map( (name, i)=> (
                    <p key={ i }>{ name }</p>
                ))
            }
        
      {JSON.stringify(pokemon)}
      

    </div>
  );
}

export default App ;
