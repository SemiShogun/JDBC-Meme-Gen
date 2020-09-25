import React, { useEffect, useState, useRef } from 'react';
import Axios from 'axios';
import './App.css';
import Form from "./components/Form";
import Cards from "./components/Cards";
import soundfile from './audio/Theme.mp3';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AddIcon from '@material-ui/icons/Add';
import DatabaseMenu from "./components/DatabaseMenu";
import MusicBar from "./components/MusicBar";

function App() {
    const [pokedex, setPokedex] = useState([]);
    const [allPokemon, setAllPokemon] = useState([]);
    const [request, setRequest] = useState([]);
    const [openForm, setOpenForm] = useState(false);
    const [chosenDB, setChosenDB] = useState('sqlite');
    const [image, setimage] = useState('');
    const [chosenPokemon, setChosenPokemon] = useState('');
    const pokemonFieldRef = useState();
    const nameFieldRef = useRef();
    const descriptionFieldRef = useRef();
    const type1FieldRef = useRef();
    const type2FieldRef = useRef();

    let audio = new Audio(soundfile);
    let path = `/api/${chosenDB}/pokedex`;

    useEffect(() => {
        retrieveValues();
        Axios
            .get('https://pokeapi.co/api/v2/pokemon?limit=149')
            .then(res => {
                setAllPokemon(res.data.results);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        retrieveValues();
    }, [chosenDB]);

    useEffect(() => {
        console.log(chosenPokemon);
        Axios
            .get(`https://pokeapi.co/api/v2/pokemon/${chosenPokemon}`)
            .then(res => {
                setimage(res.data.sprites.front_default)
                console.log(image);
            })
            .catch(err => {
                console.log(err)
            })
        console.log("Change detected")
    }, [pokemonFieldRef])

    function playAudio() {
        audio.play();
    }

    function pauseAudio() {
        audio.pause();
    }

    const onChangeDatabaseType = event => {
        event.preventDefault();
        setChosenDB(event.target.value);
    }

    const onChangeChosenPokemon = event => {
        setChosenPokemon(event.target.value);
    }

    const deletePokemon = pokemon => {
        if (window.confirm(`Are you sure you want to delete ${pokemon.name}?`)) {
            console.log(`${path}/${pokemon.pokemonID}`);
            Axios
                .delete(`${path}/${pokemon.pokemonID}`)
                .then(res => {
                    setPokedex(res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        }
        console.log("Pokemon deletion cancelled.");
    }

    const editPokemon = pokemon => {
        console.log(`${path}/${pokemon.pokemonID}`);
        setRequest({
            path: `${path}/${pokemon.pokemonID}`,
            type: "PUT",
            pokemon: pokemon.pokemon,
            name: pokemon.name,
            description: pokemon.description,
            type1: pokemon.type1,
            type2: pokemon.type2,
            image: pokemon.image
        });
        setOpenForm(true);
    }

    const addPokemon = () => {
        setRequest({
            path: `${path}`,
            type: "POST",
            pokemon: "",
            name: "",
            description: "",
            type1: "",
            type2: "",
            image: ""
        });
        setOpenForm(true);
    }

    const closeForm = () => {
        setOpenForm(false);
    }

    const retrieveValues = () => {
        Axios
            .get(`${path}`)
            .then(res => {
                setPokedex(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    const handleSubmit = event => {
        event.preventDefault();

        Axios({
            method: request.type,
            url: request.path,
            data: {
                pokemon: pokemonFieldRef.current.value,
                name: nameFieldRef.current.value,
                description: descriptionFieldRef.current.value,
                type1: type1FieldRef.current.value,
                type2: type2FieldRef.current.value,
                image: image
            }
        })
            .then(res => {
                setPokedex(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

  return (
    <div className="App">
        <Grid container spacing={1} justify="space-around">
            <Grid spacing={2} justify="center" alignItems="center">
                <MusicBar playAudio={playAudio} pauseAudio={pauseAudio} />
                <DatabaseMenu onChangeDatabaseType={onChangeDatabaseType}/>
            </Grid>
            <Grid spacing={2} justify="center">
                <h1>Create a pokemon</h1>
                <Button onClick={addPokemon} variant="outlined" color="primary">
                    <AddIcon/>
                </Button>
                <Form handleSubmit={handleSubmit} openForm={openForm} closeForm={closeForm} request={request}
                      image={image} addPokemon={addPokemon} allPokemon={allPokemon}
                      pokemonFieldRef={pokemonFieldRef} nameFieldRef={nameFieldRef} descriptionFieldRef={descriptionFieldRef}
                      type1FieldRef={type1FieldRef} type2FieldRef={type2FieldRef} onChangeChosenPokemon={onChangeChosenPokemon}/>
            </Grid>
        </Grid>

      <h1>Pokedex</h1>
        <Cards pokedex={pokedex} deletePokemon={deletePokemon} editPokemon={editPokemon} handleSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
