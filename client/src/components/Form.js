import React, { useEffect, useState } from 'react';

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
                    <label>Pokemon</label>
                    <input
                        type="text"
                        value={props.pokemon}
                        onChange={props.onChangePokemonHandler}
                    />
                </div>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        value={props.name}
                        onChange={props.onChangeNameHandler}
                    />
                </div>
                <div>
                    <label>Description</label>
                    <input
                        type="text"
                        value={props.description}
                        onChange={props.onChangeDescriptionHandler}
                    />
                </div>
                <div>
                    <label>Type1</label>
                    <input
                        type="text"
                        value={props.type1}
                        onChange={props.onChangeType1Handler}
                    />
                </div>
                <div>
                    <label>Type2</label>
                    <input
                        type="text"
                        value={props.type2}
                        onChange={props.onChangeType2Handler}
                    />
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default Form;
