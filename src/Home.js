
import './App.css';
import { useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
let Kanto = [];
for(let i=1; i<=151; i++ ){
  Kanto.push(i)
}
let Johto = [];
for(let i=152; i<=251; i++ ){
  Johto.push(i)
}

let Hoenn = [];
for(let i=252; i<=386; i++ ){
  Hoenn.push(i)
}
let Shinnoh = [];
for(let i=387; i<=487; i++ ){
  Shinnoh.push(i)
}

function Home() {

  const initialState = Kanto;
  const [state, dispatch] = useReducer(reducer, initialState);
  const [pokeRegion, setPokeRegion] = useState('Kanto');

  function reducer(state, action) {
    switch (action.type) {
      case 'Kanto':
        return state = Kanto;
      case 'Johto':
        return state = Johto;
      case 'Hoenn':
        return state = Hoenn;
      case 'Shinnoh':
        return state = Shinnoh;
      default:
    }
  }



  return (
    <div className="App">
      <div className="buttons">
        <button onClick={() => {dispatch({ type: 'Kanto' }); setPokeRegion('Kanto')}}>
          Kanto
        </button>
        <button onClick={() => {dispatch({ type: 'Johto' }); setPokeRegion('Johto')}}>
        Johto
        </button>
        <button onClick={() => {dispatch({ type: 'Hoenn' }); setPokeRegion('Hoenn')}}>
        Hoenn
        </button>
        <button onClick={() => {dispatch({ type: 'Shinnoh' }); setPokeRegion('Shinnoh')}}>
        Shinnoh
        </button>
      </div>
      <div>
          <h1>{pokeRegion}</h1>
          <div className="pokemonContainer">
          {state.map((number) => (
            <div className="pokemon">
             <Link to={`/${number}`}> <img src={`https://os-cdn.ec-ffmt.com/gl/pokemon/dedicate/pattern-flat/${number}.jpg`} alt={number}/></Link>
              <p>{number}</p>
            </div>
          ))}
          </div>
      </div>
    </div>
  );
}

export default Home;
