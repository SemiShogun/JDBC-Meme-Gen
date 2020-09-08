import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Form = (props) => {

    return (
        <div className="App">
            <h1>Form</h1>

            <form onSubmit={props.handleSubmit}>
                <div>
                    <label>Pokemon</label>
                    <input
                        type="text"
                        value={props.pokemon}
                        onChange={e => props.pokemonHandler(e.target.value)}
                    />
                </div>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        value={props.name}
                        onChange={e => props.nameHandler(e.target.value)}
                    />
                </div>
                <div>
                    <label>description</label>
                    <input
                        type="text"
                        value={props.description}
                        onChange={e => props.descriptionHandler(e.target.value)}
                    />
                </div>
                <div>
                    <label>type1</label>
                    <input
                        type="text"
                        value={props.type1}
                        onChange={e => props.type1Handler(e.target.value)}
                    />
                </div>
                <div>
                    <label>type2</label>
                    <input
                        type="text"
                        value={props.type2}
                        onChange={e => props.type2Handler(e.target.value)}
                    />
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default Form;
