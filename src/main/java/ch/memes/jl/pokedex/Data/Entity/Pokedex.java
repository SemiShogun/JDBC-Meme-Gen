package ch.memes.jl.pokedex.Data.Entity;

import ch.memes.jl.pokedex.Data.DAO.DAO;

import java.util.ArrayList;

public class Pokedex {
    private ArrayList<Pokemon> pokedex;

    public Pokedex(DAO dao) {
        super();
        pokedex = new ArrayList<Pokemon>();
        dao.getPokedex();
    }

    public Pokedex() {

    }
}
