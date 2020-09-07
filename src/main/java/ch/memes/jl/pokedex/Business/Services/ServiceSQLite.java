package ch.memes.jl.pokedex.Business.Services;

import ch.memes.jl.pokedex.Data.Entity.Pokemon;

import java.util.ArrayList;

public interface ServiceSQLite {

    public ArrayList<Pokemon> getPokedex();
}
