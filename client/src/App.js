import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Form from "./components/Form";
import Cards from "./components/Cards";
import soundfile from './audio/Route201.mp3';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function App() {
    const [pokedex, setPokedex] = useState([]);
    const [pokemons, setPokemons] = useState([]);
    const [newPokemon, setNewPokemon] = useState('');
    const [newName, setNewName] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newType1, setNewType1] = useState('');
    const [newType2, setNewType2] = useState('');
    let audio = new Audio(soundfile);

    useEffect(() => {
        axios
            .get('/api/sqlite/pokedex')
            .then(res => {
                setPokedex(res.data)
            })
            .catch(err => {
                console.log(err);
            });
        axios
            .get('https://pokeapi.co/api/v2/pokemon')
            .then(res => {
                setPokemons(res.data)
            })
            .catch(err => {
                console.log(err);
            });
    }, [])


    function playAudio() {
        audio.play();
    }

    function pauseAudio() {
        audio.pause();
    }

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
        <Grid container spacing={1} justify="space-around">
            <Grid spacing={2} justify="center" alignItems="center">
                <h1>Music</h1>
                <Button type="submit" onClick={playAudio} variant="contained" color="primary" style={{margin: 10}}>
                    Play
                </Button>
                <Button type="submit" onClick={pauseAudio} variant="contained" color="primary" style={{margin: 10}}>
                    Pause
                </Button>
            </Grid>
            <Grid spacing={2} justify="center">
                <Form submit={handleSubmit} pokemons={pokemons} pokemon={newPokemon} onChangePokemonHandler={pokemonHandler} name={newName}
                      onChangeNameHandler={nameHandler} description={newDescription} onChangeDescriptionHandler={descriptionHandler}
                      type1={newType1} onChangeType1Handler={type1Handler} type2={newType2} onChangeType2Handler={type2Handler}/>
            </Grid>
        </Grid>


      <h1>Pokedex</h1>
        <Cards pokedex={pokedex} deletePokemon={deletePokemon} updatePokemon={updatePokemon}/>
    </div>
  );
}

export default App;
