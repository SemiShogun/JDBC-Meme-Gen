import React, { useEffect, useState } from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Form = (props) => {

    // Filters suggestions
    const getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : props.pokemons.filter(pokemon =>
            pokemon.name.toLowerCase().slice(0, inputLength) === inputValue
        );
    }

    // Populating the input.
    const getSuggestionValue = suggestion => suggestion.results;

    const renderSuggestion = suggestion => (
        <div>
            {suggestion.results}
        </div>
    );

    return (
        <div>
            <h1>Form</h1>

            <form onSubmit={props.submit}>
                <div>
                    <TextField
                        label="Pokemon"
                        type="text"
                        value={props.pokemon}
                        style={{ width: 400 }}
                        onChange={props.onChangePokemonHandler}
                    />
                </div>
                <div>
                    <TextField
                        label="Name"
                        type="text"
                        value={props.name}
                        style={{ width: 400 }}
                        onChange={props.onChangeNameHandler}
                    />
                </div>
                <div>
                    <TextField
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
                    <TextField
                        label="Type1"
                        type="text"
                        value={props.type1}
                        style={{ width: 400 }}
                        onChange={props.onChangeType1Handler}
                    />
                </div>
                <div>
                    <TextField
                        label="Type2"
                        type="text"
                        value={props.type2}
                        style={{ width: 400 }}
                        onChange={props.onChangeType2Handler}
                    />
                </div>
                <Button type="submit" variant="contained" color="primary">
                    Add
                </Button>
            </form>
        </div>
    );
}

export default Form;
