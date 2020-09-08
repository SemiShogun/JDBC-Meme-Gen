package ch.memes.jl.pokedex.Data.DAO;

import ch.memes.jl.pokedex.Data.Entity.Pokemon;

import java.util.ArrayList;

public interface DAO {
    ArrayList<Pokemon> getPokedex();

    Pokemon getPokemon(Long id);

    ArrayList<Pokemon> createPokemon(Pokemon pokemon);

    ArrayList<Pokemon> updatePokemon(Long id, Pokemon pokemon);

    ArrayList<Pokemon> deletePokemon(Long id);

}
