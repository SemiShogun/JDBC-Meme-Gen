import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

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
             <Dialog open={props.openForm} onClose={props.closeForm} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create/Update a pokemon</DialogTitle>
                <DialogContent>
                    <form onSubmit={props.handleSubmit}>
                        <FormControl>
                            <InputLabel id="demo-simple-select-helper-label">Pokemon</InputLabel>
                            <Select
                                name="pokemon"
                                id="demo-simple-select-helper"
                                defaultValue={props.request.pokemon}
                                inputRef={props.pokemonFieldRef}
                                style={{ width: 400 }}>
                                {props.allPokemon.map(pokemon => (
                                    <MenuItem value={pokemon.name}>
                                        <em>{pokemon.name}</em>
                                    </MenuItem>
                                ))}
                            </Select>
                            <FormHelperText>Choose your pokemon</FormHelperText>
                        </FormControl>
                        <TextField
                            name="name"
                            label="Name"
                            type="text"
                            defaultValue={props.request.name}
                            style={{ width: 400 }}
                            inputRef={props.nameFieldRef}
                        />
                        <TextField
                            name="description"
                            label="Description"
                            type="text"
                            multiline
                            value={props.description}
                            rows={4}
                            style={{ width: 400 }}
                            defaultValue={props.request.description}
                            inputRef={props.descriptionFieldRef}
                        />
                        <FormControl>
                            <InputLabel id="demo-simple-select-helper-label">Type1</InputLabel>
                            <Select
                                name="type1"
                                id="demo-simple-select-helper"
                                defaultValue={props.request.type1}
                                inputRef={props.type1FieldRef}
                                style={{ width: 400 }}>
                                {pokemonTypes.map((type, index) => (
                                    <MenuItem key={index} value={type}>
                                        <em>{type}</em>
                                    </MenuItem>
                                ))}
                            </Select>
                            <FormHelperText>Choose your First type</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <InputLabel id="demo-simple-select-helper-label">Type2</InputLabel>
                            <Select
                                name="type2"
                                id="demo-simple-select-helper"
                                defaultValue={props.request.type2}
                                inputRef={props.type2FieldRef}
                                style={{ width: 400 }}>
                                {pokemonTypes.map((type, index) => (
                                    <MenuItem key={index} value={type}>
                                        <em>{type}</em>
                                    </MenuItem>
                                ))}
                            </Select>
                            <FormHelperText>Choose your Second Type</FormHelperText>
                        </FormControl>
                        <DialogActions>
                            <Button onClick={props.closeForm} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={props.closeForm} color="primary" type="submit" label="submit">
                                Create/Update
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default Form;
