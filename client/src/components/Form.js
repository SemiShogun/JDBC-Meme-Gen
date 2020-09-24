import React, { useEffect, useState } from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const Form = (props) => {

    const pokemonTypes = [
        "Normal",
        "Fire",
        "Water",
        "Grass",
        "Electric",
        "Ice",
        "Fighting",
        "Poison",
        "Ground",
        "Flying",
        "Psychic",
        "Bug",
        "Rock",
        "Ghost",
        "Dark",
        "Dragon",
        "Steel",
        "Fairy"
    ];

    return (
        <div>
            <h1>Create a pokemon</h1>

            <form onSubmit={props.submit}>
                <div>
                    <FormControl>
                        <InputLabel id="demo-simple-select-helper-label">Pokemon</InputLabel>
                        <Select
                            name="pokemon"
                            id="demo-simple-select-helper"
                            onChange={props.onChangePokemonHandler}
                            style={{ width: 400 }}>
                            {props.pokemons.map(pokemon => (
                                <MenuItem value={pokemon.name}>
                                    <em>{pokemon.name}</em>
                                </MenuItem>
                            ))}
                        </Select>
                        <FormHelperText>Choose your pokemon</FormHelperText>
                    </FormControl>
                </div>
                <div>
                    <TextField
                        name="name"
                        label="Name"
                        type="text"
                        value={props.name}
                        style={{ width: 400 }}
                        onChange={props.onChangeNameHandler}
                    />
                </div>
                <div>
                    <TextField
                        name="description"
                        label="Description"
                        type="text"
                        multiline
                        value={props.description}
                        rows={4}
                        style={{ width: 400 }}
                        onChange={props.onChangeDescriptionHandler}
                    />
                </div>
                <div>
                    <FormControl>
                        <InputLabel id="demo-simple-select-helper-label">Type1</InputLabel>
                        <Select
                            name="type1"
                            id="demo-simple-select-helper"
                            onChange={props.onChangeType1Handler}
                            style={{ width: 400 }}>
                            {pokemonTypes.map((type, index) => (
                                <MenuItem key={index} value={type}>
                                    <em>{type}</em>
                                </MenuItem>
                            ))}
                        </Select>
                        <FormHelperText>Choose your First type</FormHelperText>
                    </FormControl>
                </div>
                <div>
                    <FormControl>
                        <InputLabel id="demo-simple-select-helper-label">Type2</InputLabel>
                        <Select
                            name="type2"
                            id="demo-simple-select-helper"
                            onChange={props.onChangeType2Handler}
                            style={{ width: 400 }}>
                            {pokemonTypes.map((type, index) => (
                                <MenuItem key={index} value={type}>
                                    <em>{type}</em>
                                </MenuItem>
                            ))}
                        </Select>
                        <FormHelperText>Choose your Second Type</FormHelperText>
                    </FormControl>
                </div>
                <br/>
                <Button type="submit" variant="contained" color="primary">
                    <AddIcon/>
                </Button>
            </form>
        </div>
    );
}

export default Form;
