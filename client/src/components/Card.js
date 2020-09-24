import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';

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

export default function OutlinedCard({ pokemon, pokemons, deletePokemon, updatePokemon }) {
    const classes = useStyles();
    const [updatedPokemon, setUpdatedPokemon] = useState(pokemon.pokemon);
    const [updatedName, setUpdatedName] = useState(pokemon.name);
    const [updatedDescription, setUpdatedDescription] = useState(pokemon.description);
    const [updatedType1, setUpdatedType1] = useState(pokemon.type1);
    const [updatedType2, setUpdatedType2] = useState(pokemon.type2);
    const [open, setOpen] = React.useState(false);

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

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function confirmation(pokemonID, name) {
        if (window.confirm(`Are you sure you want to delete ${name}?`)) {
            deletePokemon(pokemonID);
        }
        console.log("User cancelled deletion");
        return;
    }

    const updateSubmit = event => {
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
                    {pokemon.pokemon}
                </Typography>
                <Typography variant="h7" component="h2">
                    {pokemon.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {pokemon.type1} {pokemon.type2}
                </Typography>
                <Typography variant="body2" component="p">
                    {pokemon.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    <UpdateIcon/>
                </Button>
                <div>
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Update {pokemon.name}</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                label="Pokemon"
                                type="text"
                                value={updatedPokemon}
                                onChange={updatedPokemonHandler}
                                fullWidth
                            />
                            <TextField
                                margin="dense"
                                label="Name"
                                type="text"
                                value={updatedName}
                                onChange={updatedNameHandler}
                                fullWidth
                            />
                            <TextField
                                margin="dense"
                                label="Description"
                                type="text"
                                value={updatedDescription}
                                onChange={updatedDescriptionHandler}
                                fullWidth
                            />
                            <TextField
                                margin="dense"
                                label="Type1"
                                type="text"
                                value={updatedType1}
                                onChange={updatedType1Handler}
                                fullWidth
                            />
                            <TextField
                                margin="dense"
                                label="Type2"
                                type="text"
                                value={updatedType2}
                                onChange={updatedType2Handler}
                                fullWidth
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={() => {
                                updateSubmit();
                                handleClose();
                            }} color="primary">
                                Update
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
                <Button variant="outlined" color="secondary" onClick={() => confirmation(pokemon.pokemonID, pokemon.name)}>
                    <DeleteIcon />
                </Button>
            </CardActions>
        </Card>
    );
}