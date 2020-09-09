import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Popup from "reactjs-popup";

const useStyles = makeStyles({
    root: {
        minWidth: 200,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function OutlinedCard({ pokemon, deletePokemon, updatePokemon }) {
    const classes = useStyles();
    const [updatedPokemon, setUpdatedPokemon] = useState(pokemon.pokemon);
    const [updatedName, setUpdatedName] = useState(pokemon.name);
    const [updatedDescription, setUpdatedDescription] = useState(pokemon.description);
    const [updatedType1, setUpdatedType1] = useState(pokemon.type1);
    const [updatedType2, setUpdatedType2] = useState(pokemon.type2);

    const updatedPokemonHandler = event => {
        event.preventDefault();
        setUpdatedPokemon(event.target.value);
    }

    const updatedNameHandler = event => {
        event.preventDefault();
        setUpdatedName(event.target.value);
    }

    const updatedDescriptionHandler = event => {
        event.preventDefault();
        setUpdatedDescription(event.target.value);
    }

    const updatedType1Handler = event => {
        event.preventDefault();
        setUpdatedType1(event.target.value);
    }

    const updatedType2Handler = event => {
        event.preventDefault();
        setUpdatedType2(event.target.value);
    }

    function confirmation(pokemonID, name) {
        if (window.confirm(`Are you sure you want to delete ${name}?`)) {
            deletePokemon(pokemonID);
        }
        console.log("User cancelled deletion");
        return;
    }

    const updateSubmit = event => {
        event.preventDefault();

        const updatedData = {
            pokemon: updatedPokemon,
            name: updatedName,
            description: updatedDescription,
            type1: updatedType1,
            type2: updatedType2
        }

        updatePokemon(pokemon.pokemonID, updatedData)
    }

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">
                    {pokemon.name}
                </Typography>
                <Typography variant="h7" component="h2">
                    {pokemon.pokemon}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {pokemon.type1} {pokemon.type2}
                </Typography>
                <Typography variant="body2" component="p">
                    {pokemon.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Popup trigger={<button size="small">Update</button>} position="right center">
                    <div>
                        <form onSubmit={updateSubmit}>
                            <div>
                                <label>Pokemon</label>
                                <input
                                    type="text"
                                    value={updatedPokemon}
                                    onChange={updatedPokemonHandler}
                                />
                            </div>
                            <div>
                                <label>Name</label>
                                <input
                                    type="text"
                                    value={updatedName}
                                    onChange={updatedNameHandler}
                                />
                            </div>
                            <div>
                                <label>Description</label>
                                <input
                                    type="text"
                                    value={updatedDescription}
                                    onChange={updatedDescriptionHandler}
                                />
                            </div>
                            <div>
                                <label>Type1</label>
                                <input
                                    type="text"
                                    value={updatedType1}
                                    onChange={updatedType1Handler}
                                />
                            </div>
                            <div>
                                <label>Type2</label>
                                <input
                                    type="text"
                                    value={updatedType2}
                                    onChange={updatedType2Handler}
                                />
                            </div>
                            <button type="submit">Add</button>
                        </form>
                    </div>
                </Popup>
                <Button size="small" onClick={() => confirmation(pokemon.pokemonID, pokemon.name)}>Delete</Button>
            </CardActions>
        </Card>
    );
}