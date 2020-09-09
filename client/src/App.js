import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Form from "./components/Form";
import Cards from "./components/Cards";

function App() {
    const [pokedex, setPokedex] = useState([]);
    const [pokemons, setPokemons] = useState([]);
    const [newPokemon, setNewPokemon] = useState('');
    const [newName, setNewName] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newType1, setNewType1] = useState('');
    const [newType2, setNewType2] = useState('');

    useEffect(() => {
        axios
            .get('/api/sqlite/pokedex')
            .then(res => {
                setPokedex(res.data)
            })
            .catch(err => {
                console.log(err);
            })
        axios
            .get('https://pokeapi.co/api/v2/pokemon')
            .then(res => {
                setPokemons(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const pokemonHandler = event => {
        event.preventDefault();
        setNewPokemon(event.target.value);
    }

    const nameHandler = event => {
        event.preventDefault();
        setNewName(event.target.value);
    }

    const descriptionHandler = event => {
        event.preventDefault();
        setNewDescription(event.target.value);
    }

    const type1Handler = event => {
        event.preventDefault();
        setNewType1(event.target.value);
    }

    const type2Handler = event => {
        event.preventDefault();
        setNewType2(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();

        const pokemon = {
            pokemon: newPokemon,
            name: newName,
            description: newDescription,
            type1: newType1,
            type2: newType2
        }

        axios.post(`/api/sqlite/pokedex`, pokemon )
            .then(res => {
                setPokedex(res.data);
                setNewPokemon('');
                setNewName('');
                setNewDescription('');
                setNewType1('');
                setNewType2('');
            });
    }

    const deletePokemon = pokemonID => {
        axios
            .delete(`/api/sqlite/pokedex/${pokemonID}`)
            .then(res => {
                setPokedex(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    const updatePokemon = (pokemonID, pokemon) => {
        axios
            .put(`/api/sqlite/pokedex/${pokemonID}`, pokemon)
            .then(res => {
                setPokedex(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

  return (
    <div className="App">
      <h1>Pokedex</h1>
        <Form submit={handleSubmit} pokemons={pokemons} pokemon={newPokemon} onChangePokemonHandler={pokemonHandler} name={newName}
              onChangeNameHandler={nameHandler} description={newDescription} onChangeDescriptionHandler={descriptionHandler}
              type1={newType1} onChangeType1Handler={type1Handler} type2={newType2} onChangeType2Handler={type2Handler}/>
        <Cards pokedex={pokedex} deletePokemon={deletePokemon} updatePokemon={updatePokemon}/>
    </div>
  );
}

export default App;
