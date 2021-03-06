import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import CardMedia from "@material-ui/core/CardMedia";

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
    }
});

export default function OutlinedCard({ pokemon, deletePokemon, editPokemon }) {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">
                    {pokemon.pokemon}
                </Typography>
                <Typography variant="h7" component="h2">
                    {pokemon.name}
                </Typography>
                <img src={pokemon.type2} alt=""/>
                <Typography className={classes.pos} color="textSecondary">
                    {pokemon.type1}
                </Typography>
                <Typography variant="body2" component="p">
                    {pokemon.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="outlined" color="primary" onClick={() => editPokemon(pokemon)}>
                    <UpdateIcon/>
                </Button>
                <Button variant="outlined" color="secondary" onClick={() => deletePokemon(pokemon)}>
                    <DeleteIcon />
                </Button>
            </CardActions>
        </Card>
    );
}