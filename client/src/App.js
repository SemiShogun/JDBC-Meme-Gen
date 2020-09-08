import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Form from "./components/Form";

function App() {
    const [pokedex, setPokedex] = useState([]);
    const [pokemon, setPokemon] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type1, setType1] = useState('');
    const [type2, setType2] = useState('');

    useEffect(() => {
        axios
            .get('/api/sqlite/pokedex')
            .then(res => {
                setPokedex(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const pokemonHandler = event => {
        event.preventDefault();
        setPokemon(event.target.value);
    }

    const nameHandler = event => {
        event.preventDefault();
        setName(event.target.value);
    }

    const descriptionHandler = event => {
        event.preventDefault();
        setDescription(event.target.value);
    }

    const type1Handler = event => {
        event.preventDefault();
        setType1(event.target.value);
    }

    const type2Handler = event => {
        event.preventDefault();
        setType2(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();

        const pokemon = {
            pokemon: {pokemon},
            name: {name},
            description: {description},
            type1: {type1},
            type2: {type2}
        }

        axios.post(`/api/sqlite/pokedex`, pokemon )
            .then(res => {
                setPokedex(res);
            })
            .then(() => {
                setPokemon('');
                setName('');
                setDescription('');
                setType1('');
                setType2('');
            });
    }

  return (
    <div className="App">
      <h1>Pokedex</h1>

        <ul>
            {pokedex.map((pokemon, index) => (
                <li key={index}>{pokemon.pokemon}, {pokemon.name}, {pokemon.description}</li>
            ))}
        </ul>

        <Form handleSubmit={this.handleSubmit()} pokemon={pokemon} pokemonHandler={this.pokemonHandler()} name={name}
            nameHandler={nameHandler()} description={description} descriptionHandler={descriptionHandler()}
        type1={type1} type1Handler={type1Handler()} type2={type2} type2Handler={type2Handler()}/>
    </div>
  );
}

export default App;
