package ch.memes.jl.pokedex.Data.DAO;

import ch.memes.jl.pokedex.Data.Entity.Pokemon;

import java.util.ArrayList;

public interface DAO {
    public ArrayList<Pokemon> getPokedex(ArrayList<Pokemon> pokedex);

}
