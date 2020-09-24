import React from 'react';
import { Grid } from "@material-ui/core";
import Card from "./Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: "40px",
        paddingRight: "40px"
    }
});

const Cards = ({ pokedex, deletePokemon, editPokemon, handleSubmit }) => {
    const classes = useStyles();

    return (
        <div>
            <Grid
                container
                spacing={4}
                justify="space-evenly"
                className={classes.gridContainer}>
                {pokedex.map(pokemon => (
                    <Grid item xs={12} sm={6} md={4}>
                        <Card pokemon={pokemon} deletePokemon={deletePokemon} editPokemon={editPokemon}
                              handleSubmit={handleSubmit}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Cards;